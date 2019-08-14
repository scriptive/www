# Local



```shell
127.0.0.1   localhost
127.0.1.1   lethil
127.0.1.1   sql.local #phpMyAdmin
127.0.1.1   myordbok.local
127.0.1.1   lethil.local
127.0.1.1   zaideih.local
127.0.1.1   test.lethil.local
127.0.1.1   myordbok.lethil.local
127.0.1.1   zaideih.lethil.local
```
## .env

```



```
## Edit

```shell
sudo nano /etc/hosts/
sudo -i gedit /etc/hosts

```

## devDependencies `-D, --save-dev`

```shell
# npm i express-generator -g
# npm i @angular/cli  -g

# NOTE: keep the server up and running while editing
# npm i -g nodemon
# nodemon serve
```

## Production `-D, --production`

```shell
npm install
# NOTE: pm2 keep the server up and running even on rebooting
# npm i pm2 -g
# pm2 start --name app npm -- start
# pm2 start npm -- start  --watch

# pm2 start app.js --name="api"
# pm2 start app.js --watch

# sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u khensolomon --hp /home/khensolomon/server
```


## Github

```shell

```

## Express

```shell
# express --view=pug e
# express --view=pug --css=sass --git e
# # test
# DEBUG=myapp:* npm start
# npm install --save dotenv
```

## Angular

```shell
npm install -g @angular/cli

# New Project
ng new ABC
# custom style (sass, scss, css)
--style=scss
# without package
--skip-install

--directory
--prefix
--routing

# Serve
ng serve
--prod

# Build
ng build
--prod
--output-hashing none
--build-optimizer false
```

### Note

- config
      c4539cd51f5b152d526919530ad1f54ae2812e1b
      34459e42d2e4544548fbe376465d112c

- structure
      .
      ├── bin
          └── host
      ├── app
          └── default
          └── *
      ├── .evn
      ├── .evn.sample
      ├── serve.js
      ├── main.js
      ├── README.md

- Port kill
      sudo netstat -lpn | grep :8080
      ps -ax | grep application name
      sudo netstat -lnp | grep 8080
      # tcp6       0      0 :::8080                 :::*                    LISTEN      9588/node
      kill -9 9588
      kill 9588

- Port bind
      sudo apt-get install libcap2-bin
      sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``

- Port forward
      sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080

- Port forward
      sudo service apache2 stop
      sudo apachectl stop


### Delete

```shell
ng new angular --style=scss --skip-install
ng serve --base-href ./app/angular/

ng serve --serve-path=./app/angular/
cd app/angular
ng serve
```
