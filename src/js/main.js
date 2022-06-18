import $ from 'jquery';
import 'slick-carousel';

$('.carousel').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '.team .arrow_left',
  nextArrow: '.team .arrow_right',
});