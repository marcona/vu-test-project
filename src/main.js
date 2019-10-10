import Vue from 'vue'
import routes from './routes'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.config.debug = true

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/404.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000'
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-CSRF-TOKEN', 'VERY_SECURE_TOKEN_HERE')
  next((response) => {
    console.log(response)
  })
})
