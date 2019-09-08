# ssl

## development

```shell
#  windows10
choco install mkcert
mkcert zaideih.local "*.zaideih.local" myordbok.local localhost 127.0.0.1 ::1
```

## production

...see [Port bind](host.md#port-bind)

```shell
sudo apt-get install certbot

sudo certbot certonly --standalone
sudo certbot certonly --webroot

sudo chown $(whoami) /etc/letsencrypt/live/ -R
sudo chown $(whoami) /etc/letsencrypt/archive/ -R
```

## ssl renew

```shell
# certbot renew does not work when you manually issue certificates
sudo certbot renew --dry-run

# for manually issue certificates
sudo certbot renew --manual

# certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d 'lethil.me,*.lethil.me,zotune.com,*.zotune.com'

certbot certonly --server https://acme-v02.api.letsencrypt.org/directory -d "lethil.me,*.lethil.me,zotune.com,*.zotune.com" --manual --preferred-challenges dns-01

```

## testing http

```js
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(80);

const express = require('express');
var app = express()
  , server = require('http').createServer(app);

app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
});
server.listen(80);
```

## testing https

```js
const fs = require('fs');
const https = require('https');
const express = require('express');
var app = express()
  , server = require('http').createServer(app);

app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
});
server.listen(80);
const credentials = {
  key: fs.readFileSync('/etc/letsencrypt/live/lethil.me/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/lethil.me/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/lethil.me/chain.pem')
};
https.createServer(credentials, app).listen(443);

```

```js
const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');

const app = express();

app.use(express.static('/var/www/scriptive/static'));
app.get('/', (req, res) => {
  res.send('Hello HTTPS!')
})

http.createServer(app).listen(80, () => {
  console.log('Listening 80...')
})
const credentials = {
  key: fs.readFileSync('/etc/letsencrypt/live/lethil.me/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/lethil.me/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/lethil.me/fullchain.pem')
};
https.createServer(credentials, app).listen(443,() => {
  console.log('Listening 443...')
});
```
