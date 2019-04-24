export const planetChartData = {
  type: "line",
  data: {
    labels: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    datasets: [
      {
        data: [0, 120, 20, 360, 110, 450, 100, 0, 20, 45, 300, 15],
        borderColor: "#6498f3",
        backgroundColor: false,
        borderWidth: 6,
        lineTension: 0,
        pointHitRadius: 30,
        pointBorderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 2,
    legend: {
        display: false
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



