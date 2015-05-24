
// Адаптивное меню

$(function() {
    var pull = $('#pull');
    menu = $('.topnav');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.show();
    });

    $(window).resize(function(){
        var w = $(window).width();
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

// Галерея

$(".photo-item").fancybox({
    'padding' : 0
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

// Расписание - слайдер

$('.schedule-days').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 980,
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
