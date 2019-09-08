# Enviroment

`.env`

## port

80 is default

```shell
port=80
```

## virtual

... listen all requests

```shell
virtual={"../example-directory":"*"}
```

... listen only matches

```shell
virtual={"../one-directory":"one.com","../two-directory":"two.*"}
virtual={"../one-directory":"one.com","../example-directory":"example.com","./none-directory":"*.*"}
```

... listen matches with default

```shell
virtual={"../one-directory":"one.*","../two-directory":"*.two.com","../example-directory":"*"}
virtual={"../one-directory":"one.com,one.org","../two-directory":"*.two.com","../example-directory":"example.com,*"}

```

## ssl-certificate, [letsencrypt](ssl.md#production)

```shell
certificate={"key":"/etc/letsencrypt/live/path-to/privkey.pem","cert":"/etc/letsencrypt/live/path-to/cert.pem","ca":"/etc/letsencrypt/live/path-to/fullchain.pem"}
```

... local, [mkcert](ssl.md#production)

```shell
certificate={"key":"secure/server-key.pem","cert":"secure/server-cert.pem"}
```
