// QUUBE IA SANTÉ - Frontend JavaScript

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
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

  // Fade in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.backgroundColor = 'rgba(10, 14, 26, 0.98)';
    } else {
      header.style.backgroundColor = 'rgba(10, 14, 26, 0.95)';
    }
    
    lastScroll = currentScroll;
  });
});

// Tab navigation (for cas-usage page)
function initTabs() {
  const tabs = document.querySelectorAll('[data-tab]');
  const contents = document.querySelectorAll('[data-tab-content]');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const targetContent = document.querySelector(`[data-tab-content="${target}"]`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Initialize tabs if present
if (document.querySelector('[data-tab]')) {
  initTabs();
}

// Form validation (for contact page)
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Form data:', data);
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    form.reset();
  });
}

// Initialize contact form if present
if (document.getElementById('contact-form')) {
  initContactForm();
}
