<template>
  <div>
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
  created() {
    this.$http.get('jira/issues')
        .then(
            response => response.json(),
            response => alert("error")
        )
        .then(series => this.series = series)
  },
  data: function () {
    return {
      series: [],
      chartOptions: {
        labels: ['Blue Team', 'Green Team', 'Orange Team', 'Red Team'],
        plotOptions: {
          pie: {
            expandOnClick: true,
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                value: {
                  show: true,
                  fontSize: '16px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  color: undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val
                  }
                },
                total: {
                  show: true,
                  label: 'Total',
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</script>
