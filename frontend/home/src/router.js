import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
// import BookThinkBlog from "./components/BookThinkBlog.vue";
// import DevRecordBlog from "./components/DevRecordBlog.vue";

const BookThinkBlog = () => import("./components/BookThinkBlog.vue");
const DevRecordBlog = () => import("./components/DevRecordBlog.vue");


// Asynchronously import components
// Reasons for asynchoronous load:
//  - Blog component is quite big
//  - NotFound component is not going to be used in normal situation.


Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/bookThinkBlog',
      name: 'BookThinkBlog',
      component: BookThinkBlog,
      children: [
        {
          path: ':year1/:month1/:day1/:title1',
        }
      ]
    }, 
    
    {
      path: '/devRecordBlog',
      name: 'DevRecordBlog',
      component: DevRecordBlog,
      children: [
        {
          path: ':year2/:month2/:day2/:title2',
        }
      ]
    }
  ]
});
