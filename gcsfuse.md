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
$ gcsfuse -o rw --key-file=/home/<username>/gsaks.json storage.lethil.me /var/www/storage
...
$ fusermount -u /var/www/storage
```

```shell
export GCSFUSE_REPO=gcsfuse-`lsb_release -c -s`
echo "deb http://packages.cloud.google.com/apt $GCSFUSE_REPO main" | sudo tee /etc/apt/sources.list.d/gcsfuse.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt-get update
sudo apt-get install gcsfuse
```

## Credentials

```shell
nano ~/.profile
nano /etc/profile
export GOOGLE_APPLICATION_CREDENTIALS="/home/<username>/gsaks.json"
echo $GOOGLE_APPLICATION_CREDENTIALS
```