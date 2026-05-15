---
layout: default
title: "Papers"
subtitle: "In-depth analysis of research papers and breakthroughs"
---

<div class="papers-container container py-8">
  <header class="page-header mb-8">
    <h1 class="page-title">{{ page.title }}</h1>
    <p class="page-subtitle">{{ page.subtitle }}</p>
  </header>

  {% assign papers = site.papers | sort: 'date' | reverse %}

  <div class="papers-grid">
    {% for paper in papers %}
    <article class="card" itemscope itemtype="https://schema.org/ScholarlyArticle">
      <div class="card-header">
        <h2 class="card-title">
          <a href="{{ paper.url | relative_url }}">{{ paper.title }}</a>
        </h2>
        <span class="badge badge--primary" title="Read time">
          ⏱ {{ paper.read_time | default: '5' }} min
        </span>
      </div>
      
      <p class="card-excerpt">{{ paper.excerpt | strip_html | truncate: 200 }}</p>
      
      <div class="card-meta">
        <span class="card-date" title="Published date">
          📅 {{ paper.date | date: "%B %d, %Y" }}
        </span>
        {% if paper.categories %}
        <div class="card-categories">
          {% for category in paper.categories %}
          <a href="{{ '/categories/' | relative_url }}#{{ category | downcase }}" class="tag">
            {{ category }}
          </a>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      
      <div class="card-actions mt-4">
        {% if paper.pdf_url %}
        <a href="{{ paper.pdf_url }}" class="btn btn--outline btn-sm">Read PDF</a>
        {% endif %}
        {% if paper.code_url %}
        <a href="{% if paper.code_url contains '://' %}{{ paper.code_url }}{% else %}{{ paper.code_url | relative_url }}{% endif %}" class="btn btn--secondary btn-sm">Code</a>
        {% endif %}
        <a href="{{ paper.url | relative_url }}" class="btn btn--primary btn-sm">Read More</a>
      </div>
    </article>
    {% endfor %}
  </div>
  
  {% if papers.size == 0 %}
  <div class="empty-state">
    <div class="empty-state-icon">📚</div>
    <h3 class="empty-state-title">No papers yet</h3>
    <p class="empty-state-description">
      Check back soon for new research paper analyses and breakdowns.
    </p>
  </div>
  {% endif %}
  
  <div class="view-all mt-8 text-center">
    <a href="{{ '/papers/' | relative_url }}" class="btn btn--outline">View All Papers</a>
  </div>
</div>