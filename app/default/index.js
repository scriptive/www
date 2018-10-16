const root = require.main.exports,
      {essence} = root.evh();
module.exports = {root};

/*
var app = module.exports = {};
app.score = score;
app.middleware = 'middleware.js';
*/

// var app = module.exports = function(){};
// app.score = score;

// var webpack = require('webpack');
// process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG :
// var webpackConfig = require('./webpack.middleware');
// var compiler = webpack(webpackConfig);
// essence.use(require('webpack-dev-middleware')(compiler, {
//   logLevel: 'warn', publicPath: webpackConfig.output.publicPath
// }));
// essence.use(require('webpack-hot-middleware')(compiler, {
//   log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
// }));