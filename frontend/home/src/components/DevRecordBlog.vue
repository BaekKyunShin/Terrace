<template>
  <div id="blog">
    <div id="blog-contents-element" v-if="year !== undefined">
      <article>
        <div class="inner-title-container">
          <h1 id="inner-title">{{ title }}</h1>
          <div id="inner-date">{{ year }}.{{ month }}.{{ day }}</div>
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
HighlightJS.registerLanguage('vim', require('highlight.js/lib/languages/vim'));
HighlightJS.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
HighlightJS.registerLanguage('go', require('highlight.js/lib/languages/go'));
HighlightJS.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

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
[{"title":"BLOG - 7. Go 언어 설치","author":"다른 언어를 사용해도 되지만 본 프로젝트에서는 Go 언어를 사용할 것입니다. Go 언어 설치를 위해서는 home directory에서\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003emkdir temp\ncd temp\nsudo yum -y install wget\nwget https://dl.google.com/go/go1.11.4.linux-amd64.tar.gz\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003ewget으로 받아오는 go 버전은 계속 업그레이드가 될 수 있으므로 최신버전으로 설치합니다. golang 홈페이지에 들어가면 아래와 같이 Linux 최신버전을 볼 수 있습니다.\u003c/p\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/02/10/7_1.PNG\" alt=\"golang 메인 홈페이지\" /\u003e\u003cfigcaption\u003egolang 메인 홈페이지\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cp\u003ego를 다운받을 때 확장자가 tar.gz입니다. 이는 압축 확장자이며, 압축을 풀어 사용할 수 있습니다. 다운받은 go 아카이브의 압축을 아래와 같이 풉니다. \u003ca href=\"http://sarghis.com/blog/468/\"\u003e(Reference1)\u003c/a\u003e temp directory에서\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003etar -xzvf go1.11.4.linux-amd64.tar.gz\u003c/code\u003e\u003c/pre\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo mv go /usr/local/\u003c/code\u003e\u003c/pre\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003evi ~/.zshrc\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e아래처럼, 환경변수 $PATH를 추가시킵니다. 환경변수를 추가시킴으로써 go를 어떤 디렉토리에서도 실행할 수 있게 합니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003eexport PATH=/usr/local/go/bin:$PATH\u003c/code\u003e\u003c/pre\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esource ~/.zshrc\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e$PATH는 환경 변수를 뜻합니다. 터미널에서 프로그램 명령어를 입력하면 $PATH 환경 변수에 저장된 디렉토리 목록에서 명령을 찾습니다. $PATH에 현재 나열된 목록을 확인하려면 아래와 같이 입력하면 됩니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003eecho $PATH\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e그러면 아래와 같이 콜론으로 구분된 디렉토리 목록이 반환됩니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003e/usr/local/go/bin:/usr/local/bin:/usr/bin:/home/bkshin/bin:/usr/local/sbin:/usr/sbin\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위에서 go 디렉토리도 추가했기 때문에 /usr/local/go/bin도 잘 추가된 것을 볼 수 있습니다. \u003ca href=\"https://askubuntu.com/questions/551990/what-does-path-mean\"\u003e(Reference2)\u003c/a\u003e 이제 아무 디렉토리에서나 \u003ccode\u003ego\u003c/code\u003e를 입력해주면 go가 잘 작동하는 할 것입니다.\u003c/p\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/02/10/blog-installGolang/","date":"2019/02/10"},{"title":"BLOG - 6. 개발환경세팅 II","author":"\u003cstrong\u003eNPM설치\u003c/strong\u003e\u003c/h3\u003e\n\u003cp\u003eNPM(Node Package Manager)란 자바스크립트 기반의 패키지 매니저입니다. \u003ca href=\"https://www.w3schools.com/nodejs/nodejs_npm.asp\"\u003e(Reference1)\u003c/a\u003e 이름처럼 NPM은 Node.js로 만들어진 모듈을 웹에서 받아 설치하고 관리해주는 프로그램입니다. 사용자는 명령어를 통해 공개된 모듈을 설치하고 활용할 수 있습니다.\u003c/p\u003e\n\u003cp\u003eNPM 및 vue-cli 3.0을 아래와 같이 설치할 수 있습니다. vue-cli를 통해 터미널에서 간단한 명령어로 프로젝트 디렉토리를 만들 수 있습니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo yum -y install npm\nsudo npm install -g @vue/cli\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e(-g는 global의 약자이며, 다른 계정들에서도 사용할 수 있음)\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003evue --verison\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e을 치면 Node version을 업그레이드 하라는 경고 메시지가 나올 겁니다.\u003c/p\u003e\n\u003ch3 id=\"npm-업그레이드\"\u003eNPM 업그레이드\u003c/h3\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo npm cache clean -f\nsudo npm install -g n\nsudo n stable\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위 코드로 NPM 업그레이드를 합니다. 우선, 강제로 캐시를 제거하고, n 모듈을 설치합니다. 마지막으로 n모듈을 사용하여 Node.js를 설치합니다. \u003ca href=\"https://velopert.com/1351\"\u003e(Reference2)\u003c/a\u003e\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003evue --verison\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e을 치면 이제 정상적으로 verison 정보가 뜹니다.\u003c/p\u003e\n\u003ch3 id=\"project-directory-구성\"\u003eProject Directory 구성\u003c/h3\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd\nmkdir terrace\ncd terrace\nmkdir frontend\nvue create home\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eProject main directory(여기서는 terrace)를 만들고 그 하단에 frontend directory를 만든 뒤 vue를 create합니다. vue-cli가 home directory 하단에 자동으로 project directory를 만들어 줍니다. '기본 npm registry는 느리다고 더 빠른 installation을 하겠습니까?'라는 메시지가 뜨면 Yes를 해줍니다. 그 후 default (babel, eslint)를 선택해주고 설치합니다.\u003c/p\u003e\n\u003cp\u003ehome directory로 들어가보면 아래와 같이 기본적인 project directory가 구성되어 있을 것입니다.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003edist: 빌드 결과물이 담겨 있는 디렉토리입니다. \u003ccode\u003enpm run build\u003c/code\u003e 시 내용물이 담깁니다. 빌드에 대해서는 나중에 다시 설명하겠습니다.\u003c/li\u003e\n\u003cli\u003enode_modules: npm 으로 설치한 것들이 담겨있는 폴더입니다. 용량이 꽤 크기 때문에 github에 올리면 안됩니다. (.gitignore에 추가)\u003c/li\u003e\n\u003cli\u003epublic: 공용으로 접근 가능한 파일이 위치합니다. favicon, 블로그 아티클 등이 담깁니다.\u003c/li\u003e\n\u003cli\u003esrc: vue 소스코드가 담깁니다.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e나머지 json이나 js파일은 직접 건들 건 아니기 때문에 신경쓰지 맙시다. \u003ca href=\"http://vuejs.kr/vue/vue-cli/2018/01/27/vue-cli-3/\"\u003e(Reference3)\u003c/a\u003e\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd home\nnpm run serve\u003c/code\u003e\u003c/pre\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/01/28/6_1.PNG\" alt=\"App running\" /\u003e\u003cfigcaption\u003eApp running\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cp\u003erun serve후에 위와 같이 뜨면 정상적으로 성공한 것입니다.\u003c/p\u003e\n\u003cp\u003e이제 아래 명령어로 빌드를 해줍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003enpm run build\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003ebuild 결과물은 dist directory에 담깁니다.\u003c/p\u003e\n\u003ch3 id=\"http-server-설치\"\u003ehttp-server 설치\u003c/h3\u003e\n\u003cp\u003e로컬에서 만든 작업물을 웹 상에서 띄우기 위해서는 웹 서버가 필요합니다. 여기서는 http-server를 사용할 것이며, 웹 서버에 대한 이해가 부족하다면 \u003ca href=\"https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_web_server\"\u003e(Reference4)\u003c/a\u003e 링크를 참고하시기 바랍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd dist\nsudo npm install –g http-server \nhttp-server .\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위와 같이 dist 디렉토리에 http-server를 설치합니다. http-server 옆에 .은 현재 디렉토리를 의미합니다. \u003ca href=\"https://www.npmjs.com/package/http-server\"\u003e(Reference5)\u003c/a\u003e\u003c/p\u003e\n\u003ch3 id=\"localhost-접속\"\u003elocalhost 접속\u003c/h3\u003e\n\u003cp\u003ehttp-server를 실행했기 때문에 인터넷을 켜서 주소창에 localhost:8881을 치면 Vue 기본 페이지가 떠야하는데 뜨질 않습니다. (localhost옆에 :8881은 호스트 포트를 의미함)\u003c/p\u003e\n\u003cp\u003e이는 방화벽이 막혀있어서 그런 것입니다.\u003c/p\u003e\n\u003cp\u003ehome directory에서 아래와 같이 포트에 방화벽을 열어줍니다. (8080, 80 등이 포트를 의미함)\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo firewall-cmd --zone=public --add-port=8080/tcp --permanent\nsudo firewall-cmd --zone=public --add-port=80/tcp --permanent\nsudo firewall-cmd --reload\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이젠 http-server . 혹은 npm run serve를 한 뒤 localhost:8881로 접속하면 vue 기본 페이지가 뜹니다.\u003c/p\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/01/28/6_2.PNG\" alt=\"Vue 기본 페이지\" /\u003e\u003cfigcaption\u003eVue 기본 페이지\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cp\u003efrontend directory 안에서 vue-cli로 home project를 생성했습니다. home directory 밑에는 서버와 배포시스템이 추가됩니다. frontend directory 밑에는 문서 변환과 프리렌더링 프로그램이 추가될 것입니다. \u003cstrong\u003e드디어 눈에 보이는 무언가가 생겨났습니다!\u003c/strong\u003e\u003cbr /\u003e\u003cbr\u003e\u003c/p\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/01/28/blog-setting2/","date":"2019/01/28"},{"title":"BLOG - 5. 개발환경세팅 I","author":"myself","uri":"/devRecordBlog/2019/01/24/blog-setting1/","date":"2019/01/24"},{"title":"BLOG - 4. PuTTY로 가상환경 접속","author":"myself","uri":"/devRecordBlog/2019/01/23/blog-puttyConnection/","date":"2019/01/23"},{"title":"BLOG - 3. 네트워크 포트포워딩","author":"myself","uri":"/devRecordBlog/2019/01/22/blog-portForwarding/","date":"2019/01/22"},{"title":"BLOG - 2. 네트워크 연결 및 커널","author":"myself","uri":"/devRecordBlog/2019/01/21/blog-network/","date":"2019/01/21"},{"title":"BLOG - 1. 가상환경 설치 및 실행","author":"myself","uri":"/devRecordBlog/2019/01/20/blog-CentOS/","date":"2019/01/20"},{"title":"첫 글","author":"myself","uri":"/devRecordBlog/2018/12/12/thanks-to/","date":"2018/12/12"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
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
  font-size: 1.1em;
  line-height: 1.8em;
}

#inner-date {
  color: #8a300f;
  font-size: 0.9em;
  margin-bottom: 40px;
}

a {
  text-decoration: none;
}

a:hover {
  color: #b84014;
}

</style>
