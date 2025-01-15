// Main JavaScript file
import { initAnimations } from '../modules/animations.js';
import { initForms } from '../modules/forms.js';
import { initNavigation } from '../modules/navigation.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initForms();
  initNavigation();
});