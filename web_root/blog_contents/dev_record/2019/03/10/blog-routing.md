# BLOG - 16. 라우팅

### 라우팅이란?

라우팅(routing)이란 네트워크 안에서 통신 데이터를 보낼 경로를 선택하는 과정입니다. [(Reference1)](https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9A%B0%ED%8C%85) 예를 들어보겠습니다. 서울에서 부산까지 가는 길은 여러 개가 있습니다. "그중 이 경로를 통해서 서울에서 부산까지 가라!"라고 지정해주는 것이 라우팅입니다. 마찬가지로 블로그에는 여러 메뉴바가 있을 겁니다. 이 메뉴바를 클릭하면 이 페이지로 가고, 저 메뉴바를 클릭하면 저 페이지로 가라! 라고 지정을 해주는 것입니다.  

terrace 디렉토리에서 아래와 같이 vue-router를 설치해줍니다.

```bash
npm install vue-router
```
 

 frontend/home/src 디렉토리의 App.vue를 아래와 같이 수정합니다. 코드를 먼저 나열한 뒤 마지막에 설명하겠습니다. 

```javascript
<template>
  <div id="app">
    <H1 class="blog-title"> Blog Example </H1>
    <nav>
      <router-link class="menu-bar" to="/">Home</router-link>
      <router-link class="menu-bar" to="/about/">About</router-link>
      <router-link class="menu-bar" to="/blog/">Blog</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Main from './components/Main.vue'
export default {
  name: 'app',
  components: {
    'main': Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu-bar {
  padding: 10px;
}
</style>
```

이해를 도모하고자 App.vue 전체 소스코드를 적어드렸습니다. 여기서 routing과 관련된 부분은 아래와 같습니다.

```javascript
    <nav>
      <router-link class="menu-bar" to="/">Home</router-link>
      <router-link class="menu-bar" to="/about/">About</router-link>
      <router-link class="menu-bar" to="/blog/">Blog</router-link>
    </nav>
    <router-view></router-view>
```

기본적으로 router-link는 a태그로 렌더링이 됩니다. Home은 bkshin.com/으로, About은 bkshin.com/about/으로 Blog는 bkshin.com/blog/로 각각 라우팅이 됩니다. ```<router-view></router-view>```는 현재 라우트에 맞는 컴포넌트를 렌더링 시켜줍니다. 즉, 이 코드가 있어야 화면에 router-link가 보인다는 것입니다.



main.js는 아래와 같이 수정합니다.

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

이 코드에 대해서 간단히 알아보겠습니다.

```js
render: h => h(App)
```

```js
render: function (h) {
    return h(App);
}
```

위 두 코드는 같은 의미입니다. (ES6 "fat arrow" Syntax) 여기서 h는 **hyperscript**를 의미합니다. 

***Hyperscript itself stands for "script that generates HTML structures"***

import로 가지고 온 App 컴포넌트를 h(App)에 넣어주면 되고, App.vue에서의 'app' 부분이 #app에 들어갑니다. app 컴포넌트를 마운트해준다는 뜻입니다. (이를 위해서는 vue lifecycle을 이해해야 합니다. [(Reference1)](https://kr.vuejs.org/v2/guide/instance.html)) 또한 router를 import해서 Vue 객체 안에 넣어줌으로써 router를 사용할 수 있습니다.



router.js라는 js파일을 만들어 아래 코드를 입력합니다.

```javascript
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
```

앞서 설명드렸듯이 라우팅이란 경로를 지정해주는 작업이라 했습니다. 각 컴포넌트 (Main, About, Blog)별로 path를 지정해줍니다.   

이제, component 디렉토리안의 ```Helloworld.vue```는 삭제해주시고, Main.vue, About.vue, Blog.vue를 만들어 줍니다.  

Main.vue

```javascript
<template>
  <div class="main">
    <p>This is Main Page!</p>
    <img alt="Vue log" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'main',
}
</script>

<style scoped>
</style>
```

About.vue

```vue
<template>
  <div class="about">
    <p>This is About Page!</p>
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style scoped>
</style>
```

Blog.vue

```javascript
<template>
  <div class="blog">
    <p>This is blog Page!</p>
  </div>
</template>

<script>
export default {
  name: 'blog',
}
</script>

<style scoped>
</style>
```


간단히 테스트를 하기 위해서는 home 디렉토리에서 ```npm run serve```를 해서 localhost로 접속해 확인해주고, 원하는 결과가 나오면 최종적으로 빌드하고 배포하시면 됩니다.

확인해보시면 아래와 같이 라우팅이 잘 되는 것을 볼 수 있습니다. 홈 버튼을 누르면 Main 컴포넌트가 소개 버튼을 누르면 About 컴포넌트가 책과 사유 버튼을 누르면 Blog 컴포넌트가 정상적으로 렌더링됩니다. 

![routing sample 화면](http://cdn.bkshin.com/devRecord/2019/03/10/16_1.PNG)

개념 설명을 하기 위한 예시 블로그이므로 디자인 작업은 하지 않았으니 원리 이해에만 참고하시기 바랍니다. 


## Reference
[Reference1 (https://kr.vuejs.org/v2/guide/instance.html)](https://kr.vuejs.org/v2/guide/instance.html)
