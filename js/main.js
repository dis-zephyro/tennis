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


$(document).ready(function(){
    $('.responsive').masonry({
        itemSelector: '.col',
        singleMode: true,
        isResizable: true,
        isAnimated: false
    });
});


$(".photo-item").fancybox({
    'padding' : 0
});

$('.text-show').click(function(){
    $('.text-hide').show();
    $('.text-show').hide();
});


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
