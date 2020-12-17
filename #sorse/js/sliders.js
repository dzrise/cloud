var arrR = '<button class="slick-next"><div class="slider-timer-b"></div><div class="slider-timer"><div class="slider-timer__line"><div class="slider-timer__left"></div><div class="slider-timer__right"></div></div></div> <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 17.75C2.85574 17.7491 3.08886 17.7005 3.30538 17.6073C3.5219 17.5141 3.71735 17.3781 3.88 17.2075L10.635 10.2075C10.9557 9.88033 11.1353 9.44053 11.1353 8.98246C11.1353 8.52439 10.9557 8.08458 10.635 7.75746L3.635 0.757458C3.47184 0.594291 3.27813 0.46486 3.06494 0.376554C2.85175 0.288249 2.62326 0.242798 2.3925 0.242798C2.16175 0.242798 1.93326 0.288249 1.72007 0.376554C1.50688 0.46486 1.31317 0.594291 1.15001 0.757458C0.986837 0.920626 0.857406 1.11433 0.7691 1.32752C0.680795 1.54071 0.635344 1.7692 0.635344 1.99996C0.635344 2.23071 0.680795 2.45921 0.7691 2.6724C0.857406 2.88558 0.986837 3.07929 1.15001 3.24246L6.925 8.99996L1.36 14.775C1.03407 15.1028 0.851118 15.5464 0.851118 16.0087C0.851118 16.471 1.03407 16.9146 1.36 17.2425C1.5256 17.4068 1.72237 17.5363 1.93876 17.6234C2.15514 17.7106 2.38676 17.7536 2.62 17.75Z"/></svg></button>';
var arrL = '<button class="slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.38 17.75C9.14426 17.7491 8.91114 17.7005 8.69462 17.6073C8.4781 17.5141 8.28265 17.3781 8.12 17.2075L1.365 10.2075C1.04435 9.88033 0.864746 9.44053 0.864746 8.98246C0.864746 8.52439 1.04435 8.08458 1.365 7.75746L8.365 0.757458C8.52816 0.594291 8.72187 0.46486 8.93506 0.376554C9.14825 0.288249 9.37674 0.242798 9.6075 0.242798C9.83825 0.242798 10.0667 0.288249 10.2799 0.376554C10.4931 0.46486 10.6868 0.594291 10.85 0.757458C11.0132 0.920626 11.1426 1.11433 11.2309 1.32752C11.3192 1.54071 11.3647 1.7692 11.3647 1.99996C11.3647 2.23071 11.3192 2.45921 11.2309 2.6724C11.1426 2.88558 11.0132 3.07929 10.85 3.24246L5.075 8.99996L10.64 14.775C10.9659 15.1028 11.1489 15.5464 11.1489 16.0087C11.1489 16.471 10.9659 16.9146 10.64 17.2425C10.4744 17.4068 10.2776 17.5363 10.0612 17.6234C9.84486 17.7106 9.61324 17.7536 9.38 17.75Z"/></svg></button>';

$('.banner-slider').slick({
    // pauseOnFocus: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    prevArrow: arrL,
    nextArrow: arrR,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5400,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.articles-slider').slick({
    // pauseOnFocus: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: arrL,
    nextArrow: arrR,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5400,
    responsive: [{
        breakpoint: 751,
        settings: {
            dots: false,
        }
    }]
})
$('.video-slider').slick({
    // pauseOnFocus: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: arrL,
    nextArrow: arrR,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5500,
    responsive: [{
        breakpoint: 751,
        settings: {
            dots: false,
        }
    }]
})




$('.news-slider').slick({
    // pauseOnFocus: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: arrL,
    nextArrow: arrR,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5600,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 751,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});


$('.clients-slider').slick({
    // pauseOnFocus: false,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: arrL,
    nextArrow: arrR,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5600,
    responsive: [{
        breakpoint: 1601,
        settings: {
            slidesToShow: 5,
        }
    },
    {
        breakpoint: 941,
        settings: {
            slidesToShow: 4,
        }
    },
    {
        breakpoint: 751,
        settings: {
            slidesToShow: 3,
            variableWidth: true
        }
    },
    ]
});

$('.events-slider').slick({
    // pauseOnFocus: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: arrL,
    nextArrow: arrR,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5600,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
        }
    }]
});



/*
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
*/
