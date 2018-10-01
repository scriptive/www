// const {path,rootSetting} = require('@scriptive/evh');
// const {path,rootSetting} = require.main.exports();
// const {score} = require('./score');
//
// module.exports = function(app){
//   app.use('*',require(path.join(score.dir.routes, 'home')));
// };
// module.exports.score = score;



// var {application} = require.main.exports();

// var webpack = require('webpack');
// var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
// var compiler = webpack(webpackConfig);
//
// application.use(require("webpack-dev-middleware")(compiler, {
//   logLevel: 'warn', publicPath: webpackConfig.output.publicPath
// }));
//
// application.use(require("webpack-hot-middleware")(compiler, {
//   log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
// }));
