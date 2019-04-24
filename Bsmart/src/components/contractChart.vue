<template>
  <div class="">
    <div class="timeselection">
      <div class="timeselection-item">12 ч</div>
      <div class="timeselection-item">День</div>
      <div class="timeselection-item">Неделя</div>
      <div class="timeselection-item">Месяц</div>
      <div class="timeselection-item">Год</div>
      <div class="timeselection-item">Весь период</div>
    </div>
  
      

    <div class="chart" >
        <canvas id="planet-chart" :data="dataChart" :options="{responsive: true, maintainAspectRatio: false}"></canvas>
    </div>
  </div>
  
</template>
<style scoped lang="less">
@import '../main.less';
  .timeselection{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .timeselection-item{
    font-size: 15px;
    cursor: pointer;
    margin-right: 45px;
  }
  .timeselection-item:hover{
    color: #3b60d0;
  }
  .timeselection-item:last-child{
    margin-right: 0px;
  }

  .chart{
    margin-bottom: 50px;
}
  
</style>

<script>
import Chart from "chart.js";
import planetChartData from "../chart-contract.js";

export default {
  name: "contractChart",
  data() {
    return {
      text: "",
      planetChartData: planetChartData,
      myChart: null,
    };
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      // Save reference
      this.myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
    testAddData() {
      console.log('hello')
      this.addData('Pluto', 1.39);
      console.log('ehlloe');
    },
    addData(label, data) {
    // Use reference
      this.myChart.data.labels.push(label);
      this.myChart.data.datasets.forEach(dataset => {
        dataset.data.push(data);
      });
      this.myChart.update();
    }
  }
};
</script>


