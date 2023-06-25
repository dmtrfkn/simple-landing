(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
})();

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const close = document.querySelector('.header__nav-close');

burger.addEventListener('click', () => {
  menu.classList.add('header__nav__active');
});

close.addEventListener('click', () => {
  menu.classList.remove('header__nav__active');
});
