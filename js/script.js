
// HIDE THE ALERT WINDOW
const cross = document.querySelector('.cross');

cross.addEventListener('click', () => {
  cross.parentNode.style.display = "none";
});















// CHARTS

const barChart = document.getElementById("bar-chart");
const doughnutChart = document.getElementById("doughnut-chart");
const lineChart = document.getElementById("line-chart");


let lineTrafficLine = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [
            {
                label: 'Visitors',
                data: [350, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                backgroundColor: 'rgba(115, 119, 191, 0.25)',
                borderColor: '#7477bf',
                borderWidth: 1.5,
                pointBorderWidth: 1.8,
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#e7e8f9',
                pointRadius: 5,
                lineTension: 0,
            }
        ]
    },
});

// if (window.matchMedia("(min-width: 769px)").matches) {
  //lineTrafficLine.canvas.parentNode.style.width = '800px';
//}


let barTrafficChart = new Chart(barChart, {
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

let doughnutMobileChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [
            {
                data: [15, 25, 60],
                backgroundColor: ['#74b1bf', '#81c98f', '#7377bf'],
                hoverBackgroundColor: ['#56aabd', '#67c97a', '#6368c0'],
            }
        ]
    },
    options: {
        legend: {
            display: true,
            position: 'right'
        },
    }
});
