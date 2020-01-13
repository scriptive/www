# Permission

... directory permission

```shell
chown -R www-data:www-data /var/path-?
chown -R www-data:$USER /var/path-?
chown -R $USER:www-data *.log
```

```shell
sudo chown $(whoami) /etc/letsencrypt/live/ -R
sudo chown $(whoami) /etc/letsencrypt/archive/ -R
```

## read, wirte and execute

> Note that **r** is for read, **w** is for write, and **x** is for execute

```shell
# to add permissions
chmod +rwx filename

# to remove permissions
chmod -rwx directoryname

# to allow executable permissions
chmod +x filename

# to take out write and executable permissions
chmod -wx filename
