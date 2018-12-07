<template>
  <div id="app">
    <H1> BK's Blog </H1>
    <p>
      <router-link to="/">Main</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
      &nbsp;
      <router-link to="/blog">Blog</router-link>
    </p>

    <p>
      <router-view></router-view>
    </p>
    <main></main>
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
</style>
