new Chart(
    document.getElementById('myChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    50,
                    20,
                    20,
                    10
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    '#000',
                    '#fff'
                ]
            }],
            labels: [
                "Coding",
                "Workout",
                "Music",
                "Reading"
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