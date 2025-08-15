document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const navLinks  = document.getElementById('navLinks');
  if (!menuIcon || !navLinks) return;

  // Toggle menu + icon
  menuIcon.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuIcon.textContent = isOpen ? '✖' : '☰';
    menuIcon.setAttribute('aria-expanded', isOpen);
  });

  // Smooth scroll + close menu on click
  navLinks.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
      navLinks.classList.remove('active');
      menuIcon.textContent = '☰';
      menuIcon.setAttribute('aria-expanded', 'false');
    });
  });
});

