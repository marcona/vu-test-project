<template>
  <div id="graph">
    <GChart
      type="ColumnChart"
      @ready="onChartReady"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'graph',
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
    }
  },
  methods: {
    onChartReady (chart, google) {
      var opts = {
        sendMethod: 'auto',
        headers: 1
      }
      const query = new google.visualization.Query(
        'http://localhost:8081/data.csv', opts
        // 'https://docs.google.com/spreadsheets/d/1qhyJnMpiuuwKLCY3t6W4bp6XKnixTFekAPlCpR8AcK0/edit?usp=sharing'
      )
      query.send(response => {
        const options = {
          title: 'Creating a Chart from a Separate Spreadsheet' }
        const data = response.getDataTable()
        chart.draw(data, options)
      })
    }
  }
}
</script>
