<template>
  <div id="blog">
    <div class="blog-contents-element" v-if="year2 !== undefined" v-html="articleHtmlSource">
    </div>
    <div v-else>
      <div class="blog-list-element" v-for="i in index" :key="i">
        <router-link :to="i.uri" class="blog-title">{{ i.title }}</router-link>
        <br>
        <div class="blog-date">{{ i.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'devRecordBlog',
  mounted: function() {
    this.getPage();
  },
  data() {
    return {
      // __INSERTION_POSITION__ // DONT CHANGE!!
      index: 
[{"title":"첫글","author":"myself","uri":"/devRecordBlog/2018/12/12/thanks-to/","date":"2018/12/12"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
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
      this.getPage();
    }
  },
  methods: {
    totheTop: function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    getPage: function() {
      if (this.year2 === undefined) {
        return;
      }

      // Load page after the scroll is on the top
      this.totheTop();

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
  font-size: 1.05em;
}

.blog-title {
  font-size: 1.05em;
}

.blog-date {
  font-size: 0.8em;
  color: #9F9EA2;
}

a {
  color: #8a300f;
  text-decoration: none;
}

a:hover {
  color: #b84014;
}
</style>
