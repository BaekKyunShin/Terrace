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
[{"title":"제임스 홀리스 - 내가 누군지도 모른 채 마흔이 되었다","uri":"/bookThinkBlog/2018/11/27/book-theMiddldPassage/","date":"2018/11/27"},{"title":"헬레나 노르베리 호지 – 오래된 미래","uri":"/bookThinkBlog/2018/10/09/book-ancientFutures/","date":"2018/10/09"},{"title":"올리버 색스 - 아내를 모자로 착각한 남자","uri":"/bookThinkBlog/2018/09/10/book-hisWifeforaHat/","date":"2018/09/10"},{"title":"박준석 - 세상을 만드는 글자, 코딩","uri":"/bookThinkBlog/2018/08/26/book-wordCoding/","date":"2018/08/26"},{"title":"무라카미 하루키 - 상실의 시대","uri":"/bookThinkBlog/2018/08/10/book-norwegianWood/","date":"2018/08/10"},{"title":"존 스튜어트 밀 - 자유론","uri":"/bookThinkBlog/2018/06/17/book-onLiberty/","date":"2018/06/17"},{"title":"장자 - 장자","uri":"/bookThinkBlog/2018/05/13/book-zhuangzi/","date":"2018/05/13"},{"title":"사이먼 싱 - 페르마의 마지막 정리","uri":"/bookThinkBlog/2018/04/05/book-fermat/","date":"2018/04/05"},{"title":"윌 듀랜트 - 철학이야기","uri":"/bookThinkBlog/2018/03/02/book-philosophyStory/","date":"2018/03/02"},{"title":"밀란 쿤데라 - 참을 수 없는 존재의 가벼움","uri":"/bookThinkBlog/2018/02/11/book-lightnessOfPresence/","date":"2018/02/11"},{"title":"칼세이건 - 코스모스","uri":"/bookThinkBlog/2017/12/31/book-cosmos/","date":"2017/12/31"},{"title":"백범김구 - 백범일지","uri":"/bookThinkBlog/2017/07/30/book-kimkoo/","date":"2017/07/30"},{"title":"류시화 엮음 - 지금 알고 있는 걸 그때도 알았더라면","uri":"/bookThinkBlog/2017/06/27/book-ryusiwha/","date":"2017/06/27"},{"title":"장 폴 샤르트르 - 실존주의는 휴머니즘이다","uri":"/bookThinkBlog/2017/05/18/book-existentialism/","date":"2017/05/18"},{"title":"알베르 까뮈 - 이방인","uri":"/bookThinkBlog/2017/04/03/book-stranger/","date":"2017/04/03"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
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
  color: #3073b3; 
  text-decoration: none;
}

a:hover { 
  color: #53ADF1;
  font-weight: 350;
}
</style>
