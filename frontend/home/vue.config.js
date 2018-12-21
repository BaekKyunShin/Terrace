/* vue.config.js */
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
        "/",
	"/about",
        "/bookThinkBlog",
        "/devRecordBlog",
        "/bookThinkBlog/2018/11/27/book-theMiddlePassage",
	"/bookThinkBlog/2018/10/09/book-ancientFutures",
	"/bookThinkBlog/2018/09/10/book-hisWifeforaHat"
],
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
