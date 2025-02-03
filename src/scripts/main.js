// Import our custom CSS
import '../styles/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { Tooltip } from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});