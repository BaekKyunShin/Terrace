<template>
  <div>
  <p>Hello, world!</p>
    <div class="blog-list-element" v-for="i in index" :key="i">
      <a :href="i.uri">{{ i.title }}</a>
      <br>
      {{ i.date }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'blogExample',
  data() {
    return {
      index: 
    [{"title":"[Blog/VueJS] 2. 개발환경 세팅","uri":"/blog/2018/10/11/blogvuejs-2-development-environment/","date":"2018/10/11"}]
    }
  }
}
</script>

<style scoped>
.blog-list-element {
  margin-bottom: 10px;
}
</style>
