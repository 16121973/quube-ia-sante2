// Menu mobile toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Ouvrir le menu
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Bloquer le scroll
    });
  }

  // Fermer le menu
  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Réactiver le scroll
  };

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  // Fermer au clic sur un lien
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fermer si clic en dehors
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });

  // Fermer avec touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
});

// Animations au scroll (fade-in)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Filtres cas d'usage (si présents)
const filterTabs = document.querySelectorAll('.filter-tab');
const useCaseCards = document.querySelectorAll('.use-case-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    
    // Update active state
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Filter cards
    useCaseCards.forEach(card => {
      const personas = card.dataset.personas;
      
      if (filter === 'all' || (personas && personas.includes(filter))) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});
