---
layout: page
title: Industry Collaborations
description: Connecting formal methods and software engineering with industry challenges.
permalink: /industry/
nav: true
nav_order: 4
collaborations:
  - title: Testing an embedded controller
    partner: Example partner
    logo: null
    description: >-
      In this example, the group and an industry partner would define the controller's
      requirements, model its expected behaviour, and generate tests from the model.
      Simulated scenarios would help identify unexpected behaviour and guide improvements
      before deployment.
---

Industry collaborations bring our research in formal methods and software engineering to practical development challenges.

<div class="industry-collaborations">
  {% for collaboration in page.collaborations %}
    <article class="industry-collaboration{% if collaboration.logo %} has-logo{% endif %}">
      {% if collaboration.logo %}
        <div class="industry-collaboration-logo">
          <img src="{{ collaboration.logo | relative_url | escape }}" alt="{{ collaboration.partner | escape }} logo" loading="lazy" decoding="async">
        </div>
      {% endif %}
      <div class="industry-collaboration-content">
        <h2>{{ collaboration.title | escape }}</h2>
        <p class="industry-collaboration-partner"><strong>Partner:</strong> {{ collaboration.partner | escape }}</p>
        <p>{{ collaboration.description | escape }}</p>
      </div>
    </article>
  {% endfor %}
</div>
