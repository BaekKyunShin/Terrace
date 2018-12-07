import Vue from 'vue';
import Router from 'vue-router';

import Main from './components/Main.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'

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
      name: 'About',
      component: About
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    }
  ]
});
