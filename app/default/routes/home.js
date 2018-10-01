// NOTE: mini
var app = require('../');
//     {express,path} = app.Core.evh(),
//     {score} = require('../score'),
//     querystring = require('querystring'),
//     Definition = require('./classDefinition');

// NOTE: posible
// var Core = require.main.exports,
//     {express} = Core.evh()
//     {score} = require('../score');
// var router = express.Router();

let router = app.router();

router.get('/', function(req, res,next) {
  // app.sql.query('SELECT * FROM ?? WHERE ip LIKE ? ORDER BY ip ASC',['visits','127.0.0.1']).then(raw=>{
  //   if (raw.length > 0) {
  //     console.log(raw);
  //   }
  // });
  res.render('home', { title: 'Hello' });
});

module.exports = router;