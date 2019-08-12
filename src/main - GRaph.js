import Vue from 'vue'
import App from './App.vue'
import Graph from './Graph.vue'
import PieChart from './PieChart.vue'

Vue.config.productionTip = false

import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

new Vue({
  render: h => h(Graph)
}).$mount('#graph')

new Vue({
  render: h => h(PieChart)
}).$mount('#pieChart')
