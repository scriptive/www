/*
var {nav} = require('./');
nav()
var app = require('./');
app.nav()
*/
var app = require('./');

app.nav('navPage')
  .route({url: '/',route: 'home', text: 'Home'})

// app.nav('navFallback')
//   .route({url: '*',route: 'home', text: 'Fallback'})