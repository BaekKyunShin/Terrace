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
[{"title":"BLOG - 11. Github 연결","author":"지금까지 블로그 기본 뼈때를 만들고 빌드까지 했습니다. 추후에는 AWS를 통해서 블로그를 띄울 겁니다. 그에 앞서 본 챕터에서는 github에 연결하는 방법에 대해 배워볼 것입니다. github 연결법을 이미 알고 계신 분은 다음 챕터로 넘어가셔도 됩니다.\u003c/p\u003e\n\u003ch3 id=\"github\"\u003e\u003cstrong\u003eGithub\u003c/strong\u003e\u003c/h3\u003e\n\u003cp\u003e우선 git은 github을 이용할 것입니다. github에 repository를 하나 생성합니다. terrace 디렉토리에서는 \u003ccode\u003e.gitignore\u003c/code\u003e에 \u003ccode\u003ebin\u003c/code\u003e을 추가해줍니다. \u003ccode\u003e.gitignore\u003c/code\u003e에 있는 디렉토리 혹은 파일은 git의 영향을 받지 않습니다. 이제 git을 만들어줍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003egit init\ngit config --global user.name \u0026quot;bkshin\u0026quot;\ngit config --global user.email \u0026quot;werooring@gmail.com\u0026quot;\ngit add -A\ngit commit\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e커밋 메시지는 \u003ccode\u003efirtst commit\u003c/code\u003e이라고 찍습니다. 다만 그 이후 commit은 \u003ca href=\"https://www.huskyhoochu.com/issue-based-version-control-101\"\u003e(Reference1)\u003c/a\u003e을 참고해서 작성하면 됩니다. 이론편뿐만 아니라 실전편까지 봐야합니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003egit remote add origin git@github.com:BaekKyunShin/Terrace_example.git\ngit push -u origin master\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이렇게 하면 publickey가 없다고 permission denied가 뜰 겁니다. git@github.com~ 부분이 SSH 주소입니다. Git SSH 공개키를 만들어야 push를 할 수 있습니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003essh-keygen\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e을 해주고 passphrase 만 두번 입력해줍니다. 맨 처음 나오는 'Enter file in which to save the key'는 무시하고 엔터만 쳐도 됩니다. \u003ccode\u003e~/.ssh\u003c/code\u003e 디렉토리에서 id_rsa.pub가 생성된 걸 볼 수 있습니다. 이것이 publickey입니다. \u003ca href=\"https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-SSH-%EA%B3%B5%EA%B0%9C%ED%82%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0\"\u003e(Reference2)\u003c/a\u003e\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecat ~/.ssh/id_rsa.pub\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e를 치면 ssh-rsa로 시작하는 publickey가 나올 것입니다. 이것을 그대로 복사합니다. github 맨 오른쪽 위 메뉴를 클릭하고 settings을 누릅니다. 왼쪽 personal settings에서 SSH and GPG Keys를 누릅니다. New SSH Key를 클릭한 뒤 title을 자유롭게 설정하고 아래 Key에 방금 복사한 publickey 내용을 그대로 붙여넣기 한 뒤 저장합니다.\u003cbr /\u003epublickey를 등록했으니 이제 github으로 push 해봅시다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003egit push -u origin master\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003epassphrase를 치면 정상적으로 push가 되는 것을 볼 수 있습니다. 여기서 bin 디렉토리가 push되었다면 잘못된 것입니다. bin은 .gitinore에 추가가 되어있어야 하며 정상적으로 추가되었다면 bin은 push가 안 됩니다.\u003c/p\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/02/17/11_1.PNG\" alt=\"github Repository\" /\u003e\u003cfigcaption\u003egithub Repository\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/02/17/blog-githubPush/","date":"2019/02/17"},{"title":"BLOG - 10. Shell Script, Makefile","author":"\u003cstrong\u003eShell Script를 활용한 npm 빌드\u003c/strong\u003e\u003c/h3\u003e\n\u003cp\u003e홈 디렉토리에서\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd terrace/frontend\nvi update.sh\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eupdate.sh에 아래 코드를 추가하고 저장해줍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd home\nnpm run build\nrm –rf ../../web_root\ncp –r dist ../../web_root\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위 코드는 home 디렉토리로 들어가 빌드를 해준 뒤 기존의 web_root 디렉토리를 삭제해주고 빌드의 결과물이 담기는 dist 디렉토리를 다시 web_root로 카피하는 명령어입니다. 여기서 sh 파일은 shell script 파일입니다. shell script란 line by line의 코드를 자동으로 실행해주는 프로그램입니다. 즉, \u003ccode\u003e./update.sh\u003c/code\u003e를 해줘서 shell script를 실행해주면 위 4줄의 코드를 순차적으로 자동 실행됩니다. 여러 줄의 코드를 일일이 입력하는 게 번거로울 때 유용합니다. 이제 frontend 디렉토리에 있는 update.sh를 실행해보겠습니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003e./update.sh\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003epermission denied가 뜰 겁니다. 권한 설정을 안 해줘서 그렇습니다. 아래와 같이 권한 설정을 변경합니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003echmod 755 update.sh\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이제 \u003ccode\u003e./update.sh\u003c/code\u003e를 하면 자동으로 빌드가 되고 빌드 결과물이 web_root에 담길 겁니다.\u003c/p\u003e\n\u003ch3 id=\"makefile를-활용한-루트-핸들러-빌드\"\u003eMakefile를 활용한 루트 핸들러 빌드\u003c/h3\u003e\n\u003cp\u003eMakefile은 shell script랑 비슷한 개념으로 보면 됩니다. 다만, Makefile은 변경된 사항만 반영해서 빠르게 실행을 해줍니다. 굉장히 많은 소스코드가 있다고 할 때 그 모든 코드를 하나 하나 컴파일 하려면 시간이 꽤 많이 들 것입니다. 변경된 소스코드만 알아서 컴파일 해준다면 훨씬 빠를 겁니다. 이럴 때 Makefile을 사용하는 것입니다. 아래는 Makefile 강좌에서 퍼온 make 유틸의 목적을 설명하는 글입니다. (20년도 더 된 강좌인데 수학의 정석, 성문 영어 같은 느낌이네요..)\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eThe purpose of the \u003cem\u003emake\u003c/em\u003e utility is to determine automatically which pieces of a large program need to be recompiled, and issue the commands to recompile them.\u003c/strong\u003e \u003ca href=\"https://wiki.kldp.org/KoreanDoc/html/GNU-Make/GNU-Make-1.html\"\u003e(Reference1)\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003e\u003ccode\u003enpm run serve\u003c/code\u003e에도 Makefile 개념이 있다고 보면 되는데, 처음 \u003ccode\u003enpm run serve\u003c/code\u003e를 할 땐 시간이 오래 걸리지만 한번 실행된 뒤에 변경 사항을 반영하는 것은 빠르게 처리됩니다.\u003cbr /\u003e\u003cbr\u003e 이제, terrace 디렉토리에서 Makefile을 만들어줍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003evi Makefile\u003c/code\u003e\u003c/pre\u003e\n\u003cpre class=\"makefile\"\u003e\u003ccode\u003erun:\n    ./bin/terrace\n\nbuild:\n    go build -x -o ./bin/terrace ./src\n    sudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위 Makefile의 의미는 \u003ccode\u003emake run\u003c/code\u003e 을 하면 \u003ccode\u003e./bin/terrace\u003c/code\u003e가 실행되고, \u003ccode\u003emake build\u003c/code\u003e를 하면 아래 두 줄이 실행된다는 것입니다. 인자를 아무것도 안주고 \u003ccode\u003emake\u003c/code\u003e만 하면 맨 위에 있는 \u003ccode\u003emake run\u003c/code\u003e을 실행합니다. 위 코드를 그대로 복사 붙여넣기 하면 Makefile이 실행 안 될 수도 있습니다. Makefile에서 실행되는 코드는 반드시 TAB을 해줘야하는데 그대로 복사 붙여넣기 하면 TAB이 아니라 띄어쓰기로 인식할 수 있기 때문입니다. 반드시 ./bin/terrace 왼쪽 부분과 build: 아랫줄은 TAB을 해줘야 합니다.\u003cbr /\u003e\u003cbr\u003e\u003c/p\u003e\n\u003cpre class=\"makefile\"\u003e\u003ccode\u003ego build -x -o ./bin/terrace ./src\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이 부분에서 -x는 build하는 과정에 대한 설명을 자세히 보여달라는 것입니다. -o는 output의 약자입니다. build 결과물인 실행 파일을 ./bin/terrace로 저장해달라는 것이고, ./src는 src 디렉토리에 있는 go 소스코드 (루트 핸들러가 들어 있는 main.go)를 읽어오는 부분입니다.\u003c/p\u003e\n\u003cp\u003e즉, src 디렉토리의 main.go를 빌드해서 ./bin/terrace 로 저장하라는 뜻입니다. 여기서는 \u003ccode\u003emake run\u003c/code\u003e하기 전에 \u003ccode\u003emake build\u003c/code\u003e부터 해줘야 합니다. 이전 글에서 설명한 것처럼 sudo 권한 없이 ./bin/terrace를 실행하기 위해서는 \u003ccode\u003esudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace\u003c/code\u003e을 해줘야 하기 때문입니다.\u003c/p\u003e\n\u003ch3 id=\"최종-디렉토리-구성\"\u003e최종 디렉토리 구성\u003c/h3\u003e\n\u003cp\u003e최종적인 Project Directory는 아래와 같습니다.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003e- terrace\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003e    - bin\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003e    - src\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003e    - frontend\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003e        - home\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003e            - dist\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003e    - web_root\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eterrace는 project root이며 Makefile도 있습니다.\u003cbr /\u003ebin에는 루트 핸들러 실행 파일인 terrace가 있습니다.\u003cbr /\u003esrc에는 루트 핸들러인 main.go 파일이 있습니다.\u003cbr /\u003efrontend 하위에 home이 있으며, npm 자동 빌드를 위한 update.sh도 있습니다.\u003cbr /\u003ehome 하위에는 빌드 결과물이 담기는 dist 디렉토리가 있으며, 앞으로 작업할 프론트 파일들이 담길 것입니다.\u003c/p\u003e\n\u003cp\u003e이제 로컬에서 해야할 기본적인 세팅은 끝났습니다. \u003cbr\u003e\u003c/p\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/02/15/blog-shellMake/","date":"2019/02/15"},{"title":"BLOG - 9. 웹서버 만든 후 빌드","author":"\u003cstrong\u003e빌드하기\u003c/strong\u003e\u003c/h3\u003e\n\u003cp\u003evue로 만든 소스코드를 아래와 같이 빌드합니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd terrace/frontend/home\nnpm run build\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e빌드란 해당 프로그램을 테스트하고 검사하여 배포하기 위해 수행하는 행위의 집합이라고 생각하시면 됩니다. \u003ca href=\"https://github.com/jinyowo/JS-Calendar/wiki/**-Build%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C\"\u003e(Reference1)\u003c/a\u003e 빌드의 결과물은 dist 디렉토리에 저장됩니다. 이를 배포를 위한 web_root 디렉토리로 카피하겠습니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecp -r dist ../../web_root\u003c/code\u003e\u003c/pre\u003e\n\u003ch3 id=\"root-handler-만들기\"\u003eRoot Handler 만들기\u003c/h3\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd ../../\nmkdir src\ncd src\nv main.go\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003esrc 디렉토리에 Root Handler 기능을 하는 main.go라는 파일을 만듭니다. main.go에 아래 코드를 그대로 붙여넣기 하시면 됩니다.\u003c/p\u003e\n\u003cpre class=\"go\"\u003e\u003ccode\u003epackage main\n\nimport (\n    \u0026quot;fmt\u0026quot;\n    \u0026quot;io/ioutil\u0026quot;\n    \u0026quot;log\u0026quot;\n    \u0026quot;net/http\u0026quot;\n)\n\nconst (\n  WebRoot = \u0026quot;./web_root/\u0026quot;\n)\n\nfunc rootHandler(w http.ResponseWriter, r *http.Request) {\n    // when request is root, send index.html\n    // otherwise, send the file\n\n    log.Println(r.URL.Path)\n\n    path := r.URL.Path[len(\u0026quot;/\u0026quot;):]\n\n    source, err := ioutil.ReadFile(WebRoot + path)\n    if err != nil {\n        source, err = ioutil.ReadFile(WebRoot + path + \u0026quot;/index.html\u0026quot;)\n        if err != nil {\n            // Redirect to 404 page\n            w.WriteHeader(http.StatusNotFound)\n            fmt.Fprint(w, err)\n            log.Println(\u0026quot;(rootHandler) \u0026quot;, err)\n            return\n        }\n    }\n\n    // Set content type as css if required file\u0026#39;s extension is css\n    if len(path) \u0026gt;= 4 \u0026amp;\u0026amp; path[len(path)-4:] == \u0026quot;.css\u0026quot; {\n        w.Header().Set(\u0026quot;Content-Type\u0026quot;, \u0026quot;text/css\u0026quot;)\n    }\n\n    fmt.Fprint(w, string(source))\n    log.Println(\u0026quot;(rootHandler) The requested file has been sent: \u0026quot;, WebRoot+path)\n}\n\nfunc main() {\n    http.HandleFunc(\u0026quot;/\u0026quot;, rootHandler)\n    log.Fatal(http.ListenAndServe(\u0026quot;:80\u0026quot;, nil))\n}\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003emain.go를 간단히 설명드리겠습니다. 예를 들어, \u003ccode\u003er.URL.Path\u003c/code\u003e = \u0026quot;/bookThinkBlog/2018/12/28/book-sapiens/\u0026quot; 입니다. r은 클라이언트의 request (클라이언트에서 서버로 보내온 정보들)를 뜻하는 것입니다.\u003c/p\u003e\n\u003cp\u003e\u003ccode\u003epath := r.URL.Path[len(\u0026quot;/\u0026quot;):]\u003c/code\u003e 이 코드를 지나면 \u003ccode\u003epath\u003c/code\u003e= \u0026quot;bookThinkBlog/2018/12/28/book-sapiens/\u0026quot; 이렇게 맨 앞 \u0026quot;/\u0026quot; 가 없어집니다.\u003c/p\u003e\n\u003cp\u003e\u003ccode\u003esource\u003c/code\u003e= \u0026quot;./web_root/bookThinkBlog/2018/12/28/book-sapiens/\u0026quot; 가 될 것입니다. err가 없다면 바로 아래의 조건문은 건너뛸 것이고, err가 있다면 \u003ccode\u003esource\u003c/code\u003e=\u0026quot;./web_root/bookThinkBlog/2018/12/28/book-sapiens/index.html\u0026quot;이 될 것입니다. 이것마저 err가 있다면 404(Not Found)를 띄워주는 겁니다.\u003c/p\u003e\n\u003cp\u003e아무 err가 없다면 \u003ccode\u003efmt.Fprint(w, string(source))\u003c/code\u003e 가 정상적으로 실행됩니다. Fprint는 파일에 쓰기 위한 용도이며, \u003ccode\u003estring(source)\u003c/code\u003e를 \u003ccode\u003ew\u003c/code\u003e에 써준다라는 의미입니다. \u003ca href=\"http://brownbears.tistory.com/175\"\u003e(Reference2)\u003c/a\u003e \u003ccode\u003ehttp.HandleFunc\u003c/code\u003e는 지정된 Path에 대해서 어떤 Request 핸들러를 사용할지를 지정해줍니다. 위 코드에서는 \u0026quot;/\u0026quot; Path에 대해 rootHandler 함수를 실행해준다는 뜻입니다. \u003ccode\u003ehttp.ListenAndServe\u003c/code\u003e는 80번 포트를 열고 클라언트의 request를 받아들여 새로운 Go 루틴에 작업을 할당해줍니다. 두번째 파라미터인 nil은 Default인 HTTP Request router를 사용한다는 뜻입니다. \u003ca href=\"http://golang.site/go/article/111-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%9B%B9-%EC%84%9C%EB%B2%84-HTTP-%EC%84%9C%EB%B2%84\"\u003e(Reference3)\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003e사실 main.go에 있는 function 하나 하나가 굉장히 추상화가 되어있습니다. 그렇기에 그냥 블랙박스라 생각하시고 어떤 기능을 하는지만 이해하셔도 무방할 것 같습니다. 브리핑을 해보자면, 유저가 URL 주소를 치면 웹 서버에 request를 보냅니다. 그 request를 받아 rootHandler를 돌려 source path를 responsewriter에 써주고 그 response를 사용자 브라우저에 띄워주는 것입니다.\u003c/p\u003e\n\u003ch3 id=\"main.go-빌드하기\"\u003emain.go 빌드하기\u003c/h3\u003e\n\u003cp\u003emain.go가 있는 src 디렉토리에서 go build를 해줍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ego build main.go\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e그러면 결과물로 \u003ccode\u003emain\u003c/code\u003e이라는 실행 파일이 하나 생길 겁니다. 아래와 같이 몇 가지 조정을 하겠습니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd ..\nmv src/main .\nmkdir bin\nmv main bin\ncd bin\nmv main terrace\ncd ..\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이제 terrace/bin 디렉토리에 terrace라는 go 파일이 담겨 있을 겁니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo ./bin/terrace \u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이렇게 하면 npm run serve 한 것과 같이 웹 서버를 띄울 수 있습니다. 다만 npm run serve는 8080포트지만, 위에 있는 main.go를 보면 80포트에서 listen을 하고 있기 때문에 localhost:8001을 해야 접속이 됩니다. (각자 포트포워딩 했던 포트로 들어가시면 됩니다.) terrace를 실행할 때 sudo를 붙이는 이유는 80이 low number port이기 때문입니다. (참고로 http는 80번 포트, https는 443번 포트, ssh는 22번 포트를 씁니다.)\u003c/p\u003e\n\u003cp\u003e하지만, 매번 실행할 때마다 sudo를 붙인다면 해킹당할 시 모든 걸 잃을 수 있습니다. sudo로 실행한 것을 뺏기면 root 계정을 뺏긴 것이니까요. 그래서 아래와 같이 설정해주면 sudo를 붙이지 않아도 \u003ccode\u003e./bin/terrace\u003c/code\u003e가 실행 됩니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/terrace\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e하지만 사용자 계정을 뺏겨도 sudo를 통해 루트 권한을 얻을 수 있기 때문에 이 또한 안전하지는 않습니다. 추후에는 sudo 권한을 얻을 수 없는 web 계정을 통해 올려야할 것입니다. (지금은 개인 블로그이고, 중요한 정보가 담겼다거나 해킹의 위험도 없기 때문에 사용자 계정으로 하는 것입니다.) \u003cbr\u003e\u003c/p\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/02/12/blog-webServer/","date":"2019/02/12"},{"title":"BLOG - 8. Neovim 설정","author":"\u003cstrong\u003eIUS-release.rpm 설치\u003c/strong\u003e\u003c/h3\u003e\n\u003cp\u003ehome directory에서\u003c/p\u003e\n\u003cpre class=\"zsh\"\u003e\u003ccode\u003esudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eIUS는 리눅스를 위한 Red-Hat Package Manager(RPM) 패키지를 제공하는 Community Project입니다. \u003ca href=\"https://ius.io/\"\u003e(Reference1\u003c/a\u003e)\u003c/p\u003e\n\u003ch3 id=\"파이썬-설치\"\u003e파이썬 설치\u003c/h3\u003e\n\u003cp\u003e본 블로그에서는 python을 사용하지 않습니다. 하지만 아래에서 설치할 Neovim을 사용하기 위해 python이 필요합니다. 파이썬은 아래와 같이 설치합니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo yum install -y python36u python36u-libs python36u-devel python36u-pip\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e파이썬을 설치한 뒤 아래와 같이 조금 손을 봐줘야합니다. 위와 같이 파이썬을 받아오면 python2와 python3가 같이 받아집니다. python2와 python3가 같이 있는 상황에서 \u003ccode\u003epython\u003c/code\u003e을 부르면 python2가 불립니다. python3는 \u003ccode\u003epython3\u003c/code\u003e라고 명시를 해줘야 합니다. \u003ccode\u003epython\u003c/code\u003e을 불렀을 때 python3를 불러오기 위해 아래와 같이 손을 봐주는 것입니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ewhich python3.6\ncd /usr/bin\nsudo rm python3\nsudo rm python\nsudo rm pip \nsudo cp python3.6 python3\nsudo cp python2.7 python\nsudo cp pip3.6 pip\u003c/code\u003e\u003c/pre\u003e\n\u003ch3 id=\"neovim설치-및-권한-변경\"\u003eNeovim설치 및 권한 변경\u003c/h3\u003e\n\u003cp\u003eNeovim의 목적은 쉽게 말해서 vim보다 Color를 많이 지원해 \u003cstrong\u003e예쁜 코드 에디터\u003c/strong\u003e를 제공하기 위함입니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd\ncd temp\nwget https://github.com/neovim/neovim/releases/download/v0.3.1/nvim.appimage\nchmod 755 nvim.appimage\n./nvim.appimage --appimage-extract\ncd squashfs-root\nsudo mv usr/bin/nvim /usr/bin/nvim\nsudo mv usr/share/nvim /usr/share/nvim\nnvim\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이렇게 하면 Neovim이 실행되는 걸 볼 수 있습니다. \u003ccode\u003e--appimage-extract\u003c/code\u003e는 appimage의 콘텐츠를 추출하는 기능을 한다. \u003ca href=\"https://github.com/AppImage/AppImageKit/wiki/Extracting-AppImages\"\u003e(Reference2)\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003e\u003ccode\u003echmod 755\u003c/code\u003e 에서 chmod는 \u003cstrong\u003ech\u003c/strong\u003eange \u003cstrong\u003emod\u003c/strong\u003ee 의 약자이며, 대상 파일과 디렉토리의 사용권한을 변경하는 명렁어입니다. 문자열 모드와 8진법 수 모드가 있는데 755는 8진법 수 모드를 사용한 것입니다.\u003c/p\u003e\n\u003cp\u003e755에서\u003cbr /\u003e첫번째 숫자(7) = user의 권한\u003cbr /\u003e두번째 숫자(5) = group의 권한\u003cbr /\u003e세번째 숫자(5) = other의 권한\u003cbr /\u003e을 뜻합니다.\u003c/p\u003e\n\u003cp\u003e755 = rwxr-xr-x 로 풀어쓸 수 있습니다. r은 파일 읽기 = 4, w는 파일 쓰기 = 2, x는 파일 실행 = 1를 뜻합니다. 즉 755는 user는 읽고, 쓰고, 실행할 수 있고, group과 other은 읽고, 실행만 할 수 있다는 뜻입니다. 4 = 2^2, 2 = 2^1, 1 = 2^0이기 때문에 각각 4, 2, 1이고 8진법 수 모드라 하는 것입니다.\u003c/p\u003e\n\u003cp\u003e읽기, 쓰기, 실행이 가능하다고 할 때, r: 4, w:2, x:1이기 때문에 4+2+1 = 7이 되는 것이고, 읽기, 실행만 가능하다고 할 때는, r:4, x:1이기 때문에 4+1 = 5가 되는 것입니다. 이렇게 숫자의 조합으로 3자리를 표현하면 됩니다. \u003ccode\u003echmod 777\u003c/code\u003e은 모든 보안을 꺼버립니다. \u003ca href=\"http://www.incodom.kr/Linux/%EA%B8%B0%EB%B3%B8%EB%AA%85%EB%A0%B9%EC%96%B4/chmod\"\u003e(Reference3)\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003echmod로 권한을 변경하기 전 nvim.appimage의 권한은 아래와 같이 664입니다. (\u003ccode\u003els -al\u003c/code\u003e로 권한을 자세히 볼 수 있음)\u003c/p\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/02/11/8_1.PNG\" alt=\"권한설정 전 nvim.appimage\" /\u003e\u003cfigcaption\u003e권한설정 전 nvim.appimage\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cp\u003e-rw-rw-r-- : 파일 접근 권한 분류 표기로, 처음 -는 파일 분류 타입을 뜻합니다. (파일 타입 : d 디렉토리, l(소문자 L) 링크 카운터, s 소켓, p 파이프, - 일반, c 특수문자, b 특수블럭)\u003c/p\u003e\n\u003cp\u003e664이면 실행이 안되므로 아래와 같이 실행이 가능하게 755로 바꿔줬습니다. 또한, user말고 다른 사람은 파일 쓰기를 못하게 한 것입니다.\u003c/p\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/02/11/8_2.PNG\" alt=\"권한설정 후 nvim.appimage\" /\u003e\u003cfigcaption\u003e권한설정 후 nvim.appimage\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo mv usr/bin/nvim /usr/bin/nvim\nsudo mv usr/share/nvim /usr/share/nvim\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위 코드는 현재 temp/squashfs-root 디렉토리 안에 있는 nvim을 환경변수가 있는 곳으로 옮겨준다는 뜻입니다. nvim도 어디서든 사용할 수 있게 하는 명령어입니다.\u003c/p\u003e\n\u003ch3 id=\"vundle-설치\"\u003eVundle 설치\u003c/h3\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd\ngit clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eVundle은 vim + Bundle의 합성어로 vim의 플러그인을 통합 관리해주는 도구입니다.\u003c/p\u003e\n\u003ch3 id=\"vim-config-설치\"\u003eVim config 설치\u003c/h3\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd ~/.config\ngit clone https://github.com/hrzon/mjVimPack\nmv mjVimPack nvim\nnvim\n# (enter, esc 후에)\n:PluginInstall\n:UpdateRemotePlugins\n:q\nnvim\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e명재선생님이 만들어 놓은 mjVimPack을 nvim으로 수정하고 실행하면 정상적으로 작동하는 것을 볼 수 있습니다. 이제 .zshrc에 아래 코드를 추가해줍니다. 그러면 nvim이 아니라 v라고만 쳐도 nvim을 실행시킬 수 있습니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ealias v=\u0026quot;nvim\u0026quot;\u003c/code\u003e\u003c/pre\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/02/11/blog-settingNeovim/","date":"2019/02/11"},{"title":"BLOG - 7. Go 언어 설치","author":"다른 언어를 사용해도 되지만 본 프로젝트에서는 Go 언어를 사용할 것입니다. Go 언어 설치를 위해서는 home directory에서\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003emkdir temp\ncd temp\nsudo yum -y install wget\nwget https://dl.google.com/go/go1.11.4.linux-amd64.tar.gz\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003ewget으로 받아오는 go 버전은 계속 업그레이드가 될 수 있으므로 최신버전으로 설치합니다. golang 홈페이지에 들어가면 아래와 같이 Linux 최신버전을 볼 수 있습니다.\u003c/p\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/02/10/7_1.PNG\" alt=\"golang 메인 홈페이지\" /\u003e\u003cfigcaption\u003egolang 메인 홈페이지\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cp\u003ego를 다운받을 때 확장자가 tar.gz입니다. 이는 압축 확장자이며, 압축을 풀어 사용할 수 있습니다. 다운받은 go 아카이브의 압축을 아래와 같이 풉니다. \u003ca href=\"http://sarghis.com/blog/468/\"\u003e(Reference1)\u003c/a\u003e temp directory에서\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003etar -xzvf go1.11.4.linux-amd64.tar.gz\u003c/code\u003e\u003c/pre\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo mv go /usr/local/\u003c/code\u003e\u003c/pre\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003evi ~/.zshrc\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e아래처럼, 환경변수 $PATH를 추가시킵니다. 환경변수를 추가시킴으로써 go를 어떤 디렉토리에서도 실행할 수 있게 합니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003eexport PATH=/usr/local/go/bin:$PATH\u003c/code\u003e\u003c/pre\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esource ~/.zshrc\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e$PATH는 환경 변수를 뜻합니다. 터미널에서 프로그램 명령어를 입력하면 $PATH 환경 변수에 저장된 디렉토리 목록에서 명령을 찾습니다. $PATH에 현재 나열된 목록을 확인하려면 아래와 같이 입력하면 됩니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003eecho $PATH\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e그러면 아래와 같이 콜론으로 구분된 디렉토리 목록이 반환됩니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003e/usr/local/go/bin:/usr/local/bin:/usr/bin:/home/bkshin/bin:/usr/local/sbin:/usr/sbin\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위에서 go 디렉토리도 추가했기 때문에 /usr/local/go/bin도 잘 추가된 것을 볼 수 있습니다. \u003ca href=\"https://askubuntu.com/questions/551990/what-does-path-mean\"\u003e(Reference2)\u003c/a\u003e 이제 아무 디렉토리에서나 \u003ccode\u003ego\u003c/code\u003e를 입력해주면 go가 잘 작동하는 할 것입니다.\u003c/p\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/02/10/blog-installGolang/","date":"2019/02/10"},{"title":"BLOG - 6. 개발환경세팅 II","author":"\u003cstrong\u003eNPM설치\u003c/strong\u003e\u003c/h3\u003e\n\u003cp\u003eNPM(Node Package Manager)란 자바스크립트 기반의 패키지 매니저입니다. \u003ca href=\"https://www.w3schools.com/nodejs/nodejs_npm.asp\"\u003e(Reference1)\u003c/a\u003e 이름처럼 NPM은 Node.js로 만들어진 모듈을 웹에서 받아 설치하고 관리해주는 프로그램입니다. 사용자는 명령어를 통해 공개된 모듈을 설치하고 활용할 수 있습니다.\u003c/p\u003e\n\u003cp\u003eNPM 및 vue-cli 3.0을 아래와 같이 설치할 수 있습니다. vue-cli를 통해 터미널에서 간단한 명령어로 프로젝트 디렉토리를 만들 수 있습니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo yum -y install npm\nsudo npm install -g @vue/cli\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e(-g는 global의 약자이며, 다른 계정들에서도 사용할 수 있음)\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003evue --verison\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e을 치면 Node version을 업그레이드 하라는 경고 메시지가 나올 겁니다.\u003c/p\u003e\n\u003ch3 id=\"npm-업그레이드\"\u003eNPM 업그레이드\u003c/h3\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo npm cache clean -f\nsudo npm install -g n\nsudo n stable\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위 코드로 NPM 업그레이드를 합니다. 우선, 강제로 캐시를 제거하고, n 모듈을 설치합니다. 마지막으로 n모듈을 사용하여 Node.js를 설치합니다. \u003ca href=\"https://velopert.com/1351\"\u003e(Reference2)\u003c/a\u003e\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003evue --verison\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e을 치면 이제 정상적으로 verison 정보가 뜹니다.\u003c/p\u003e\n\u003ch3 id=\"project-directory-구성\"\u003eProject Directory 구성\u003c/h3\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd\nmkdir terrace\ncd terrace\nmkdir frontend\nvue create home\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eProject main directory(여기서는 terrace)를 만들고 그 하단에 frontend directory를 만든 뒤 vue를 create합니다. vue-cli가 home directory 하단에 자동으로 project directory를 만들어 줍니다. '기본 npm registry는 느리다고 더 빠른 installation을 하겠습니까?'라는 메시지가 뜨면 Yes를 해줍니다. 그 후 default (babel, eslint)를 선택해주고 설치합니다.\u003c/p\u003e\n\u003cp\u003ehome directory로 들어가보면 아래와 같이 기본적인 project directory가 구성되어 있을 것입니다.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003edist: 빌드 결과물이 담겨 있는 디렉토리입니다. \u003ccode\u003enpm run build\u003c/code\u003e 시 내용물이 담깁니다. 빌드에 대해서는 나중에 다시 설명하겠습니다.\u003c/li\u003e\n\u003cli\u003enode_modules: npm 으로 설치한 것들이 담겨있는 폴더입니다. 용량이 꽤 크기 때문에 github에 올리면 안됩니다. (.gitignore에 추가)\u003c/li\u003e\n\u003cli\u003epublic: 공용으로 접근 가능한 파일이 위치합니다. favicon, 블로그 아티클 등이 담깁니다.\u003c/li\u003e\n\u003cli\u003esrc: vue 소스코드가 담깁니다.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e나머지 json이나 js파일은 직접 건들 건 아니기 때문에 신경쓰지 맙시다. \u003ca href=\"http://vuejs.kr/vue/vue-cli/2018/01/27/vue-cli-3/\"\u003e(Reference3)\u003c/a\u003e\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd home\nnpm run serve\u003c/code\u003e\u003c/pre\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/01/28/6_1.PNG\" alt=\"App running\" /\u003e\u003cfigcaption\u003eApp running\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cp\u003erun serve후에 위와 같이 뜨면 정상적으로 성공한 것입니다.\u003c/p\u003e\n\u003cp\u003e이제 아래 명령어로 빌드를 해줍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003enpm run build\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003ebuild 결과물은 dist directory에 담깁니다.\u003c/p\u003e\n\u003ch3 id=\"http-server-설치\"\u003ehttp-server 설치\u003c/h3\u003e\n\u003cp\u003e로컬에서 만든 작업물을 웹 상에서 띄우기 위해서는 웹 서버가 필요합니다. 여기서는 http-server를 사용할 것이며, 웹 서버에 대한 이해가 부족하다면 \u003ca href=\"https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_web_server\"\u003e(Reference4)\u003c/a\u003e 링크를 참고하시기 바랍니다.\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003ecd dist\nsudo npm install –g http-server \nhttp-server .\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e위와 같이 dist 디렉토리에 http-server를 설치합니다. http-server 옆에 .은 현재 디렉토리를 의미합니다. \u003ca href=\"https://www.npmjs.com/package/http-server\"\u003e(Reference5)\u003c/a\u003e\u003c/p\u003e\n\u003ch3 id=\"localhost-접속\"\u003elocalhost 접속\u003c/h3\u003e\n\u003cp\u003ehttp-server를 실행했기 때문에 인터넷을 켜서 주소창에 localhost:8881을 치면 Vue 기본 페이지가 떠야하는데 뜨질 않습니다. (localhost옆에 :8881은 호스트 포트를 의미함)\u003c/p\u003e\n\u003cp\u003e이는 방화벽이 막혀있어서 그런 것입니다.\u003c/p\u003e\n\u003cp\u003ehome directory에서 아래와 같이 포트에 방화벽을 열어줍니다. (8080, 80 등이 포트를 의미함)\u003c/p\u003e\n\u003cpre class=\"bash\"\u003e\u003ccode\u003esudo firewall-cmd --zone=public --add-port=8080/tcp --permanent\nsudo firewall-cmd --zone=public --add-port=80/tcp --permanent\nsudo firewall-cmd --reload\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003e이젠 http-server . 혹은 npm run serve를 한 뒤 localhost:8881로 접속하면 vue 기본 페이지가 뜹니다.\u003c/p\u003e\n\u003cfigure\u003e\n\u003cimg src=\"https://cdn.bkshin.com/devRecord/2019/01/28/6_2.PNG\" alt=\"Vue 기본 페이지\" /\u003e\u003cfigcaption\u003eVue 기본 페이지\u003c/figcaption\u003e\n\u003c/figure\u003e\n\u003cp\u003efrontend directory 안에서 vue-cli로 home project를 생성했습니다. home directory 밑에는 서버와 배포시스템이 추가됩니다. frontend directory 밑에는 문서 변환과 프리렌더링 프로그램이 추가될 것입니다. \u003cstrong\u003e드디어 눈에 보이는 무언가가 생겨났습니다!\u003c/strong\u003e\u003cbr /\u003e\u003cbr\u003e\u003c/p\u003e\n\u003ch2 id=\"reference\"\u003eReference","uri":"/devRecordBlog/2019/01/28/blog-setting2/","date":"2019/01/28"},{"title":"BLOG - 5. 개발환경세팅 I","author":"myself","uri":"/devRecordBlog/2019/01/24/blog-setting1/","date":"2019/01/24"},{"title":"BLOG - 4. PuTTY로 가상환경 접속","author":"myself","uri":"/devRecordBlog/2019/01/23/blog-puttyConnection/","date":"2019/01/23"},{"title":"BLOG - 3. 네트워크 포트포워딩","author":"myself","uri":"/devRecordBlog/2019/01/22/blog-portForwarding/","date":"2019/01/22"},{"title":"BLOG - 2. 네트워크 연결 및 커널","author":"myself","uri":"/devRecordBlog/2019/01/21/blog-network/","date":"2019/01/21"},{"title":"BLOG - 1. 가상환경 설치 및 실행","author":"myself","uri":"/devRecordBlog/2019/01/20/blog-CentOS/","date":"2019/01/20"},{"title":"첫 글","author":"myself","uri":"/devRecordBlog/2018/12/12/thanks-to/","date":"2018/12/12"}] // __INSERTION_POSITION_END__ // DONT CHANGE!!
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
