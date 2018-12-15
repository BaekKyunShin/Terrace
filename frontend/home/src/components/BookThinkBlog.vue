<template>
  <div id="blog">
    <div class="blog-contents-element" v-if="year1 !== undefined" v-html="articleHtmlSource">
    </div>
    <div v-else>
      <div class="blog-list-element" v-for="i in index" :key="i">
        <router-link :to="i.uri" class="blog-title">{{ i.title }}</router-link>
        <br>
        <div class="blog-date"> {{ i.date }} </div>
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
[{"title":"테스트","uri":"/bookThinkBlog/2018/12/09/first-posting/","date":"2018/12/09"},{"title":"알베르 까뮈 - 이방인","uri":"/bookThinkBlog/2017/04/03/book-stranger/","date":"2017/04/03"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
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
#blog {
  min-height: 300px;
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px;
}

.blog-list-element {
  margin-top: 5px;
  margin-bottom: 20px;
}

.blog-contents-element {
  text-align: left;
}

.blog-title {
  font-size: 1.05em;
}

.blog-date {
  font-size: 0.8em;
  color: #9F9EA2;
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
