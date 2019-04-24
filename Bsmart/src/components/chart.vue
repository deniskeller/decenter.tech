 <template>
  <div class="chart">
      
      <canvas id="planet-chart" ></canvas>
  </div>
</template>
<style scoped>
  
</style>

<script>
import Chart from "chart.js";
import planetChartData from "../chart-data.js";

export default {
  name: "chart",
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


