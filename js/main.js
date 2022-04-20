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
// chart

new Chart(
    document.getElementById('myChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    50,
                    50
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'
                ]
            }],
            labels: [
                "red",
                "blue"
            ]
        },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            responsive: true,
            legend: false,
            title: false,
            animation: {
                animateRotate: true
            }
        }
    }
);