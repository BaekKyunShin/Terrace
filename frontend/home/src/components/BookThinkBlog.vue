<template>
  <div id="blog">
    <div class="blog-contents-element" v-if="year1 !== undefined" v-html="articleHtmlSource">
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
  mounted: function() {
    this.getPage();
  },
  data() {
    return {
      // __INSERTION_POSITION__ // DONT CHANGE!!
      index: 
[{"title":"사피엔스","author":"유발 하라리","uri":"/bookThinkBlog/2018/12/28/book-sapiens/","date":"2018/12/28"},{"title":"내가 누군지도 모른 채 마흔이 되었다","author":"제임스 홀리스","uri":"/bookThinkBlog/2018/11/27/book-theMiddlePassage/","date":"2018/11/27"},{"title":"오래된 미래","author":"헬레나 노르베리 호지","uri":"/bookThinkBlog/2018/10/09/book-ancientFutures/","date":"2018/10/09"},{"title":"아내를 모자로 착각한 남자","author":"올리버 색스","uri":"/bookThinkBlog/2018/09/10/book-hisWifeforaHat/","date":"2018/09/10"},{"title":"세상을 만드는 글자, 코딩","author":"박준석","uri":"/bookThinkBlog/2018/08/26/book-wordCoding/","date":"2018/08/26"},{"title":"상실의 시대","author":"무하카미 하루키","uri":"/bookThinkBlog/2018/08/10/book-norwegianWood/","date":"2018/08/10"},{"title":"자유론","author":"존 스튜어트 밀","uri":"/bookThinkBlog/2018/06/17/book-onLiberty/","date":"2018/06/17"},{"title":"장자","author":"장자","uri":"/bookThinkBlog/2018/05/13/book-zhuangzi/","date":"2018/05/13"},{"title":"페르마의 마지막 정리","author":"사이먼 싱","uri":"/bookThinkBlog/2018/04/05/book-fermat/","date":"2018/04/05"},{"title":"철학이야기","author":"윌 듀랜트","uri":"/bookThinkBlog/2018/03/02/book-philosophyStory/","date":"2018/03/02"},{"title":"참을 수 없는 존재의 가벼움","author":"밀란 쿤데라","uri":"/bookThinkBlog/2018/02/11/book-lightnessOfPresence/","date":"2018/02/11"},{"title":"코스모스","author":"칼세이건","uri":"/bookThinkBlog/2017/12/31/book-cosmos/","date":"2017/12/31"},{"title":"백범일지","author":"백범김구","uri":"/bookThinkBlog/2017/07/30/book-kimkoo/","date":"2017/07/30"},{"title":"지금 알고 있는 걸 그때도 알았더라면","author":"류시화 엮음","uri":"/bookThinkBlog/2017/06/27/book-ryusiwha/","date":"2017/06/27"},{"title":"실존주의는 휴머니즘이다","author":"장 폴 샤르트르","uri":"/bookThinkBlog/2017/05/18/book-existentialism/","date":"2017/05/18"},{"title":"이방인","author":"알베르 까뮈","uri":"/bookThinkBlog/2017/04/03/book-stranger/","date":"2017/04/03"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
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
      this.getPage();
      }
  },
  methods: {
    totheTop: function() {
      document.body.scrollTop = 0 ; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    getPage: function() {
      if (this.year1 === undefined) {
        return;
      }

      // Load page after the scroll is on the top
      this.totheTop();
      
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
  margin: auto;
  margin-bottom: 50px;
  text-align: right;
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

a { 
  text-decoration: none;
}

a:hover { 
  color: #b84014;
}
</style>
