$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />',
        asNavFor: '.slider-dotshead'

    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

    $('.surf-slider__wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-map',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />',
    }); 

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider__wrap',
        focusOnSelect: true
    });



});