# Host

... [Readme](README.md)

## Port

> port kill

```console
sudo netstat -lpn | grep :8080
ps -ax | grep application name
sudo netstat -lnp | grep 8080
# tcp6       0      0 :::8080                 :::*                    LISTEN      9588/node
kill -9 9588
kill 9588
```

> Port bind

```shell
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
# sudo setcap cap_net_bind_service=+ep /usr/local/bin/node
```

> Port forward

```shell
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
```

## local

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