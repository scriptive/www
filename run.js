// NOTE please mind the reserved keywords (sql,mongo,Config,args,etc) in module.exports
// node command myordbok
// node run myordbok test
// node run  myordbok
// npm run myordbok
const scriptive = require("@scriptive/evh");
module.exports = scriptive;
scriptive.command();
// process.argv.splice(2),__dirname
