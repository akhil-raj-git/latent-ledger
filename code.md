---
layout: mediumish-page
title: "Code Projects"
subtitle: "Implementations, experiments, and tools"
permalink: /code/
---

<div class="code-filter">
  <input type="text" id="search-code" placeholder="Search code projects by title or tag..." onkeyup="filterCode()">
  <select id="filter-language" onchange="filterCode()">
    <option value="">All Languages</option>
    <option value="python">Python</option>
    <option value="typescript">TypeScript/JavaScript</option>
    <option value="rust">Rust</option>
    <option value="go">Go</option>
    <option value="jupyter">Jupyter Notebook</option>
  </select>
  <select id="filter-type" onchange="filterCode()">
    <option value="">All Types</option>
    <option value="reimplementation">Reimplementation</option>
    <option value="experiment">Experiment</option>
    <option value="tool">Tool</option>
    <option value="tutorial">Tutorial</option>
  </select>
</div>

<div id="code-container" class="code-grid">
  {% assign code = site.code | sort: 'date' | reverse %}
  {% for project in code %}
  <article class="code-card code-item" 
           data-title="{{ project.title | downcase }}"
           data-tags="{{ project.tags | join: ' ' | downcase }}"
           data-language="{{ project.language | default: 'python' | downcase }}"
           data-type="{{ project.type | default: 'reimplementation' | downcase }}">
    
    <div class="code-card-header">
      <div class="code-header">
        {% if project.language %}
        <span class="language-badge">{{ project.language | upcase }}</span>
        {% endif %}
        {% if project.type %}
        <span class="type-badge {{ project.type | default: 'reimplementation' | downcase }}">{{ project.type | default: 'Reimplementation' }}</span>
        {% endif %}
      </div>
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    </div>
    
    <p class="code-excerpt">{{ project.excerpt | strip_html | truncate: 150 }}</p>
    
    {% if project.tags and project.tags.size > 0 %}
    <div class="code-tags">
      {% for tag in project.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
    
    <div class="code-footer">
      <div class="code-metrics">
        {% if project.stars %}
        <span class="metric" title="GitHub Stars">
          <svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          {{ project.stars }}
        </span>
        {% endif %}
        {% if project.forks %}
        <span class="metric" title="Forks">
          <svg viewBox="0 0 24 24" width="14" height="14"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.77-.59 3.41-1.56 4.74L14 13h4v4l-4-4v-4H6v4h4v4L5.46 14.26C4.49 12.93 4 11.29 4 9.5A6.5 6.5 0 0 1 9.5 3z"/></svg>
          {{ project.forks }}
        </span>
        {% endif %}
        {% if project.downloads %}
        <span class="metric" title="Downloads">
          <svg viewBox="0 0 24 24" width="14" height="14"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
          {{ project.downloads }}
        </span>
        {% endif %}
      </div>
      
      <div class="code-links">
        {% if project.repo_url %}
        <a href="{{ project.repo_url }}" class="btn btn--github" title="View on GitHub">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        {% endif %}
        {% if project.demo_url %}
        <a href="{{ project.demo_url }}" class="btn btn--live" title="Live Demo">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h2V6h2v4h2v2h-2v4zm4-8h-2V6h-2v2h-2v2h2v2h2v2h2v-4z"/></svg>
          Demo
        </a>
        {% endif %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>

<script>
function filterCode() {
  const search = document.getElementById('search-code').value.toLowerCase();
  const language = document.getElementById('filter-language').value;
  const type = document.getElementById('filter-type').value;
  
  const projects = document.querySelectorAll('.code-item');
  
  projects.forEach(project => {
    const title = project.dataset.title;
    const tags = project.dataset.tags;
    const projectLanguage = project.dataset.language;
    const projectType = project.dataset.type;
    
    const matchesSearch = title.includes(search) || tags.includes(search);
    const matchesLanguage = !language || projectLanguage === language;
    const matchesType = !type || projectType === type;
    
    project.style.display = (matchesSearch && matchesLanguage && matchesType) ? 'block' : 'none';
  });
}
</script>