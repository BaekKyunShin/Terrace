# BLOG - 15. 블로그 세팅 마무리

### **블로그 작업 후 로컬 변경사항 반영**

```terrace/frontend/home/src```에 작업을 위한 vue 파일들이 있습니다. 작업을 해준 뒤 ```frontend```디렉토리에서

```bash
./update.sh
cd ..
git add -A
git commit
make deploy
./deploy_to_S3.sh
```

```./update.sh```는 npm run build를 한 결과물이 담긴 dist 디렉토리를 web_root에 담는 작업입니다. git add, commit을 한 뒤 ```make deploy```를 하면 EC2 git 계정으로 변경된 작업물이 push 되고, ```./deploy_to_S3.sh```를 하면 S3로 빌드 결과물이 반영됩니다. 여기까지 하고 도메인 주소로 들어가면 변경된 사항이 반영되어 있을 겁니다.  



### 블로그 디자인 작업을 위한 참고자료

이제 모든 세팅은 다 끝났습니다. 개발환경세팅부터 AWS 작업까지 다 끝났습니다. 이제부터는 Vue.js, HTML, CSS, JavaScript를 공부하며 열심히 블로그를 꾸밀 일만 남았습니다. 본 블로그 프로젝트 디자인 작업을 위해 제가 직접 공부했던 자료를 공유해드립니다.   

- Vue.js  
  교재 -  [Do it! Vue.js 입문](http://www.yes24.com/Product/Goods/58206961?scode=032&OzSrank=1): 웹 프레임워크가 처음이라면 본 교재가 큰 도움이 될 것입니다. 기초부터 차근차근 설명을 해줘서 Vue.js가 무엇인지 어떻게 동작하는지 이해하는데 좋습니다.  
  유투브 온라인 강좌 - [Vue JS 2 Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa): 총 45강입니다. 저는 거의 다 봤지만 제가 만든 블로그는 동적이지 않기 때문에 모든 강좌의 내용이 다 필요하지는 않았습니다. 기본적인 것부터 습득하고 필요하면 더 공부하는 식으로 해도 될 것 같습니다. 여러 vue tutorial을 찾아봤는데, 찾아본 것 중 본 강좌가 설명이 가장 잘 되어 있었습니다.  

- HTML  
  [생활코딩 HTML](https://opentutorials.org/course/3084): 웹의 기초 지식도 같이 다루고 있습니다. HTML에 관해서는 아주 간단히만 나와있습니다.  

- CSS  
  [생활코딩 CSS](https://opentutorials.org/course/3086)  
  [CSS tutorial - W3Schools](https://www.w3schools.com/css/): 디자인 작업하는데 실질적인 도움을 많이 받은 사이트입니다.  

- JavaScript  
  [생활코딩 JavaScript](https://opentutorials.org/course/3085)

- Go 언어  
  [Go by Example](https://gobyexample.com/): 예시를 들어 설명을 하고 있어 다른 언어에 익숙한 분이라면 금방 이해하실 수 있을 겁니다.  

- 명재 선생님 깃허브  
  [myeongjae-kim](https://github.com/myeongjae-kim/terrace): 제 블로그를 위한 레퍼런스의 알파이자 오메가입니다. 명재 선생님께 다시 한번 감사를...   

  

  

Vue.js를 공부하셨다면 블로그의 큰 뼈대를 만들 수 있을 겁니다. 그러면서 css를 통해 디자인을 해주면 됩니다. 제 [github](https://github.com/BaekKyunShin/Terrace)의 commit 이력을 처음부터 보면서 참고하셔도 됩니다. 다만, 아직 리팩토링을 하지 않았기 때문에 코드가 다소 난잡할 수 있을 겁니다. 또한, 궁금한 것에 대한 해답은 왠만하면 다 google에서 찾을 수 있습니다. 특히, 작업하다가 리눅스 상 에러가 뜨는 것들에 대해서는 Stack Overflow에서 많은 해답을 찾았습니다.  



뼈대 만들기와 디자인하기 외에도 아래와 같은 중요한 작업들이 남아 있습니다.  

1. Routing  
2. Article Meta-Data 배열 만들기  
3. PreRendering  
4. Code Highlighting  
5. Trailing Slash  

이에 대해서는 다음 챕터부터 다루겠습니다. 우선 vue.js, HTML, CSS, JavaScript 를 다 공부한 뒤 다음 챕터를 보시면 됩니다.

