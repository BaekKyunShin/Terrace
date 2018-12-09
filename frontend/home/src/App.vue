<template>
  <div id="app">
    <H1> BK's Blog </H1>
    <p>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
      &nbsp;
      <router-link to="/blog">Blog</router-link>
    </p>
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
</style>
