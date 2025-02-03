import '../styles/main.scss';

console.log('Welcome to the homepage!');

import { Tooltip } from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});