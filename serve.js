const ask=(Id)=>require(Id),
      evh=()=>ask('@scriptive/evh');
module.exports = {evh,ask};
const {scriptive} = evh();

var server = new scriptive();
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