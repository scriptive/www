# ssl

## development

```shell
#  windows10
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
choco install mkcert
mkcert zaideih.local "*.zaideih.local" myordbok.local *.myordbok.local lethil.local *.lethil.local localhost 127.0.0.1 ::1


openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes -days 365 -subj '/CN=localhost'


openssl req -x509 -nodes -days 730 -newkey rsa:2048 -keyout cert.key -out cert.pem -config req.txt -sha256

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem -config req.txt -sha256

```

> req.txt

```shell
[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
prompt = no
[req_distinguished_name]
C = US
ST = VA
L = SomeCity
O = MyCompany
OU = MyDivision
CN = lethil.local
[v3_req]
keyUsage = critical, digitalSignature, keyAgreement
extendedKeyUsage = serverAuth
subjectAltName = @alt_names
[alt_names]
DNS.1 = lethil.local
DNS.2 = zaideih.local
DNS.3 = myordbok.local

```

## production

... see [Port bind](host.md#port-bind)

### certbot

```shell
sudo apt-get install certbot
```

### new Certificate

```shell
sudo certbot certonly --standalone
sudo certbot certonly --webroot
```

### Certificate directory

```shell
sudo chown $(whoami) /etc/letsencrypt/live/ -R
sudo chown $(whoami) /etc/letsencrypt/archive/ -R
```

### Certificate renew

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
