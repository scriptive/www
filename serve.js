const ask=(Id)=>require(Id);
const root=__dirname;
const evh=()=>ask('@scriptive/evh');
module.exports = {evh,ask,root};
const {scriptive} = evh();

// const webpack = require('webpack');
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackHotMiddleware =  require("webpack-hot-middleware");

var server = new scriptive('');
// OPTIMIZE: .port(3000) is optional, default port number based on `.env`
// server.port();

// OPTIMIZE: .root(__dirname) is optional, default root directory based `process.mainModule.paths`
// server.root();

// NOTE: .listen(), to start listening http
server.listen();

// OPTIMIZE: .error(callback) is optional, to catch http errors. callback executed when http errors found!
server.error();

// OPTIMIZE: .listening(callback) is optional. callback executed when listening process.
server.listening();

// OPTIMIZE: .close(callback) is optional. callback executed when listening is stop.
server.close();

// HACK: .stop(), to stop listening!
// server.stop();

// OPTIMIZE:
// HACK:
// DEBUG:
// XXX:
// COMBAK:
// BUG: