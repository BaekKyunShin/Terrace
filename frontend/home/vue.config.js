/* vue.config.js */
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    //__INSERTION_POSITION__ // DONT CNAHGE!!
    routes: 
    [
"/",
"/about",
"/bookThinkBlog",
"/devRecordBlog",
"/bookThinkBlog/2019/02/24/book-homoDeus",
"/bookThinkBlog/2019/01/27/book-ryusiwha2",
"/bookThinkBlog/2018/12/28/book-sapiens",
"/bookThinkBlog/2018/11/27/book-theMiddlePassage",
"/bookThinkBlog/2018/10/09/book-ancientFutures",
"/bookThinkBlog/2018/09/10/book-hisWifeforaHat",
"/bookThinkBlog/2018/08/26/book-wordCoding",
"/bookThinkBlog/2018/08/10/book-norwegianWood",
"/bookThinkBlog/2018/06/17/book-onLiberty",
"/bookThinkBlog/2018/05/13/book-zhuangzi",
"/bookThinkBlog/2018/04/05/book-fermat",
"/bookThinkBlog/2018/03/02/book-philosophyStory",
"/bookThinkBlog/2018/02/11/book-lightnessOfPresence",
"/bookThinkBlog/2017/12/31/book-cosmos",
"/bookThinkBlog/2017/07/30/book-kimkoo",
"/bookThinkBlog/2017/06/27/book-ryusiwha",
"/bookThinkBlog/2017/05/18/book-existentialism",
"/bookThinkBlog/2017/04/03/book-stranger",
"/devRecordBlog/2019/03/17/data-DAND",
"/devRecordBlog/2019/03/10/blog-routing",
"/devRecordBlog/2019/03/03/blog-blogSettingFinish",
"/devRecordBlog/2019/02/25/blog-s3DeployRedirect",
"/devRecordBlog/2019/02/24/blog-serverStart",
"/devRecordBlog/2019/02/18/blog-ec2GitHook",
"/devRecordBlog/2019/02/17/blog-githubPush",
"/devRecordBlog/2019/02/15/blog-shellMake",
"/devRecordBlog/2019/02/12/blog-webServer",
"/devRecordBlog/2019/02/11/blog-settingNeovim",
"/devRecordBlog/2019/02/10/blog-installGolang",
"/devRecordBlog/2019/01/28/blog-setting2",
"/devRecordBlog/2019/01/24/blog-setting1",
"/devRecordBlog/2019/01/23/blog-puttyConnection",
"/devRecordBlog/2019/01/22/blog-portForwarding",
"/devRecordBlog/2019/01/21/blog-network",
"/devRecordBlog/2019/01/20/blog-CentOS",
"/devRecordBlog/2018/12/12/thanks-to"
],
    // __INSERTION_POSITION_END__ // DONT CNAHGE!!
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
];

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },
};
