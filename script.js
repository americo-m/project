// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(element => {
  observer.observe(element);
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm && successMessage) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      successMessage.classList.add('active');
      contactForm.reset();
      
      setTimeout(() => {
        successMessage.classList.remove('active');
      }, 3000);
    }, 500);
  });
}

// Newsletter form handling
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate newsletter subscription
    const input = newsletterForm.querySelector('input');
    if (input) {
      input.value = '';
      alert('Obrigado por se inscrever em nossa newsletter!');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Button hover animations
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
  
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });
  
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1.05)';
  });
});

// Service card hover effects
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.transition = 'transform 0.3s ease';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Form input animations
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    const parent = input.parentElement;
    if (parent) {
      parent.style.transform = 'translateY(-2px)';
    }
    input.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.1)';
  });
  
  input.addEventListener('blur', () => {
    const parent = input.parentElement;
    if (parent) {
      parent.style.transform = 'translateY(0)';
    }
    input.style.boxShadow = 'none';
  });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.style.boxShadow = 'none';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
  });
}