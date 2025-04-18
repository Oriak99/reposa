document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-menu');
  const overlay = document.getElementById('menu-overlay');

  if (hamburger && navLinks && closeBtn && overlay) {
    function openMenu() {
      navLinks.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }

    function closeMenu() {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = ''; // re-enable scroll
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close when a nav link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});
