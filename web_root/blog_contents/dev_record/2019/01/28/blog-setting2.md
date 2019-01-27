# BLOG - 6. 개발환경세팅 II

### **NPM설치**

NPM(Node Package Manager)란 자바스크립트 기반의 패키지 매니저입니다. [(Reference1)](https://www.w3schools.com/nodejs/nodejs_npm.asp) 이름처럼 NPM은 Node.js로 만들어진 모듈을 웹에서 받아 설치하고 관리해주는 프로그램입니다. 사용자는 명령어를 통해 공개된 모듈을 설치하고 활용할 수 있습니다.  

NPM 및 vue-cli 3.0을 아래와 같이 설치할 수 있습니다. vue-cli를 통해 터미널에서 간단한 명령어로 프로젝트 디렉토리를 만들 수 있습니다.

```bash
sudo yum -y install npm
sudo npm install -g @vue/cli
```

(-g는 global의 약자이며, 다른 계정들에서도 사용할 수 있음)

```bash
vue --verison
```

을 치면 Node version을 업그레이드 하라는 경고 메시지가 나올 겁니다.


### NPM 업그레이드

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

위 코드로 NPM 업그레이드를 합니다. 우선, 강제로 캐시를 제거하고, n 모듈을 설치합니다. 마지막으로 n모듈을 사용하여 Node.js를 설치합니다. [(Reference2)](https://velopert.com/1351)

```bash
vue --verison
```

을 치면 이제 정상적으로 verison 정보가 뜹니다.



### Project Directory 구성

```bash
cd
mkdir terrace
cd terrace
mkdir frontend
vue create home
```

Project main directory(여기서는 terrace)를 만들고 그 하단에 frontend directory를 만든 뒤 vue를 create합니다. vue-cli가 home directory 하단에 자동으로 project directory를 만들어 줍니다. '기본 npm registry는 느리다고 더 빠른 installation을 하겠습니까?'라는 메시지가 뜨면 Yes를 해줍니다. 그 후 default (babel, eslint)를 선택해주고 설치합니다.

home directory로 들어가보면 아래와 같이 기본적인 project directory가 구성되어 있을 것입니다.

- dist: 빌드 결과물이 담겨 있는 디렉토리입니다. ```npm run build``` 시 내용물이 담깁니다. 빌드에 대해서는 나중에 다시 설명하겠습니다.
- node_modules: npm 으로 설치한 것들이 담겨있는 폴더입니다. 용량이 꽤 크기 때문에 github에 올리면 안됩니다. (.gitignore에 추가)
- public: 공용으로 접근 가능한 파일이 위치합니다. favicon, 블로그 아티클 등이 담깁니다.
- src: vue 소스코드가 담깁니다. 

나머지 json이나 js파일은 직접 건들 건 아니기 때문에 신경쓰지 맙시다. [(Reference3)](http://vuejs.kr/vue/vue-cli/2018/01/27/vue-cli-3/)

```bash
cd home
npm run serve
```

![App running](https://cdn.bkshin.com/devRecord/2019/01/28/6_1.PNG)

run serve후에 위와 같이 뜨면 정상적으로 성공한 것입니다.

이제 아래 명령어로 빌드를 해줍니다.

```bash
npm run build
```

build 결과물은 dist directory에 담깁니다.

### http-server 설치

로컬에서 만든 작업물을 웹 상에서 띄우기 위해서는 웹 서버가 필요합니다. 여기서는 http-server를 사용할 것이며, 웹 서버에 대한 이해가 부족하다면 [(Reference4)](https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_web_server) 링크를 참고하시기 바랍니다.

```bash
cd dist
sudo npm install –g http-server 
http-server .
```

위와 같이 dist 디렉토리에 http-server를 설치합니다. http-server 옆에 .은 현재 디렉토리를 의미합니다. [(Reference5)](https://www.npmjs.com/package/http-server)


### localhost 접속

http-server를 실행했기 때문에 인터넷을 켜서 주소창에 localhost:8881을 치면 Vue 기본 페이지가 떠야하는데 뜨질 않습니다. (localhost옆에 :8881은 호스트 포트를 의미함)

이는 방화벽이 막혀있어서 그런 것입니다.

home directory에서 아래와 같이 포트에 방화벽을 열어줍니다. (8080, 80 등이 포트를 의미함)

```bash
sudo firewall-cmd --zone=public --add-port=8080/tcp --permanent
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --reload
```

이젠 http-server . 혹은 npm run serve를 한 뒤 localhost:8881로 접속하면 vue 기본 페이지가 뜹니다.

![Vue 기본 페이지](https://cdn.bkshin.com/devRecord/2019/01/28/6_2.PNG)

frontend directory 안에서 vue-cli로 home project를 생성했습니다. home directory 밑에는 서버와 배포시스템이 추가됩니다. frontend directory 밑에는 문서 변환과 프리렌더링 프로그램이 추가될 것입니다. **드디어 눈에 보이는 무언가가 생겨났습니다!**  
<br>

## Reference  

[Reference1 (https://www.w3schools.com/nodejs/nodejs_npm.asp)](https://www.w3schools.com/nodejs/nodejs_npm.asp)  
[Reference2 (https://velopert.com/1351)](https://velopert.com/1351)  
[Reference3 (http://vuejs.kr/vue/vue-cli/2018/01/27/vue-cli-3/)](http://vuejs.kr/vue/vue-cli/2018/01/27/vue-cli-3/)  
[Reference4 (https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_web_server)](https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_web_server)  
[Reference5 (https://www.npmjs.com/package/http-server)](https://www.npmjs.com/package/http-server)  
asciinema 참고: [https://asciinema.org/a/VxmATX3owRxhSOcafHpPr4X6S](https://asciinema.org/a/VxmATX3owRxhSOcafHpPr4X6S)
