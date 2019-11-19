const app = require('../');
const routes = app.Router();

routes.get('/', (req, res) => {
  // res.send({
  //   name:app.Config.name,
  //   version:app.Config.version
  // });
  res.send(res.locals);
  // res.send({
  //   name:res.locals.appName,
  //   version:res.locals.appVersion
  // });
});

module.exports = routes;
