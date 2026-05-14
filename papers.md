---
layout: page
title: "Papers"
subtitle: "AI, ML, and Agentic Engineering research papers"
permalink: /papers/
---

<div class="papers-filter">
  <input type="text" id="search-papers" placeholder="Search papers by title, author, or tag..." onkeyup="filterPapers()">
  <select id="filter-category" onchange="filterPapers()">
    <option value="">All Categories</option>
    <option value="arxiv">arXiv Papers</option>
    <option value="review">Review Papers</option>
    <option value="tutorial">Tutorials</option>
    <option value="thesis">Theses</option>
  </select>
  <select id="filter-year" onchange="filterPapers()">
    <option value="">All Years</option>
    {% assign years = site.papers | map: 'date' | split: '-' | first | compact %}
    {% for year in (2020..2026) reverse %}
    <option value="{{ year }}">{{ year }}</option>
    {% endfor %}
  </select>
</div>

<div id="papers-container" class="papers-grid">
  {% assign papers = site.papers | sort: 'date' | reverse %}
  {% for paper in papers %}
  <article class="paper-card paper-item" 
           data-title="{{ paper.title | downcase }}"
           data-authors="{{ paper.authors | downcase }}"
           data-tags="{{ paper.tags | join: ' ' | downcase }}"
           data-category="{{ paper.category | default: 'arxiv' | downcase }}"
           data-year="{{ paper.date | split: '-' | first }}">
    
    <div class="paper-card-header">
      {% if paper.image %}
      <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}" class="paper-image">
      {% endif %}
      <div class="paper-meta">
        <span class="paper-date">{{ paper.date | date: "%B %d, %Y" }}</span>
        {% if paper.category %}
        <span class="paper-badge {{ paper.category | default: 'arxiv' | downcase }}">{{ paper.category | default: 'arXiv' }}</span>
        {% endif %}
      </div>
    </div>
    
    <h2 class="paper-title"><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h2>
    
    {% if paper.authors %}
    <p class="paper-authors">by {{ paper.authors }}</p>
    {% endif %}
    
    <p class="paper-excerpt">{{ paper.excerpt | strip_html | truncate: 200 }}</p>
    
    {% if paper.tags and paper.tags.size > 0 %}
    <div class="paper-tags">
      {% for tag in paper.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
    
    <div class="paper-actions">
      <div class="paper-links">
        {% if paper.pdf_url %}
        <a href="{{ paper.pdf_url }}" class="btn btn--pdf" title="Download PDF">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7h-3v3h-2v-3H8v-2h2V8h1v2h3v2z"/></svg>
          PDF
        </a>
        {% endif %}
        {% if paper.code_url %}
        <a href="{{ paper.code_url }}" class="btn btn--code" title="View Code">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c-.83 0-1.5-.67-1.5-1.5S14.67 8 13.83 8H11v2.5h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5V14h2.5c.83 0 1.5-.67 1.5-1.5S15.33 11 14.5 11z"/></svg>
          Code
        </a>
        {% endif %}
        {% if paper.blog_url %}
        <a href="{{ paper.blog_url }}" class="btn btn--blog" title="Read Blog Post">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/></svg>
          Blog
        </a>
        {% endif %}
      </div>
      
      <div class="paper-metrics">
        <span class="metric" title="Read time">
          <svg viewBox="0 0 24 24" width="14" height="14"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          {{ paper.read_time | default: '5' }} min
        </span>
        {% if paper.likes %}
        <span class="metric" title="Likes">
          <svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          {{ paper.likes }}
        </span>
        {% endif %}
        {% if paper.downloads %}
        <span class="metric" title="Downloads">
          <svg viewBox="0 0 24 24" width="14" height="14"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
          {{ paper.downloads }}
        </span>
        {% endif %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>

<script>
function filterPapers() {
  const search = document.getElementById('search-papers').value.toLowerCase();
  const category = document.getElementById('filter-category').value;
  const year = document.getElementById('filter-year').value;
  
  const papers = document.querySelectorAll('.paper-item');
  
  papers.forEach(paper => {
    const title = paper.dataset.title;
    const authors = paper.dataset.authors;
    const tags = paper.dataset.tags;
    const paperCategory = paper.dataset.category;
    const paperYear = paper.dataset.year;
    
    const matchesSearch = title.includes(search) || authors.includes(search) || tags.includes(search);
    const matchesCategory = !category || paperCategory === category;
    const matchesYear = !year || paperYear === year;
    
    paper.style.display = (matchesSearch && matchesCategory && matchesYear) ? 'block' : 'none';
  });
}
</script>