const app = require('../');
const {fs,path} = app.Common;
const routes = app.Router();

routes.get('/', (req, res) => {
  res.send(res.locals);
});
routes.get('/test', async (req, res) => {
  // res.send({
  //   name:app.Config.name,
  //   version:app.Config.version
  // });
  // console.log(app.Config.media)
  var file = path.resolve(app.Config.media,'test/hits.json');
  var hits = { count:0};
  // fs.readFileSync(file, 'utf8')
  await fs.readJson(file).then(o=>Object.assign(hits,o)).catch(e=>console.log('reading',e)).finally(
    ()=>{
      // hits.count = hits.count + 1;
      hits.count = parseInt(hits.count) + 1;
      // fs.writeFileSync(file,JSON.stringify(tmp,null,2)).catch(e=>console.log('error writing',e));
      fs.writeFile(file, JSON.stringify(hits,null,2), (e) => {
        if (e) console.log('writing',e)

      });
    }
  );

  res.send(hits);
});

module.exports = routes;
