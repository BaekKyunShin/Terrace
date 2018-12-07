import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta'

import Main from './components/Main.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'

// Asynchronously import components
// Reasons for asynchoronous load:
//  - Blog component is quite big
//  - NotFound component is not going to be used in normal situation.


Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
  
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [
        {
          path: ':year/:month/:day/:title',
        }
      ]
    },
  ]
});
