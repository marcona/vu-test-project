<template>
  <div id="pieChart">
    <GChart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'pieChart',
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Task', 'Hours per Day'],
        ['Blue Team', 11],
        ['Red Team', 2],
        ['Orange Team', 2],
        ['Yellow Team', 7]
      ],
	  //https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options
      chartOptions: {
          title: 'Google Charts: Team Bugs',
          pieHole: '0.3',
		  colors: ['blue','red', 'orange', 'yellow']   
      }
    }
  }
}
</script>

<style>
#pieChart {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 900px;
  height: 500px;
}
</style>
