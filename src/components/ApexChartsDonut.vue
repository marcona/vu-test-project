<template>
  <div class="example">
    <apexcharts width="500" height="350" type="donut" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Donut',
  components: {
    apexcharts: VueApexCharts
  },
  data: function () {
    return {
      chartOptions: {},
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>
