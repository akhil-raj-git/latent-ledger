---
layout: default
title: "Code"
subtitle: "Repositories, tools, and experiments"
---

<div class="code-container container py-8">
  <header class="page-header mb-8">
    <h1 class="page-title">{{ page.title }}</h1>
    <p class="page-subtitle">{{ page.subtitle }}</p>
  </header>

  {% assign code_projects = site.code | sort: 'date' | reverse %}

  <div class="code-grid">
    {% for project in code_projects %}
    <article class="code-card" itemscope itemtype="https://schema.org/Code">
      <div class="code-header">
        <h2 class="code-title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h2>
        {% if project.tech_stack %}
        {% assign tech = project.tech_stack %}
        {% for t in tech limit: 2 %}
        <span class="tech-tag">{{ t }}</span>
        {% endfor %}
        {% endif %}
      </div>
      
      <p class="code-excerpt">{{ project.excerpt | strip_html | truncate: 150 }}</p>
      
      <div class="code-footer">
        <div class="code-metrics">
          {% if project.stars %}
          <span class="metric" title="Stars">⭐ {{ project.stars }}</span>
          {% endif %}
          {% if project.forks %}
          <span class="metric" title="Forks">🌲 {{ project.forks }}</span>
          {% endif %}
          {% if project.downloads %}
          <span class="metric" title="Downloads">⬇️ {{ project.downloads }}</span>
          {% endif %}
        </div>
        
        <div class="code-actions">
          {% if project.demo_url %}
          <a href="{{ project.demo_url }}" class="btn btn--outline btn-sm">Live Demo</a>
          {% endif %}
          {% if project.repo_url %}
          <a href="{{ project.repo_url }}" class="btn btn--github btn-sm" target="_blank" rel="noopener">
            GitHub
          </a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
  
  {% if code_projects.size == 0 %}
  <div class="empty-state">
    <div class="empty-state-icon">💻</div>
    <h3 class="empty-state-title">No code projects yet</h3>
    <p class="empty-state-description">
      Check back soon for new code repositories, tools, and experiments.
    </p>
  </div>
  {% endif %}
  
  <div class="view-all mt-8 text-center">
    <a href="{{ '/code/' | relative_url }}" class="btn btn--outline">View All Projects</a>
  </div>
</div>