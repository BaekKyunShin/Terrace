<template>
  <div>
    <div class="blog-list-element" v-for="i in index" :key="i">
      <a :href="i.uri">{{ i.title }}</a>
      <br>
      {{ i.date }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'blog',
  data() {
    return {
      index: 
    [{"title":"첫글","uri":"/blog/2018/12/12/first-posting/","date":"2018/12/12"}]}
  }
}
</script>

<style scoped>
.blog-list-element {
  margin-bottom: 10px;
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
}
</style>
