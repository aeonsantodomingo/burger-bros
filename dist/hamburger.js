const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navUl');
const hero = document.getElementById('hero');


hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', init);