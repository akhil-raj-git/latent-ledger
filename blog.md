---
layout: default
title: "Blog"
subtitle: "Notes, write-ups, and longer-form posts"
permalink: /blog/
---

<div class="container py-8">
  <header class="page-header mb-8">
    <h1 class="page-title">{{ page.title }}</h1>
    {% if page.subtitle %}
    <p class="page-subtitle">{{ page.subtitle }}</p>
    {% endif %}
  </header>

  {% assign posts = site.posts %}
  {% if posts.size > 0 %}
  <ul class="blog-list">
    {% for post in posts %}
    <li class="blog-list-item">
      <h2 class="card-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <p class="text-muted">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      </p>
      {% if post.excerpt %}
      <p class="card-excerpt">{{ post.excerpt | strip_html | truncate: 220 }}</p>
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <p class="text-muted">No posts yet.</p>
  {% endif %}
</div>
