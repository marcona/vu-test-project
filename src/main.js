import Vue from 'vue'
import App from './App.vue'
import Graph from './Graph.vue'
import PieChart from './PieChart.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

new Vue({
  render: h => h(Graph)
}).$mount('#graph')

new Vue({
  render: h => h(PieChart)
}).$mount('#pieChart')
