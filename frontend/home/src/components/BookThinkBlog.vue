<template>
  <div>
    <div v-if="year1 !== undefined" v-html="articleHtmlSource">
    </div>
    <div v-else>
      <div class="blog-list-element" v-for="i in index" :key="i">
        <router-link :to="i.uri">{{ i.title }}</router-link>
        <br>
        {{ i.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookThinkBlog',
  data() {
    return {
      // __INSERTION_POSITION__ // DONT CHANGE!!
      index: 
[{"title":"테스트","uri":"/bookThinkBlog/2018/12/09/first-posting/","date":"2018/12/09"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
,
    year1 : this.$route.params.year1,
    month1 : this.$route.params.month1,
    day1 : this.$route.params.day1,
    title1 : this.$route.params.title1,
    articleHtmlSource : ""
    }
  },
    watch: {
    '$route' (to) {
      this.year1 = to.params.year1;
      this.month1 = to.params.month1;
      this.day1 = to.params.day1;
      this.title1 = to.params.title1;
      if (this.year1 === undefined) {
        return;
      }
      var htmlDocUri = 
        '/blog_contents/book_think/'
        + this.year1 + '/'
        + this.month1 + '/'
        + this.day1 + '/'
        + this.title1 + '.html';
      fetch(htmlDocUri)
        .then(response => response.text())
        .then(responseText => this.articleHtmlSource = responseText);
    }
  }
}
</script>

<style scoped>
.blog-list-element {
  margin-top: 5px;
  margin-bottom: 20px;
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
  color: #5858fa;
  font-weight: 350;
}
</style>
