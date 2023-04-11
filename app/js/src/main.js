 const body = document.querySelector('.page-body'),
 nav = document.querySelector('nav'),
 menuTrigger = document.querySelector('.btn-toggle');

//  Show menu

const toggleMenu = () => {
  menuTrigger.classList.toggle('btn-toggle_active');
  nav.classList.toggle('nav_active');
  body.classList.toggle('body_hidden');
};


menuTrigger.addEventListener('click', toggleMenu);