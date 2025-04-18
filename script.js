// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const closeBtn   = document.querySelector('.close-menu a');

  // open mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // close mobile menu
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.remove('active');
  });
});
