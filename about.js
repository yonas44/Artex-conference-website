const navMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('burger-x');
const desktopNav = document.querySelector('.desktop-nav');

navMenu.addEventListener('click', () => {
  desktopNav.classList.add('open');
  navMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  desktopNav.classList.remove('open');
  navMenu.style.display = 'block';
  closeMenu.style.display = 'none';
});
