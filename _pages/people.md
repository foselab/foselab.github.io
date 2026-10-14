---
layout: page
title: People
description: The researchers behind our models, methods, and tools.
permalink: /people/
nav: true
nav_order: 2
---

{% assign groups = 'faculty,researcher,postdoc,phd' | split: ',' %}
{% assign headings = 'Faculty,Researcher,Postdoc,PhD' | split: ',' %}
{% for group in groups %}
  {% assign heading = headings[forloop.index0] %}
  {% assign members = site.data.people | where: 'group', group %}
  <section class="people-section" aria-labelledby="people-{{ group }}">
    <h2 id="people-{{ group }}">{{ heading }}</h2>
    {% if members.size > 0 %}
      <div class="people-grid">
        {% for person in members %}
          {% if person.url %}<a class="person-card" id="{{ person.name | slugify }}" href="{{ person.url }}">{% else %}<div class="person-card" id="{{ person.name | slugify }}">{% endif %}
            {% if person.image %}
              {% assign portrait = '/assets/img/' | append: person.image %}
              <div class="person-portrait"><img src="{{ portrait | relative_url }}" alt="{{ person.name }}" loading="lazy" decoding="async"></div>
            {% else %}
              <div class="person-placeholder" aria-label="Portrait not yet available">{{ person.initials }}</div>
            {% endif %}
            <div class="person-info"><h3>{{ person.name }}</h3><p>{{ person.role }}</p></div>
          {% if person.url %}</a>{% else %}</div>{% endif %}
        {% endfor %}
      </div>
    {% else %}
      <p class="people-empty"></p>
    {% endif %}
  </section>
{% endfor %}

<div class="people-community">
  <h2>Former members</h2>
  <ul>
    {% assign former_members = site.data.people | where: 'group', 'former' %}
    {% for person in former_members %}<li id="{{ person.name | slugify }}">{{ person.name }}<span class="community-role">{{ person.role }}</span></li>{% endfor %}
  </ul>
  <h2>Collaborators (past and present)</h2>
  <ul>
    {% assign collaborators = site.data.people | where: 'group', 'collaborators' %}
    {% for person in collaborators %}<li id="{{ person.name | slugify }}"><a href="{{ person.url }}">{{ person.name }}</a><span class="community-role">{{ person.role }}</span></li>{% endfor %}
  </ul>
</div>




