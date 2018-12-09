<template>
  <div id="app">
    <H1> BK's Blog </H1>
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
      <router-link to="/bookThinkBlog">책과 사유</router-link>
      <router-link to="/devRecordBlog">개발과 기록</router-link>
    </nav>
    <p>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Source Sans Pro', 'Spoqa Han Sans', Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 47px;
}


nav {
  padding-bottom: 10px; 
}

a {
  padding: 10px;
}

a:link { 
  color: #585858; 
  text-decoration: none;
}

a:visited { 
  color: #585858; 
  text-decoration: none;
}

a:hover { 
  color: #3073b3;
  font-weight: 350;
  -webkit-transition: color 1s ease-out;
  -moz-transition: color 1s ease-out;
  -o-transition: color 1s ease-out;
  transition: color 1s ease-out;
}
</style>
