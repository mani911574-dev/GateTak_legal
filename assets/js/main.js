document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navLinks.classList.toggle('nav-active');
      toggleBtn.classList.toggle('toggle-active');
      toggleBtn.setAttribute('aria-expanded', isActive);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
        navLinks.classList.remove('nav-active');
        toggleBtn.classList.remove('toggle-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking on nav link (helpful if navigation is smooth-scroll or on fast link clicks)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        toggleBtn.classList.remove('toggle-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when window resized above mobile threshold
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('nav-active');
        toggleBtn.classList.remove('toggle-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
