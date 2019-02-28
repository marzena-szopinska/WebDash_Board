var ctx = document.getElementById("bar-chart");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Daily Traffic',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(153, 102, 255, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
