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
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
  
  // Activate first tab by default
  if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
  }
}

// Initialize tabs if present
if (document.querySelector('.tab-button')) {
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

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      faqItems.forEach(i => i.classList.remove('active'));
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Initialize contact form if present
if (document.getElementById('contact-form')) {
  initContactForm();
}

// Initialize FAQ if present
if (document.querySelector('.faq-item')) {
  initFAQ();
}
