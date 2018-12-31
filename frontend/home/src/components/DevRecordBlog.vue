<template>
  <div id="blog">
    <div class="blog-contents-element" v-if="year2 !== undefined" v-html="articleHtmlSource">
    </div>
    <div v-else>
      <div class="blog-list-element" v-for="i in index" :key="i">
        <router-link :to="i.uri" class="blog-title">{{ i.title }}</router-link>
        <span class="blog-date">{{ i.date }}</span>
				<hr class="separate-line">
      </div>
    </div>
  </div>
</template>

<script>
import HighlightJS from 'highlight.js/lib/highlight.js'
//var HighlightJS = require("highlight.js/lib/highlight.js");

// Add languages manually to decrease size of my website
HighlightJS.registerLanguage('vim', require('highlight.js/lib/languages/vim'));
HighlightJS.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

// eslint-disable-next-line
import _ from 'highlight.js/styles/xcode.css'

export default {
  name: 'devRecordBlog',
  mounted: function() {
    this.getPage();
  },
  update: function() {
    // Find all code block and apply syntax highlighting
    [].forEach.call(document.querySelectorAll('code'), function(el) {
      HighlightJS.highlightBlock(el);
    });
  }, 
  
  data() {
    return {
      // __INSERTION_POSITION__ // DONT CHANGE!!
      index: 
[{"title":"Test File","author":"myself","uri":"/devRecordBlog/2018/12/31/test/","date":"2018/12/31"},{"title":"첫 글","author":"myself","uri":"/devRecordBlog/2018/12/12/thanks-to/","date":"2018/12/12"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
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
  margin: auto;
  margin-bottom: 50px;
}

.blog-list-element {
  max-width: 330px;
  font-size: 1.05em;
  text-align: left;
  margin: auto;
}

.blog-contents-element {
  text-align: left;
  font-size: 1.05em;
  max-width: 800px;
}

.blog-title {
  color: #8a300f; 
  font-size: 1.05em;
  text-align: left;
}

.blog-date {
  font-size: 0.8em;
  color: #9F9EA2;
	float: right;
	margin-top: 4px;
}

.separate-line {
  margin-top: 11px;
  margin-bottom: 11px;
  border: 0;
  height: 1px;
  background: #f2f2f2;
}

a {
  color: #8a300f;
  text-decoration: none;
}

a:hover {
  color: #b84014;
}
</style>
