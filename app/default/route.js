const app = require('./');

app.Navigation('navAPI')
  .route({url: '/api',route: 'api', text: 'API'});

app.Navigation('navPage')
  .route({url: '/',route: 'home', text: 'Home'});

app.Navigation('navFallback')
  .route({url: '*',route: 'home', text: 'Fallback'});
