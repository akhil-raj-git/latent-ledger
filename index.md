---
layout: home
title: "Latent Ledger"
subtitle: "Research notes between papers and production."
---

<div class="home__intro">
  <p class="home__intro-lead">Short-form breakdowns, reproductions, and write-ups on <strong>ML systems</strong> — written to be read in the browser, versioned in git.</p>
  <ul class="home__features" role="list">
    <li>Paper notes and literature digests</li>
    <li>Runnable code and experiment logs</li>
    <li>Longer blog posts when a topic needs room</li>
  </ul>
</div>

{% assign papers = site.papers | sort: 'date' | reverse %}
{% assign code = site.code | sort: 'date' | reverse %}

<div class="home__latest" id="latest-papers">
  <div class="home__section-head">
    <h2 class="home__section-title">Papers</h2>
    <p class="home__section-desc">Curated write-ups from <code>_papers/</code></p>
  </div>
  <div class="papers-grid">
    {% for paper in papers limit: 6 %}
    <article class="paper-card">
      {% if paper.image %}
      <div class="paper-card__media">
        <img src="{{ paper.image | relative_url }}" alt="">
      </div>
      {% endif %}
      <div class="paper-card__body">
        <h3 class="paper-card__title"><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h3>
        <p class="paper-meta">
          <span class="paper-date">{{ paper.date | date: "%b %d, %Y" }}</span>
          {% if paper.categories %}<span class="paper-meta__sep" aria-hidden="true"></span><span class="paper-category">{{ paper.categories | first }}</span>{% endif %}
        </p>
        <p class="paper-excerpt">{{ paper.excerpt | strip_html | truncate: 140 }}</p>
        <div class="paper-actions">
          <div class="paper-actions__links">
            {% if paper.pdf_url %}
            <a href="{{ paper.pdf_url }}" class="paper-card__link">PDF</a>
            {% endif %}
            {% if paper.code_url %}
            <a href="{% if paper.code_url contains '://' %}{{ paper.code_url }}{% else %}{{ paper.code_url | relative_url }}{% endif %}" class="paper-card__link">Code</a>
            {% endif %}
            <a href="{{ paper.url | relative_url }}" class="paper-card__link paper-card__link--emph">Read</a>
          </div>
          {% if paper.read_time %}
          <span class="paper-metrics" title="Estimated read time">{{ paper.read_time }} min</span>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>

  {% if papers.size == 0 %}
  <div class="home-empty">
    <p class="home-empty__text">No paper write-ups in <code class="home-empty__code">_papers/</code> yet. When you add one, it will show up here and on the papers page.</p>
    <a href="{{ '/papers/' | relative_url }}" class="btn btn--outline btn--sm">Open papers hub</a>
  </div>
  {% endif %}
  
  <p class="view-all"><a href="{{ '/papers/' | relative_url }}" class="btn btn--outline">View All Papers</a></p>
</div>

<div class="home__latest" id="latest-code">
  <div class="home__section-head">
    <h2 class="home__section-title">Code</h2>
    <p class="home__section-desc">Projects and notes from <code>_code/</code></p>
  </div>
  <div class="code-grid">
    {% for project in code limit: 4 %}
    <article class="code-card">
      <div class="code-header">
        <h3 class="code-card__title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        {% if project.technology %}
        <span class="tech-tag">{{ project.technology }}</span>
        {% elsif project.tech_stack %}
        <span class="tech-tag">{{ project.tech_stack | first }}</span>
        {% endif %}
      </div>
      <p class="code-excerpt">{{ project.excerpt | strip_html | truncate: 120 }}</p>
      <div class="code-footer">
        <div class="code-metrics">
          {% if project.stars %}
          <span class="metric">{{ project.stars }} stars</span>
          {% endif %}
          {% if project.downloads %}
          <span class="metric">{{ project.downloads }} dl</span>
          {% endif %}
        </div>
        {% if project.repo_url %}
        <a href="{{ project.repo_url }}" class="btn btn--github btn--sm">Repository</a>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
  
  <p class="view-all"><a href="{{ '/code/' | relative_url }}" class="btn btn--outline">View All Code</a></p>
</div>

<div class="home__about">
  <h2 class="home__about-title">About</h2>
  <p class="home__about-lead">A running log of paper notes, code, and longer posts — built to stay easy to read and easy to extend.</p>
  <p class="home__about-meta"><a href="{{ '/about/' | relative_url }}">About the author</a></p>
</div>