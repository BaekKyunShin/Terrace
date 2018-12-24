<template>
  <div id="app">
    <H1> 귀퉁이 서재</H1>
    <nav>
      <router-link class="menu-bar" to="/">홈</router-link>
      <router-link class="menu-bar" to="/about/">소개</router-link>
      <router-link class="menu-bar" to="/bookThinkBlog/">책과 사유</router-link>
      <router-link class="menu-bar" to="/devRecordBlog/">개발과 기록</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);

#app {
  font-family: 'Spoqa Han Sans', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 47px;
}

nav {
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-weight: 350;
  font-size: 17px;
}

.menu-bar {
  background-position: center;
  padding: 10px;
  color: #585858; 
  text-decoration: none;
  -webkit-transition: color 0.9s;
  -moz-transition: color 0.9s;
  -o-transition: color 0.9s;
  transition: color 0.9s;
}

.menu-bar:hover {
  color: DarkGray;
  background: radial-gradient(circle, transparent 1%, #ffffff 0%) center/15000%;
  border-radius: 15px; 
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
  -o-transition: background 0.8s;
  transition: background 0.8s;
}

.menu-bar:active {
  background-color: #cddfff;
  background-size: 100%;
  -webkit-transition: background 0s;
  -moz-transition: background 0s;
  -o-transition: background 0s;
  transition: background 0s;
}

</style>
