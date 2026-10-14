---
permalink: /assets/js/search-data.js
---
window.foselabSearchEntries = [
  {% assign visible_pages = site.pages | sort: 'nav_order' %}
  {% for p in visible_pages %}
    {% if p.permalink == '/' or p.nav %}
      {% unless p.autogen or p.search == false %}
        {
          title: {{ p.title | jsonify }},
          description: {{ p.description | default: '' | jsonify }},
          text: {{ p.content | markdownify | strip_html | normalize_whitespace | jsonify }},
          section: "Pages",
          url: {{ p.url | relative_url | jsonify }}
        },
      {% endunless %}
    {% endif %}
  {% endfor %}
  {% for collection in site.collections %}
    {% if collection.label == 'projects' or collection.label == 'tools' %}
      {% if collection.output %}
        {% for item in collection.docs %}
          {% unless item.search == false or item.published == false %}
            {
              title: {{ item.title | jsonify }},
              description: {{ item.description | default: '' | jsonify }},
              text: {{ item.content | markdownify | strip_html | normalize_whitespace | jsonify }},
              section: {{ collection.label | capitalize | jsonify }},
              {% if item.redirect %}
                url: {{ item.redirect | jsonify }}
              {% else %}
                url: {{ item.url | relative_url | jsonify }}
              {% endif %}
            },
          {% endunless %}
        {% endfor %}
      {% endif %}
    {% endif %}
  {% endfor %}
  {% for person in site.data.people %}
    {% assign person_anchor = person.name | slugify %}
    {% assign person_url = '/people/#' | append: person_anchor %}
    {
      title: {{ person.name | jsonify }},
      description: {{ person.role | jsonify }},
      text: {{ person.group | jsonify }},
      section: "People",
      url: {{ person_url | relative_url | jsonify }}
    },
  {% endfor %}
];
