import $ from 'jquery';
import 'slick-carousel';

const initSliders = () => {
  const sliders = [
    {
      sliderNode: '.team__carousel',
      slidesToShow: 4,
      prevArrowNode: '.team .arrow_left',
      nextArrowNode: '.team .arrow_right',
      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 477,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    },
    {
      sliderNode: '.blog__carousel',
      slidesToShow: 3,
      prevArrowNode: '.blog .arrow_left',
      nextArrowNode: '.blog .arrow_right',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    },
    {
      sliderNode: '.trust__carousel',
      slidesToShow: 6,
      prevArrowNode: '.trust .arrow_left',
      nextArrowNode: '.trust .arrow_right',
      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    }
  ];

  $.each(sliders, function(i, element) {
    $(element.sliderNode).slick({
      infinite: false,
      slidesToShow: element.slidesToShow,
      prevArrow: element.prevArrowNode,
      nextArrow: element.nextArrowNode,
      responsive: element.responsive
    })
  });
}

const preventDefaultContactForms = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
  });
}

const toggleMobileMenu = () => {
  const hamburgerButton = document.querySelector('.hamburger');

  hamburgerButton.addEventListener('click', e => {
    const pageWrapper = document.querySelector('.wrapper');
    const header = e.currentTarget.closest('.header');

    pageWrapper.classList.contains('overflow-hidden') ?
        pageWrapper.classList.remove('overflow-hidden') :
        pageWrapper.classList.add('overflow-hidden');

    header.classList.toggle('mobile-open');
    e.currentTarget.classList.toggle('open');
  });
}

const closeMobileMenu = () => {
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const pageWrapper = document.querySelector('.wrapper');

  header.classList.remove('mobile-open');
  hamburger.classList.remove('open');
  pageWrapper.classList.remove('overflow-hidden');
}

const checkMobileMenu = () => {
  if (document.documentElement.clientWidth > 768) closeMobileMenu();
}

const scrollToSection = () => {
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (document.documentElement.clientWidth > 768) {
        e.preventDefault();
        const ref = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(ref);

        targetSection.scrollIntoView({ behavior: "smooth" });
      } else {
        closeMobileMenu();
      }
    })
  });
}

const hidePreloader = () => {
  const preloaderWrapper = document.querySelector('.preloader-wrapper');

  preloaderWrapper.classList.add('hide');
}

const domContentLoadedHandler = () => {
  preventDefaultContactForms();
  initSliders();
  toggleMobileMenu();
  scrollToSection();

  window.addEventListener('resize', checkMobileMenu);
}

const loadHandler = () => {
  hidePreloader();
}

window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('load', loadHandler);