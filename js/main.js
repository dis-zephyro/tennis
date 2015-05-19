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
