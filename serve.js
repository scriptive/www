const scriptive = require("@scriptive/evh");

module.exports = scriptive;
scriptive.server().on('error', function(e) {
  // sys.debug('unable to connect to ' + host);
  console.log('unable to connect to ',e);
});
// scriptive.test();
// const scriptive = require("@scriptive/evh");
// module.exports = scriptive;
// scriptive.server();

/*
const root = require('@scriptive/evh');
module.exports = root;
const {scriptive} = root;
*/