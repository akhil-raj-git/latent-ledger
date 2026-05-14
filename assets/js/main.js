// Main JavaScript for Latent Ledger
// Add your custom scripts here

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.main-nav__toggle');
  const navOverlay = document.getElementById('nav-overlay');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      mobileNav.classList.add('active');
      navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (navOverlay) {
    navOverlay.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add hover effects to cards
  const cards = document.querySelectorAll('.paper-card, .code-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hover');
    });
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hover');
    });
  });
});