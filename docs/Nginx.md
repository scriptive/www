# NGINX

## cli

```shell
# test config
sudo nginx -t

## windows
start nginx

nginx -s stop
## fast shutdown

nginx -s quit
# ... graceful shutdown

nginx -s reload
# ... changing configuration, starting new worker processes
#     with a new configuration,
#     graceful shutdown of old worker processes

nginx -s reopen
# ... re-opening log files
```

### Restart

```shell
sudo systemctl restart nginx
sudo service nginx restart
```

### Reload

```shell
sudo systemctl reload nginx
```

## Installation

```shell
sudo apt update
sudo apt install nginx

# status
systemctl status nginx
