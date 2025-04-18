// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const closeBtn = document.querySelector('.close-menu a');
  const menuLinks = document.querySelectorAll('.nav-links li a');

  // open mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // close mobile menu via the “×” button
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.remove('active');
  });

  // auto‑close when any nav link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});
