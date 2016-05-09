$(document).ready(function () {

    /*** scroll script ***/
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    /*** the end of the scroll script ***/

    /*** window-callback ***/
    $('.window-ok').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-ok')).length) $('.window-ok').fadeOut();
        if ($target.hasClass('form-ok-button')) $('.window-ok').fadeOut();
    });
    /*** the end ***/

    /**** animation scripts *****/
    window.sr = ScrollReveal();
    sr.reveal('.block-content', {
        reset: true,
        mobile: false
    });
    /** end of animation scripts **/

});