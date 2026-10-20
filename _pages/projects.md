---
layout: page
title: Projects
permalink: /projects/
description: Research collaborations tackling complex software challenges.
nav: true
nav_order: 3
---

<div class="collection-grid">
  {% assign visible_projects = site.projects | where: 'show', true %}
  {% assign sorted_projects = visible_projects | sort: 'start_date' | reverse %}
  {% for project in sorted_projects %}
    {% include lab_collection_card.liquid %}
  {% endfor %}
</div>
