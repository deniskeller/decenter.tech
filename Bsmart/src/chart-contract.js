export const planetChartData = {
  type: "line",
  data: {
    labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05', '00:06'],
      datasets: [
        {
          label: 'График 1',
          borderColor: '#508ef6',
          pointBackgroundColor: 'white',
          borderWidth: 5,
          pointBorderColor: 'white',
          data: [4, 39, 10, 40, 39, 80, 40]
          
        },{
          label: 'График 2',
          borderColor: '#78d590',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 5,
          data: [60, 55, 32, 10, 2, 12, 53]
        }
      ]
    

  
  },
  options: {
    responsive: true,
    lineTension: 2,
    legend: {
        display: true,
        position: 'top',
        boxWidth: 15
    },
    scales: {
      xAxes: [{
      gridLines: {
        display: false,
        color: "#27406f",
        lineWidth: 6
      },
      ticks: {
        padding: 25,
        fontSize: 18,
        fontColor: "#27406f"
      }
    }],
      yAxes: [{
      gridLines: {
        color: "#27406f",
        lineWidth: 4
      },
      ticks: {
        padding: 10,
        fontSize: 18,
        fontColor: "#27406f"
      }
      }]
    }
  }
};

export default planetChartData;



