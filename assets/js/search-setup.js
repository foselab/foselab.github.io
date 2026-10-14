(() => {
  const dialog = document.getElementById('site-search');
  if (!dialog) return;
  const input = document.getElementById('site-search-input');
  const results = document.getElementById('site-search-results');
  const status = document.getElementById('site-search-status');
  const normalize = (text) => String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const matchRanges = (value, words) => {
    const source = String(value || '');
    const offsets = [];
    let folded = '';
    for (let index = 0; index < source.length;) {
      const character = String.fromCodePoint(source.codePointAt(index));
      const normalized = character.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, ' ');
      for (const letter of normalized) {
        folded += letter;
        offsets.push({ start: index, end: index + character.length });
      }
      index += character.length;
    }
    const ranges = [];
    for (const word of new Set(words)) {
      let position = folded.indexOf(word);
      while (position !== -1) {
        ranges.push({ start: offsets[position].start, end: offsets[position + word.length - 1].end });
        position = folded.indexOf(word, position + 1);
      }
    }
    ranges.sort((a, b) => a.start - b.start || a.end - b.end);
    return ranges.reduce((merged, range) => {
      const previous = merged[merged.length - 1];
      if (previous && range.start <= previous.end) previous.end = Math.max(previous.end, range.end);
      else merged.push({ ...range });
      return merged;
    }, []);
  };
  const appendHighlighted = (target, value, words) => {
    const source = String(value || '');
    let position = 0;
    for (const range of matchRanges(source, words)) {
      target.append(document.createTextNode(source.slice(position, range.start)));
      const highlight = document.createElement('strong');
      highlight.textContent = source.slice(range.start, range.end);
      target.append(highlight);
      position = range.end;
    }
    target.append(document.createTextNode(source.slice(position)));
  };
  const appendExcerpts = (target, value, words) => {
    const source = String(value || '');
    const windows = words.map(word => matchRanges(source, [word])[0]).filter(Boolean).map(range => ({
      start: Math.max(0, range.start - 45),
      end: Math.min(source.length, range.end + 90)
    })).sort((a, b) => a.start - b.start);
    const merged = windows.reduce((list, window) => {
      const previous = list[list.length - 1];
      if (previous && window.start <= previous.end) previous.end = Math.max(previous.end, window.end);
      else list.push({ ...window });
      return list;
    }, []);
    merged.forEach((window, index) => {
      if (index || window.start) target.append(document.createTextNode('… '));
      appendHighlighted(target, source.slice(window.start, window.end), words);
      if (index === merged.length - 1 && window.end < source.length) target.append(document.createTextNode(' …'));
      else if (index < merged.length - 1) target.append(document.createTextNode(' '));
    });
  };
  const entries = (window.foselabSearchEntries || []).map(entry => ({
    ...entry,
    normalizedTitle: normalize(entry.title),
    haystack: normalize([entry.title, entry.description, entry.text, entry.section].join(' '))
  }));
  const render = () => {
    const query = normalize(input.value);
    const words = query.split(' ').filter(Boolean);
    const matches = entries.filter(entry => words.every(word => entry.haystack.includes(word)));
    matches.sort((a, b) => {
      const score = entry => (entry.normalizedTitle === query ? 100 : 0)
        + (query && entry.normalizedTitle.startsWith(query) ? 30 : 0)
        + words.filter(word => entry.normalizedTitle.includes(word)).length * 10;
      return score(b) - score(a);
    });
    const shown = query ? matches.slice(0, 30) : matches.filter(entry => entry.section === 'Pages');
    results.replaceChildren();
    for (const entry of shown) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = entry.url;
      const title = document.createElement('span');
      title.className = 'search-result-title';
      appendHighlighted(title, entry.title, words);
      const category = document.createElement('span');
      category.className = 'search-result-category';
      appendHighlighted(category, entry.section, words);
      link.append(title, category);
      if (entry.description) {
        const description = document.createElement('p');
        appendHighlighted(description, entry.description, words);
        link.append(description);
      }
      const visibleText = normalize([entry.title, entry.description, entry.section].join(' '));
      const hiddenWords = words.filter(word => !visibleText.includes(word));
      if (hiddenWords.length && entry.text) {
        const excerpt = document.createElement('p');
        excerpt.className = 'search-result-excerpt';
        appendExcerpts(excerpt, entry.text, hiddenWords);
        link.append(excerpt);
      }
      item.append(link);
      results.append(item);
    }
    status.textContent = query
      ? matches.length ? matches.length + (matches.length === 1 ? ' result' : ' results') + (matches.length > 30 ? ' — showing the first 30' : '') : 'No results. Try another name or keyword.'
      : '';
  };
  window.openSearchModal = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar.classList.contains('show') && window.jQuery) window.jQuery(navbar).collapse('hide');
    input.value = '';
    render();
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('search-open');
    input.focus();
  };
  document.getElementById('search-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('search-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  input.addEventListener('input', render);
  dialog.addEventListener('keydown', event => {
    const links = Array.from(results.querySelectorAll('a'));
    const index = links.indexOf(document.activeElement);
    if (event.key === 'ArrowDown' && links.length) {
      event.preventDefault();
      links[Math.min(index + 1, links.length - 1)].focus();
    } else if (event.key === 'ArrowUp' && index >= 0) {
      event.preventDefault();
      if (index === 0) input.focus();
      else links[index - 1].focus();
    } else if (event.key === 'Enter' && document.activeElement === input && links.length) {
      event.preventDefault();
      links[0].click();
    }
  });
  render();
})();
