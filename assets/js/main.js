// Main JavaScript for Latent Ledger

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('#nav-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const navOverlay = document.querySelector('#nav-overlay');
  
  if (navToggle && navMenu && navOverlay) {
    // Open menu
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      navOverlay.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });
    
    // Close menu when clicking overlay
    navOverlay.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  }
  
  // Back to top button (SVG uses currentColor for contrast in light & dark)
  const backToTopBtn = document.createElement('button');
  backToTopBtn.type = 'button';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);
  
  // Show/hide back to top button
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollPosition > windowHeight / 2) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Reading progress
  const readingProgress = document.createElement('div');
  readingProgress.className = 'reading-progress';
  document.body.appendChild(readingProgress);
  
  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    readingProgress.style.width = scrolled + '%';
  });
  
  // Loading animation for links
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href && !e.target.target) {
      e.target.style.opacity = '0.5';
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Accordion functionality
  document.querySelectorAll('.accordion').forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const body = accordion.querySelector('.accordion-body');
    
    if (header && body) {
      header.addEventListener('click', function() {
        accordion.classList.toggle('active');
        if (accordion.classList.contains('active')) {
          body.style.maxHeight = body.scrollHeight + 'px';
        } else {
          body.style.maxHeight = null;
        }
      });
    }
  });
  
  // Dark mode toggle (optional)
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
    
    // Load saved preference
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Toast notification helper
  window.showToast = function(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<div class="toast-icon">ℹ️</div><div class="toast-message">${message}</div>`;
    document.body.appendChild(toast);
    
    // Trigger reflow
    void toast.offsetWidth;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };
});