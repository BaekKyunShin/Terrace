<template>
  <div id="blog">
    <div id="blog-contents-element" v-if="year !== undefined">
      <article>
        <div class="inner-title-container">
          <h1 id="inner-title">{{ title }}</h1>
          <div class="inner-authorDate-container">  
            <span id="inner-author">{{ author }}</span>
             | 
            <span id="inner-date">{{ year }}.{{ month }}.{{ day }}</span>
          </div>
        </div>
        <div id="article-content" v-html="articleHtmlSource"></div>
      </article>
      <hr>
    </div>
    <div v-else>
      <div class="blog-list-element" v-for="i in index" :key="i">
        <router-link :to="i.uri" class="blog-title">{{ i.title }}</router-link>
        <br>
        <span class="blog-author">{{ i.author }}</span>
        <span class="blog-date"> {{ i.date }} </span>
        <hr class="separate-line">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookThinkBlog',
  metaInfo() {
    if(this.year === undefined) {
      return {
        title: '책과 사유',
        meta: [
          { charset: 'utf-8' },
          {
            'property': 'og:title',
            'content': '책과 사유',
            'template': chunk => `${chunk} | bksin`,
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
            'template': chunk => `${chunk} | bkshin`,
            'vmid': 'og:title'
          },
          // Mobile Optimization
          { name: 'viewport', content: 'width=device-width, initial-scale=1'},
          {
            'property': 'og:description',
            'content': 'Thank you for reading my article',
            'template': chunk => `${chunk}`,
            'vmid': 'og:description'
          }
        ]
      }
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
    var author = blogContents.querySelector('h2');
    if(titles.length <= 1) {
      return;
    } else {
      // Title exists
      var title  = blogContents.querySelector('#inner-title')
      title.innerHTML = titles[1].innerHTML;
      titles[1].style.display = "none";
      author.style.display = "none";
      // It is for og:title, author
      this.titleForMeta = title.innerHTML;
      this.author = author.innerHTML;
    }
    this.initDisqus(
      "bkshin",
      this.address.replace(this.domain, ""), // uri as an identifier
      this.title,
      this.address
    );
  },

  data() {
    return {
      // __INSERTION_POSITION__ // DONT CHANGE!!
      index: 
[{"title":"호모 데우스","author":"유발 하라리","uri":"/bookThinkBlog/2019/02/24/book-homoDeus/","date":"2019/02/24"},{"title":"시로 납치하라","author":"류시화 엮음","uri":"/bookThinkBlog/2019/01/27/book-ryusiwha2/","date":"2019/01/27"},{"title":"사피엔스","author":"유발 하라리","uri":"/bookThinkBlog/2018/12/28/book-sapiens/","date":"2018/12/28"},{"title":"내가 누군지도 모른 채 마흔이 되었다","author":"제임스 홀리스","uri":"/bookThinkBlog/2018/11/27/book-theMiddlePassage/","date":"2018/11/27"},{"title":"오래된 미래","author":"헬레나 노르베리 호지","uri":"/bookThinkBlog/2018/10/09/book-ancientFutures/","date":"2018/10/09"},{"title":"아내를 모자로 착각한 남자","author":"올리버 색스","uri":"/bookThinkBlog/2018/09/10/book-hisWifeforaHat/","date":"2018/09/10"},{"title":"세상을 만드는 글자, 코딩","author":"박준석","uri":"/bookThinkBlog/2018/08/26/book-wordCoding/","date":"2018/08/26"},{"title":"상실의 시대","author":"무하카미 하루키","uri":"/bookThinkBlog/2018/08/10/book-norwegianWood/","date":"2018/08/10"},{"title":"자유론","author":"존 스튜어트 밀","uri":"/bookThinkBlog/2018/06/17/book-onLiberty/","date":"2018/06/17"},{"title":"장자","author":"장자","uri":"/bookThinkBlog/2018/05/13/book-zhuangzi/","date":"2018/05/13"},{"title":"페르마의 마지막 정리","author":"사이먼 싱","uri":"/bookThinkBlog/2018/04/05/book-fermat/","date":"2018/04/05"},{"title":"철학이야기","author":"윌 듀랜트","uri":"/bookThinkBlog/2018/03/02/book-philosophyStory/","date":"2018/03/02"},{"title":"참을 수 없는 존재의 가벼움","author":"밀란 쿤데라","uri":"/bookThinkBlog/2018/02/11/book-lightnessOfPresence/","date":"2018/02/11"},{"title":"코스모스","author":"칼세이건","uri":"/bookThinkBlog/2017/12/31/book-cosmos/","date":"2017/12/31"},{"title":"백범일지","author":"백범김구","uri":"/bookThinkBlog/2017/07/30/book-kimkoo/","date":"2017/07/30"},{"title":"지금 알고 있는 걸 그때도 알았더라면","author":"류시화 엮음","uri":"/bookThinkBlog/2017/06/27/book-ryusiwha/","date":"2017/06/27"},{"title":"실존주의는 휴머니즘이다","author":"장 폴 샤르트르","uri":"/bookThinkBlog/2017/05/18/book-existentialism/","date":"2017/05/18"},{"title":"이방인","author":"알베르 까뮈","uri":"/bookThinkBlog/2017/04/03/book-stranger/","date":"2017/04/03"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
,
    year : this.$route.params.year1,
    month : this.$route.params.month1,
    day : this.$route.params.day1,
    title : this.$route.params.title1,
    author : this.author,
    titleForMeta : "",
    articleHtmlSource : "",
    address : "",  // will have a permalink of the article
    domain : "https://bkshin.com/bookThinkBlog",
    }
  },
  watch: {
    '$route' (to) {
      this.year = to.params.year1;
      this.month = to.params.month1;
      this.day = to.params.day1;
      this.title = to.params.title1;
      this.getPage();
      }
  },
  methods: {
    // Below function is from https://solidfoundationwebdev.com/blog/posts/many-disqus-modules-on-a-single-page
    // The function did not work well,
    // so I have fixed something, and it works well now.
    initDisqus: function(shortname, identifier, title, url) {
      //config
      if (typeof DISQUS === "undefined") {
        (async () => {
          var vars_text =
            'var disqus_shortname  = "' +
            shortname +
            '";\n' +
            'var disqus_title      = "' +
            title +
            '";\n' +
            'var disqus_identifier = "' +
            identifier +
            '";\n' +
            'var disqus_url        = "' +
            url +
            '";\n';
          var vars_obj = document.createElement("script");
          vars_obj.type = "text/javascript";
          vars_obj.async = true;
          vars_obj.text = vars_text;
          (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
          ).appendChild(vars_obj); 
          
          var dsq = document.createElement("script");
          dsq.type = "text/javascript";
          dsq.async = true;
          dsq.src = "//" + shortname + ".disqus.com/count.js";
          (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
          ).appendChild(dsq);
        })();
      } else {
        // eslint-disable-next-line
        DISQUS.reset({
          reload: true,
          config: function() {
            this.page.identifier = identifier;
            this.page.url = url;
            this.page.title = title;
          }
        });
      }
    },
    
    totheTop: function() {
      document.body.scrollTop = 0 ; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    
    getPage: function() {
      if (this.year === undefined) {
        return;
      }

      // Load page after the scroll is on the top
      this.totheTop();
      
      var htmlDocUri = 
        '/blog_contents/book_think/'
        + this.year + '/'
        + this.month + '/'
        + this.day + '/'
        + this.title + '.html';
      fetch(htmlDocUri)
        .then(response => response.text())
        .then(responseText => this.articleHtmlSource = responseText);
      
      var uri = htmlDocUri.replace('blog_contents/book_think/', '')
                     .replace('.html', '/');
      this.address = this.domain + uri;
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
  font-size: 1.05em;
  text-align: left;
  max-width: 800px;
}

.blog-title {
  color: #8a300f; 
  font-size: 1.05em;
  text-align: left;
}

.blog-author {
  color: #8a300f; 
  font-size: 0.95em;
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

.inner-title-container > h1{
  margin-top: 40px;
  margin-bottom: 10px;
}

.inner-authorDate-container {
  color: #8a300f;
  margin-bottom: 60px;
}

#article-content {
  text-align: left;
  font-size: 1.1em;
  line-height: 1.8em;
}

a { 
  text-decoration: none;
}

a:hover { 
  color: #b84014;
}
</style>
