<template>
  <div id="blog">
    <div id="blog-contents-element" v-if="year !== undefined">
      <article>
        <div class="inner-title-container">
          <h1 id="inner-title">{{ title }}</h1>
          <div id="inner-date">{{ year }} / {{ month }} / {{ day }}</div>
        </div>
        <div id="article-content" v-html="articleHtmlSource"></div>
      </article>
      <hr>
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
HighlightJS.registerLanguage('python', require('highlight.js/lib/languages/python'));

// eslint-disable-next-line
import _ from 'highlight.js/styles/xcode.css'

export default {
  name: 'devRecordBlog',
  metaInfo () {
    if(this.title === undefined) {
      return {
        title: 'Blog',
        meta: [
          { charset: 'utf-8' },
          {
            'property': 'og:title',
            'content': 'Blog',
            'template': chunk => `${chunk} :: bkshin`,
            'vmid': 'og:title'
          },
          {
            'property': 'og:description',
            'content': 'Article List',
            'template': chunk => `${chunk}`,
            'vmid': 'og:description'
          },
        ]
      }
    } else {
      return {
        title: this.titleForMeta,
        meta: [
          { charset: 'utf-8' },
          {
            'property': 'og:title',
            'content': this.title,
            'template': chunk => `${chunk} :: bkshin`,
            'vmid': 'og:title'
          },
          {
            'property': 'og:description',
            'content': 'Thank you for reading my article ',
            'template': chunk => `${chunk}`,
            'vmid': 'og:description'
          }
        ]
      }
    }
  },
  
  methods: {
    totheTop: function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    getPage: function() {
      if (this.year === undefined) {
        return;
      }

      // Load page after the scroll is on the top
      this.totheTop();

      var htmlDocUri = 
        '/blog_contents/dev_record/'
        + this.year + '/'
        + this.month + '/'
        + this.day + '/'
        + this.title + '.html';
      fetch(htmlDocUri)
        .then(response => response.text())
        .then(responseText => this.articleHtmlSource = responseText);
    }
  }, 
  mounted: function() {
    this.getPage();
  },

  updated: function() {
    // Change file name to document's title
    // When the page is an artice page, get blogContents
    var blogContents = document.querySelector('#blog-contents-element');
    if(blogContents == null){
      //this.toTheTop();
      return;
    }
    // Now, below scripts are for displaying an article,
    // Not the blog main page which has lists of name of articles.
    // Find all h1 tags, and choose second h1. It is real title of this doc.
    var titles = blogContents.querySelectorAll('h1');
    if(titles.length <= 1) {
      return;
    } else {
      // Title exists
      var title = blogContents.querySelector('#inner-title')
      title.innerHTML = titles[1].innerHTML;
      titles[1].style.display = "none";
      // It is for og:title
      this.titleForMeta = title.innerHTML;
    }
    
    // Find all code block and apply syntax highlighting
    [].forEach.call(document.querySelectorAll('code'), function(el) {
      HighlightJS.highlightBlock(el);
    });
  }, 
  
  data() {
    return {
      // __INSERTION_POSITION__ // DONT CHANGE!!
      index: 
[{"title":"첫 글","author":"myself","uri":"/devRecordBlog/2018/12/12/thanks-to/","date":"2018/12/12"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
,
    year : this.$route.params.year2,
    month : this.$route.params.month2,
    day : this.$route.params.day2,
    title : this.$route.params.title2,
    articleHtmlSource : ""
    }
  },
  watch: {
    '$route' (to) {
      this.year = to.params.year2;
      this.month = to.params.month2;
      this.day = to.params.day2;
      this.title = to.params.title2;
      this.getPage();
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

.inner-title-container {
  text-align: center;
  text-decoration: none;
}

.inner-title-container > h1 {
  margin-top: 30px;
  margin-bottom: 10px;
}

#article-content {
  text-align: left;
}

#inner-date {
  color: #8a300f;
  font-size: 0.9em;
  margin-bottom: 40px;
}

a {
  color: #8a300f;
  text-decoration: none;
}

a:hover {
  color: #b84014;
}
</style>
