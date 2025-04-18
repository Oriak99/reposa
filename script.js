document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-menu');
  const overlay = document.getElementById('menu-overlay');

  function openMenu() {
    navLinks.classList.add('active');
    overlay.classList.add('active');
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close when a link is clicked
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
