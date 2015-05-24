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