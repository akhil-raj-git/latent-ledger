---
layout: home
title: "Latent Ledger"
subtitle: "Documenting the space between research and reality"
---

<div class="home__intro">
  <p>Welcome to <strong>Latent Ledger</strong> — a personal research blog and knowledge base focused on the cutting edge of <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and <strong>Agentic Engineering</strong>.</p>
  
  <p>Here you'll find:</p>
  <ul class="home__features">
    <li><strong>🔍 Paper Analysis:</strong> In-depth breakdowns of arXiv papers and research breakthroughs</li>
    <li><strong>💻 Code Repositories:</strong> Implementations, experiments, and executable examples</li>
    <li><strong>📝 Insights:</strong> Personal findings, patterns, and thoughts on the AI landscape</li>
    <li><strong>📊 Engagement Metrics:</strong> Track which research resonates most</li>
  </ul>

  <p>My goal is to create a public ledger of sense-making — where research meets reality, one commit at a time.</p>
</div>

{% assign papers = site.papers | sort: 'date' | reverse %}
{% assign code = site.code | sort: 'date' | reverse %}

<div class="home__latest">
  <h2>Latest Research Papers</h2>
  <div class="papers-grid">
    {% for paper in papers limit: 6 %}
    <article class="paper-card">
      {% if paper.image %}
      <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
      {% endif %}
      <h3><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h3>
      <p class="paper-meta">
        <span class="paper-date">{{ paper.date | date: "%B %d, %Y" }}</span>
        {% if paper.categories %} • <span class="paper-category">{{ paper.categories | join: ', ' }}</span>{% endif %}
      </p>
      <p class="paper-excerpt">{{ paper.excerpt | strip_html | truncate: 150 }}</p>
      <div class="paper-actions">
        {% if paper.pdf_url %}
        <a href="{{ paper.pdf_url }}" class="btn btn--primary">Read Paper</a>
        {% endif %}
        {% if paper.code_url %}
        <a href="{{ paper.code_url }}" class="btn btn--secondary">Code</a>
        {% endif %}
        <div class="paper-metrics">
          <span class="metric" title="Read time">⏱️ {{ paper.read_time | default: '5' }} min</span>
          {% if paper.likes %}
          <span class="metric" title="Likes">❤️ {{ paper.likes }}</span>
          {% endif %}
          {% if paper.downloads %}
          <span class="metric" title="Downloads">⬇️ {{ paper.downloads }}</span>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
  
  <p class="view-all"><a href="/papers/" class="btn btn--outline">View All Papers</a></p>
</div>

<div class="home__latest">
  <h2>Latest Code Projects</h2>
  <div class="code-grid">
    {% for project in code limit: 4 %}
    <article class="code-card">
      <div class="code-header">
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        {% if project.technology %}
        <span class="tech-tag">{{ project.technology }}</span>
        {% endif %}
      </div>
      <p class="code-excerpt">{{ project.excerpt | strip_html | truncate: 120 }}</p>
      <div class="code-footer">
        <div class="code-metrics">
          {% if project.stars %}
          <span class="metric" title="Stars">⭐ {{ project.stars }}</span>
          {% endif %}
          {% if project.downloads %}
          <span class="metric" title="Downloads">⬇️ {{ project.downloads }}</span>
          {% endif %}
        </div>
        {% if project.repo_url %}
        <a href="{{ project.repo_url }}" class="btn btn--github">View on GitHub</a>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
  
  <p class="view-all"><a href="/code/" class="btn btn--outline">View All Code</a></p>
</div>

<div class="home__about">
  <h2>About This Ledger</h2>
  <p>Latent Ledger is my digital notebook — a place to document my journey through the rapidly evolving landscape of AI research. Each paper analysis, code implementation, and insight represents a commit to understanding.</p>
  
  <p><strong>Curated by</strong> <a href="/about/">Akhil Raj</a></p>
  <p><strong>Tags:</strong> #AI #MachineLearning #AgenticSystems #Research #OpenSource # agentic engineering #llms #multimodal #reinforcementlearning</p>
</div>