<template>
  <div id="app">
    <H1 class="blog-title"> 귀퉁이 서재</H1>
    <nav>
      <router-link class="menu-bar" to="/">홈</router-link>
      <router-link class="menu-bar" to="/about/">소개</router-link>
      <router-link class="menu-bar" to="/bookThinkBlog/">책과 사유</router-link>
      <router-link class="menu-bar" to="/devRecordBlog/">개발과 기록</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);

#app {
  font-family: 'Spoqa Han Sans', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 47px;
  margin: auto;
  max-width: 800px;
}

/*
.blog-title{
  color: #790604
}
*/

pre {
	white-space: pre-wrap;                 /* CSS3 browsers  */
	white-space: -moz-pre-wrap !important; /* 1999+ Mozilla  */
	white-space: -pre-wrap;                /* Opera 4 thru 6 */
	white-space: -o-pre-wrap;              /* Opera 7 and up */
	word-wrap: break-word;                 /* IE 5.5+ and up */
	/* overflow-x: auto; */                /* Firefox 2 only */
	/* width: 99%; */		       /* only if needed */
  background: #fafafa !important;
  padding: 20px;
  line-height: 1.3em;
  -moz-box-shadow: 2px 2px 15px #ccc;
  -webkit-box-shadow: 2px 2px 15px #ccc;
  box-shadow: 2px 2px 15px #ccc;
  border-radius: 5px;
}

pre > code {
  padding: 0;
}

code {
  font-family: 'Inconsolata', monospace;
  font-size: 0.85em;
  background: #fafafa !important;
  padding: 1px 5px 1px 5px;
  display: inline !important;
}

.hljs {
  background: #fafafa !important;
  padding: 0 !important;
}

nav {
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 18px;
}

.menu-bar {
  background-position: center;
  padding: 10px;
  color: #666666; 
  text-decoration: none;
  -webkit-transition: color 0.9s;
  -moz-transition: color 0.9s;
  -o-transition: color 0.9s;
  transition: color 0.9s;
  font-size: 1.0em;
}

.menu-bar:hover {
  color: #2c3e50;
  background: radial-gradient(circle, transparent 1%, #ffffff 0%) center/15000%;
  border-radius: 15px; 
  -webkit-transition: background 1.1s;
  -moz-transition: background 1.1s;
  -o-transition: background 1.1s;
  transition: background 1.1s;
}

.menu-bar:active {
  background-color: #dee5ed;
  background-size: 100%;
  -webkit-transition: background 0s;
  -moz-transition: background 0s;
  -o-transition: background 0s;
  transition: background 0s;
}

img {
  max-width:100%;
  -moz-box-shadow: 1px 1px 10px #ccc;
  -webkit-box-shadow: 1px 1px 10px #ccc;
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 5px;
}

figcaption {
  opacity: 0.5;
  color: #8a300f;
  font-size:0.9em;
  font-style:italic;
  text-align: center;
}

a {
  -webkit-transition: color 1s ease-out;
  -moz-transition: color 1s ease-out;
  -o-transition: color 1s ease-out;
  transition: color 1s ease-out;
  color: #8a300f;
  text-decoration: none;
	font-size: 0.9em;
}

a:hover {
  color: #b84014;
  -webkit-transition: color 0.4s ease-out;
  -moz-transition: color 0.4s ease-out;
  -o-transition: color 0.4s ease-out;
  transition: color 0.4s ease-out;
}

</style>
