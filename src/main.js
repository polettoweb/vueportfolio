// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Carousel3d from 'vue-carousel-3d'
import VueAnalytics from 'vue-analytics'
import VueScrollClass from 'vue-scroll-class';

Vue.config.productionTip = false

Vue.use(Carousel3d)
Vue.use(VueAnalytics, {
  id: 'UA-61997681-1'
})
Vue.directive('scroll-class', VueScrollClass);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  directives: {
    'scroll-class': VueScrollClass,
  }
})
