// NOTE: mini
var app = require('../');

// NOTE: posible
// var {express} = require.main.exports(),
//     app = require('../'),
//     {score} = require('../score');

// let router = express.Router();
let router = app.router();
router.get('/', function(req, res,next) {
  // score.sql.query('SELECT * FROM ?? WHERE ip LIKE ? ORDER BY ip ASC',['visits','127.0.0.1']).then(raw=>{
  //   if (raw.length > 0) {
  //     console.log(raw);
  //   }
  // });
  res.render('home', { title: 'Hello World' });
});
module.exports = router;