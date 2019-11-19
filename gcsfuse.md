# gcsfuse

Mount with read/write permission using *service account keys*.

...get it from  **IAM & Admin** -> **Service accounts**.

> gsaks: **google service account keys**

```shell
$ gcsfuse -o rw,allow_other --key-file=/home/<username>/gsaks.json bucket /path/to
...
$ gcsfuse -o rw,allow_other --key-file=/home/<username>/gsaks.p12 bucket /path/to
...
$ gcsfuse bucket storage/
...
$ fusermount -u /path/to
...
$ gcsfuse -o rw,allow_other --key-file=/home/<username>/gsaks.json storage.lethil.me /var/www/storage
...
$ fusermount -u /var/www/storage
```
