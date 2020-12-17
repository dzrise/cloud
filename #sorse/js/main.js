$(function() {

    $('.header__search').click(function() {
        $('.search-form').toggleClass('active')
        return false
    });
    $('.search-form__clear').click(function() {
        $(this).parents('.search-form').removeClass('active')
    });
    $(document).mouseup(function(e) {
        var div = $(".nav-search");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.search-form').removeClass('active')
        }
    });



    $('.header__services').click(function() {
        $(this).addClass('active')
        $('.services-nav').slideToggle('slow')
        return false
    });
    $('.services-nav__close').click(function() {
        $('.header__services').removeClass('active')
        $(this).parents('.services-nav').slideUp('slow')
        return false
    });


    $(".input-file input").change(function() {
        var thisFile = $(this).parent().find('.input-file__name');
        var text = 'Файл не выбран';
        thisFile.text(text).removeClass('active');
        if ($(this)[0].files.length == 1) {
            text = $(this)[0].files[0].name;
            thisFile.text(text).addClass('active');
        }

    });

    $(document).on('click', '.popup-close', function() {
        $.fancybox.close();
    })

    $(document).on('touchstart  click', '.popup-close', function() {
            $.fancybox.close();
    })

    $(document).on('mousedown', 'input', function() {
        if ($(this).parent().hasClass('error')) {
            $(this).parent().removeClass('error')
        }
    })


    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    if ($(window).width() < 1200) {
        $('[data-wow-delay]').each(function() {
            $(this).addClass('animation-delay-none')
        })
    }



    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-nav').slideToggle('slow')
    });

    $('.mobile-nav__services h3').click(function() {
        $(this).toggleClass('serv-active').parent().find('ul').slideToggle('slow')
    });

    $('div.mobile-nav__title').click(function() {
        $(this).toggleClass('active').parent().find('.mobile-nav__hidden').slideToggle('slow')
    });


    // @prepros-append sliders.js
    // @prepros-append forms.js

    $('.s-about_top__item a').click((e) =>{
        e.preventDefault();
        let scrollClass = e.target.getAttribute('data-scroll')
        let scroll = document.getElementsByClassName(scrollClass)
        $('html, body').animate({
            scrollTop: $(scroll[0]).offset().top - 78
        }, 2000);
    })


});




/*
    $("input[name=phone]").mask("+7 (999) 999-99-99");

    var  wheihht=96;
    $(window).scroll(function(){
        var bo = $(this).scrollTop();
        if ( bo >= wheihht) {$('nav').addClass('scr_nav')};
            if ( bo < wheihht) {$('nav').removeClass('scr_nav')};
    })
    $("nav li a").click(function(){
        var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top-20}, 1300);
            return false;
    });

*/


$(function() {
    let fixed = false
    let wt = $(window).scrollTop();
    let wh = $(window).height();
    let et = $('.s-about_top').offset().top;
    let eh = $('.s-about_top').outerHeight();
    let dh = $(document).height();

    $(document).ready(function() {
        if(wt > et-eh) {
            fixed = true
        }
        if(fixed){
            $('body').addClass('fixed-top');
        } else {
            $('body').removeClass('fixed-top');
        }
    });

    $(window).scroll(function(){
        let wt = $(window).scrollTop();
        if(wt > et-eh){
            fixed = true
        }

        if(wt < et+eh) {
            fixed = false
        }
        if(fixed){
            $('body').addClass('fixed-top');
        } else {
            $('body').removeClass('fixed-top');
        }
    });
});
