# Site

## clean

```shell
# copy default config
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/myordbok

# modify
sudo nano /etc/nginx/sites-available/myordbok
sudo nano /etc/nginx/sites-available/zaideih

# enable by linking
sudo ln -s /etc/nginx/sites-available/myordbok /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/zaideih /etc/nginx/sites-enabled/
```

## default

```conf
server {
    listen       80 default_server;
    # listen       [::]:80;
    server_name  _;
    # return 301 $scheme://$host$request_uri;

    # server_name   ~^(www\.)?(?<domain>.+)$;
    # server_name   ~^(www\.)?(?P<domain>\w+);
    # server_name   ~^(?<subdomain>\.)?(?P<domain>\w+);
    # root C:/server/$domain/static;
    # set $common_static "C:/server/www";
    set $common_static "/var/www/html";
    root $common_static;

    location / {
        # try_files $uri @node;
        # try_files index.html $uri/ @node;
        try_files $uri $uri/index.html =404;
    }
    error_page 403 404 /notfound.html;
    location = /notfound.html {
    }
    error_page   500 501 502 503 504  /maintain.html;
    location = /maintain.html {
    }
}
```

## var/www/example

```conf
upstream example {
    server localhost:8081;
}
server {
    listen 80;
    server_name example.*;
    return 301 $scheme://www.$host$request_uri;
}
server {
    if ($host = www.example.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot
    if ($host = example.com) {
        return 301 https://www.$host$request_uri;
    } # managed by Certbot
    listen 80;
    server_name example.com www.example.com;
    return 404; # managed by Certbot
}
server {
    listen 80;
    server_name example.zotune.* example.* www.example.*;
    root C:/server/example/static;
    set $common_static "C:/server/www";
    # root /var/www/example/static;
    # set $common_static "/var/www/html";

    access_log /var/log/nginx/access.example.log;
    access_log /var/log/nginx/access.myordbok.log;
    access_log /var/log/nginx/access.zaideih.log;

    location / {
        try_files $uri @node;
        access_log off;
        autoindex off;
        add_header Cache-Control "public";
    }
    location @node {
        if (-f $document_root/maintain) {
            return 503;
        }
        # proxy_pass http://localhost:8081;
        proxy_pass http://example;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_cache_bypass $http_upgrade;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout http_500 http_502 http_503 http_504;
        proxy_intercept_errors on;
        proxy_connect_timeout 1;
    }
    error_page 503 /maintain.html;
    location = /maintain.html {
      root $common_static;
    }
    error_page 403 404 /notfound.html;
    location = /notfound.html {
      root $common_static;
    }
    error_page   500 501 502 503 504  /underconstruction.html;
    location = /underconstruction.html {
      root $common_static;
    }
}
```
