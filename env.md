# Enviroment

Note: In `.env` file each configuration should be inline.

## port

> port=80

```shell
80
```

## virtual

> virtual={}

... listen all requests

```json
{
  "../example-directory":"*"
}
```

... listen only matches

```json
{
  "../one-directory":"one.com",
  "../example-directory":"example.com",
  "./none-directory":"*.*"
}
```

... listen matches with default

```json
{
  "../one-directory":"one.*",
  "../two-directory":"*.two.com",
  "../example-directory":"*"
}
```

## ssl-certificate

> certificate={}

... [letsencrypt](ssl.md#production)

```json
{
  "key":"/etc/letsencrypt/live/path-to/privkey.pem",
  "cert":"/etc/letsencrypt/live/path-to/cert.pem",
  "ca":"/etc/letsencrypt/live/path-to/fullchain.pem"
}
```

... local [mkcert](ssl.md#production)

```json
{
  "key":"secure/server-key.pem",
  "cert":"secure/server-cert.pem"
}
```
