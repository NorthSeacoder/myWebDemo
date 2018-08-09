import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import eleDemo from '@/components/eleDemo';
import map from '@/components/map';
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/entry',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/ele',
    name: 'eleDemo',
    component: eleDemo
  }, {
    path: '/map',
    name: 'map',
    component: map
  }]
})
