const app = require('../');
const routes = app.Router();

routes.get('/', (req, res, next) => {
  res.render('home', { title: 'Maintaining' });
});

module.exports = routes;