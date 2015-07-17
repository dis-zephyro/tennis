
// Адаптивное меню

$(function() {
    var pull = $('#pull');
    menu = $('.topnav');
    var w = $(window).width();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.show();
    });

    $(window).resize(function(){
        if(w > 960 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('.close').click(function(){
        var w = $(window).width();
        if(w < 960) {
            menu.hide();
        }
    });
});

// Адаптивные блоки разделов фото, новости, акции и видео

$(document).ready(function(){

});


$(window).load(function () {
    $('.responsive').masonry({
        itemSelector: '.col',
        singleMode: true,
        isResizable: true,
        isAnimated: false
    });

    $('.action').masonry({
        itemSelector: '.action-item',
        singleMode: true,
        isResizable: true,
        isAnimated: false
    });

    $('.organization').masonry({
        itemSelector: 'li',
        singleMode: true,
        isResizable: true,
        isAnimated: false
    });
});


// Показ\скрытие блока

$('.text-show').click(function(){
    $('.text-hide').show();
    $('.text-show').hide();
});


// Переключение схемы проезда

var $tabs = $('.maps').tabs();
$tabs.tabs('enable', 1);


// Яндекс Карта

ymaps.ready(init);

var myMap;

function init(){
    myMap = new ymaps.Map("yamap", {
        center: [55.5682,37.4115],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });
    myMap.behaviors.disable('scrollZoom');
}

// Главная - слайдер

$('.tile-slide').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
});

// Расписание - слайдер

$('.schedule-days').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.schedule-nav.prev').click(function(){
    $('.schedule-days').slick('slickPrev');
});

$('.schedule-nav.next').click(function(){
    $('.schedule-days').slick('slickNext');
});


$('.navigation').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
});


// отзывы - слайдер

$('.reply').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.reply-nav-prev').click(function(){
    $('.reply').slick('slickPrev');
});

$('.reply-nav-next').click(function(){
    $('.reply').slick('slickNext');
});

// услуги - галерея

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true
});

$('.service-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    asNavFor: '.service-slider',
    responsive: [

        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1
            }
        }
    ]
});

$('.service-slider').slick({
    arrows: false,
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.service-slider-main'
});

$('.nav-prev').click(function(){
    $('.service-slider').slick('slickPrev');
});

$('.nav-next').click(function(){
    $('.service-slider').slick('slickNext');
});

/*
$('.service-slider').delegate('img','click', function(){
    $('.slider-image').attr('src',$(this).attr('src'));
});
*/


// Галерея

$(".photo-item").fancybox();

$('.service-gallery').slick({
    arrows: false,
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 960,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1
            }
        }
    ]
});

$(".gallery-img").fancybox();

$(".slider-image-popup").fancybox();