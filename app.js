$(document).ready(function() {
    //--------------automaticlly scrolling down -------//
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-sec").offset().top
        }, 1000);
    })
    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
    })
    $("#page-top").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    //--------------automaticlly scrolling down -------//



    //--------------burger menu -------//

    $('.burger-container').click(function() {
        $('.nav-btns').slideToggle()
    })

    var mouse_is_inside = false;
    $('.burger-container').click(function() {
        mouse_is_inside = true;
    }, function() {
        mouse_is_inside = false;
    });
    var $navBtns = $('.nav-btns');
    $("body").mouseup(function() {

        if (!mouse_is_inside && window.innerWidth < 768) $navBtns.hide();
    });
    $(window).resize(function() {
        $navBtns.removeAttr('style')
    })
    //--------------burger menu -------//

})
