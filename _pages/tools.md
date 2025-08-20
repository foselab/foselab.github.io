---
layout: page
permalink: /tools/
title: Tools
description: Tools developed within FOSELAB@unibg group
nav: true
nav_order: 5
---

Software tools we are developing or have developed. 

<!-- Display tools without categories -->
{%- assign sorted_projects = site.tools | sort: "importance" -%}
<!-- Generate cards for each tool (use style of projects ANGELO-->
<div class="container">
   <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
    {% include projects_horizontal.liquid %}
    <br>
    {%- endfor %}
</div>

