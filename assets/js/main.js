document.addEventListener('DOMContentLoaded', () => {
  // Grid Apps Switcher menu toggle
  const gridToggle = document.querySelector('.grid-toggle');
  const appsDropdown = document.querySelector('.apps-dropdown');

  if (gridToggle && appsDropdown) {
    gridToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      appsDropdown.classList.toggle('active');
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!appsDropdown.contains(e.target) && !gridToggle.contains(e.target)) {
        appsDropdown.classList.remove('active');
      }
    });
  }

  // Smooth scroll and scrollspy active tracking for table of contents
  const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
  const headings = document.querySelectorAll('.doc-body h2');

  if (sidebarLinks.length > 0 && headings.length > 0) {
    // Smooth scrolling anchor handler
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Fallback for highlighting active immediately
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    });

    // Scrollspy active tracker observer
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = '#' + entry.target.id;
          sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === activeId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    headings.forEach(heading => {
      if (heading.id) {
        observer.observe(heading);
      }
    });
  }
});
