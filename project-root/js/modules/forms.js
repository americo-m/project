// Form handling module
export const initForms = () => {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (contactForm) {
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
};