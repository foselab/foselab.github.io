---
layout: page
title: Projects
permalink: /projects/
description: Research collaborations tackling complex software challenges.
nav: true
nav_order: 3
---

<div class="collection-grid">
  {% assign sorted_projects = site.projects | sort: 'start_date' | reverse %}
  {% for project in sorted_projects %}
    {% include lab_collection_card.liquid %}
  {% endfor %}
</div>
