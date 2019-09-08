# www

`scriptive/evh` Server configuration... see `local.md` and `ssl.md`

Enviroment sample at `sample.evn` to `.env`

...common

```shell
node index
npm start
npm run nodemon
npm run forever
npm run pm2
```

## development

```shell
npm install nodemon -g
```

## production

...dependencies

```shell
npm install pm2 -g
npm install forever -g

# install all production dependencies
npm install --production
npm install --save https://github.com/scriptive/evh/tarball/master
```

> pm2

```shell
# enable PM2 to start at system boot
pm2 startup
pm2 save
pm2 update

# disable PM2 to start at system boot
pm2 unstartup systemd
```

...structure

```bash
.
├── .evn
├── .evn.sample
├── serve.js
├── index.js
├── README.md
├── bin
    └── host
├── app
    └── default
    └── *