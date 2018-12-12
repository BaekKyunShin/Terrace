<template>
  <div>
    <div v-if="year2 !== undefined" v-html="articleHtmlSource">
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
  name: 'devRecordBlog',
  data() {
    return {
      // __INSERTION_POSITION__ // DONT CHANGE!!
      index: 
[{"title":"첫글","uri":"/devRecordBlog/2018/12/12/thanks-to/","date":"2018/12/12"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
,
    year2 : this.$route.params.year2,
    month2 : this.$route.params.month2,
    day2 : this.$route.params.day2,
    title2 : this.$route.params.title2,
    articleHtmlSource : ""
    }
  },
    watch: {
    '$route' (to) {
      this.year2 = to.params.year2;
      this.month2 = to.params.month2;
      this.day2 = to.params.day2;
      this.title2 = to.params.title2;
      if (this.year2 === undefined) {
        return;
      }
      var htmlDocUri = 
        '/blog_contents/dev_record/'
        + this.year2 + '/'
        + this.month2 + '/'
        + this.day2 + '/'
        + this.title2 + '.html';
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
