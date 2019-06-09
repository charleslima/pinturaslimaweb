'use strict';

import _events from './utils/_events';

(() => {
  const app = {
    init() {
      this.cacheDOM();
    },

    cacheDOM() {
      this.header = document.getElementById('header');
      this.footer = document.getElementById('footer');
      this.slideshow = document.getElementById('slideshow');

      this.slideshowInterval = null;

      this.bindEvents();
    },

    bindEvents() {
      this.footerYear();

      window.addEventListener(
        'scroll',
        _events.throttle(() => {
          const { scrollY } = window;
          this.headerParallax(scrollY);
        }, 200)
      );

      this.automaticSlideshow();

      for (const item of this.slideshow.querySelectorAll('li')) {
        item.addEventListener('click', event => {
          const { target } = event
          this.slideshowControlerHandler(target);
        });
      }
    },

    headerParallax(scrollOffset) {
      const headlineOffset = document.querySelector('.section--headline').clientHeight;

      if (scrollOffset > headlineOffset) this.header.classList.add('page__header--visible');
      else this.header.classList.remove('page__header--visible');
    },

    footerYear() {
      const year = new Date().getFullYear();

      this.footer.querySelector('p span').innerText = year;
    },

    automaticSlideshow() {
      const _interval = 5000;

      this.slideshowInterval = setInterval(() => {
        const activeFigure = this.slideshow.querySelector('figure.active'),
          activeControler = this.slideshow.querySelector('li.active');

        let nextFigure = activeFigure.nextElementSibling ? activeFigure.nextElementSibling : this.slideshow.querySelector('figure'),
          nextControler = activeControler.nextElementSibling ? activeControler.nextElementSibling : this.slideshow.querySelector('li');

        activeFigure.classList.remove('active');
        nextFigure.classList.add('active');

        activeControler.classList.remove('active');
        nextControler.classList.add('active');        
      }, _interval);
    },

    slideshowControlerHandler(target) {
      clearInterval(this.slideshowInterval);

      this.slideshow.querySelector('li.active').classList.remove('active');
      target.classList.add('active');

      this.slideshow.querySelector('figure.active').classList.remove('active');
      this.slideshow.querySelector(`figure:nth-child(${parseInt(target.dataset.slide)})`).classList.add('active');

      this.automaticSlideshow();
    }
  };

  app.init();
})();
