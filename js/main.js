// 슬릭
$(document).ready(function() {
    $('.pofol_link').slick({
        infinite: true,
        slideToShow: 3,
        speed: 200,
        drggable: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [{
                breakpoint: 1024,
                settings: {

                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 739,
                settings: {

                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            }
        ]
    });
});