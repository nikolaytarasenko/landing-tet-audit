import $ from 'jquery';
import 'slick-carousel';

const initSliders = () => {
  const sliders = [
    {
      sliderNode: '.team__carousel',
      slidesToShow: 4,
      prevArrowNode: '.team .arrow_left',
      nextArrowNode: '.team .arrow_right'
    },
    {
      sliderNode: '.blog__carousel',
      slidesToShow: 3,
      prevArrowNode: '.blog .arrow_left',
      nextArrowNode: '.blog .arrow_right'
    },
    {
      sliderNode: '.trust__carousel',
      slidesToShow: 6,
      prevArrowNode: '.trust .arrow_left',
      nextArrowNode: '.trust .arrow_right'
    }
  ];

  $.each(sliders, function(i, element) {
    $(element.sliderNode).slick({
      infinite: false,
      slidesToShow: element.slidesToShow,
      prevArrow: element.prevArrowNode,
      nextArrow: element.nextArrowNode,
    })
  });
}

window.addEventListener('DOMContentLoaded', initSliders);