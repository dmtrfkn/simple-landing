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

(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const close = document.querySelector('.header__nav-close');

  burger.addEventListener('click', () => {
    menu.classList.add('header__nav__active');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('header__nav__active');
  });
})();

(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPos = target.getBoundingClientRect().top - headerElHeight;
    let startPos = window.scrollY;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPos, targetPos, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const link = document.querySelectorAll('.js-scroll');
    link.forEach((each) => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
