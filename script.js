



document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('chart');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.day);
            const expenses = data.map(item => item.amount);

            // const dayOfWeek = item.day[index % 7];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Daily Expenses',
            data: expenses,
            borderWidth: 1,
            borderRadius: 5,
            borderRadiusBottom: 10,
            backgroundColor: 'rgb(255, 131, 86)',
            borderColor: 'rgb(255, 131, 86)',
          },
        ],
      },
      options: {
        barPercentage: 0.75,
        // categoryPercentage: 0.5,
        hoverBackgroundColor: 'rgb(118, 181, 188)',
        hoverBorderColor: 'rgb(118, 181, 188)',
        // aspectRatio:2.5,
        scales: {
          y: {
            display: false,
            beginAtZero: true,
            // grid: {
            //   display: false, // Hide Y-axis grid lines
            // },
            // ticks: {
            //   display: false, // Hide Y-axis grid lines
            // },
          },
          x: {
            beginAtZero: true,
            grid: {
              display: false, // Hide X-axis grid lines
              
              drawOnChartArea: false,
            },
          },
          
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              // context.raw is the raw data value (amount of expenses)
              return '$' + context.raw;
            },
          },
        },
      },
    });
})
    .catch(error => console.error('Error loading JSON:', error));
});
