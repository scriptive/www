# www

`scriptive/evh` virtual server!

...see

- [Port](host.md#local) and [localhost](host.md#port)
- [SSL](ssl.md#enviroment) using **letsencrypt**
- Enviroment [.env](env.md#enviroment) configuration for [port](env.md#port), [virtual](env.md#virtual) and [SSL Certificate](env.md#ssl-certificate).
- Most used [command line](ssh.md#ssh)
- MySQL [Installation](mysql.md#installation)
- Storage: [gcsfuse](gcsfuse.md#gcsfuse)

## development

```shell
npm install nodemon -g
npm install forever -g
```

## production

...dependencies

```shell
npm install pm2 -g

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

...structure for directories, storage([bucket](gcsfuse.md#gcsfuse))

```bash
$ cd www

# copy
$ rsync -avP storage/media/ media
# backup (font-view,download)
$ rsync -avP media storage/media/

|~/www
└── scriptive
    ├── .evn
    ├── serve.js
    ├── static
    ├── README.md
    └── app(?)
        └── default
        └── *
└── storage (storage-bucket)
    └── music
        └── m
        └── z
        └── e
        └── f
        └── h
        └── ?
    └── media
        └── fonts
            └── restrict.json
            └── primary.json
            └── secondary.json
            └── external.json
        └── grammar
            └── partsofspeech.json
        └── store
        └── etc
    └── ?
└── media (copy of storage/media/)
    └── fonts
    └── grammar
    └── store
        └── track.json
    └── etc
└── tmp
    └── ?
└── backup
    └── ?
└── one
    └── *
└── two
    └── *


## Preparing

- [x] mysql
  - [ ] connection (local)
- [ ] node package
- [ ] storage API
  - [ ] connection (local)
- [ ] storage API

sudo apt-get install wget

wget https://github.com/scriptive/www/tarball/master
curl -O https://github.com/scriptive/www/tarball/master


curl -O https://github.com/scriptive/www/archive/master.tar.gz
wget https://github.com/scriptive/www/archive/master.tar.gz
tar -tf master.tar.gz

tar -zcvf master.tar.gz /var/path-?

tar -zxvf master.tar.gz
tar -xvf master.tar.gz
npm i @scriptive/evh
rsync -avP www-master/ /var/www/scriptive