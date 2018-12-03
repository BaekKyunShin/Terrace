import Vue from 'vue';
import Router from 'vue-router';

import Main from './component/Main.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/About',
      nam: 'About',
      component: About
    },
  ]
});
