import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import map from '@/components/map';
import eleDemo from '@/components/eleDemo';
import chartsDemo from '@/components/echartsobj';
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/entry',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/map',
    name: 'map',
    component: map
  }, {
    path: '/ele',
    name: 'eleDemo',
    component: eleDemo
  }, {
    path: '/echarts',
    name: 'echarts',
    component: chartsDemo
  }]
})
