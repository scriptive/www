# ssh

## Setup remote

Generate ssh key using
> for windows client just use putty-keygen

```shell
ssh-keygen
```

...copy the key.pub file contents, and append to ~/.ssh/authorized_keys file

```shell
sudo nano ~/.ssh/authorized_keys
```

### help

... directory permission

```shell
chown -R www-data:www-data /var/path-?
chown -R $USER:$USER /var/path-?
```

... download

```shell
wget https://raw.githubusercontent.com/?/?
wget https://github.com/name/rep/archive/master.tar.gz
```

... sync

```shell
rsync -avP /var/path-src?/ /var/path-tar?
```

... archive

additional | description
--- | --- | ---
-z | Compress archive using gzip program in Linux or Unix
-c | Create archive on Linux
-v | Verbose i.e display progress while creating archive
-f | Archive File name
-x | Extract files to the given archive

```shell
# extract
tar -zcvf name.tar.gz /var/path-?
tar -zxvf name.tar.gz -C /tmp

# compress
tar -zcvf archive-name.tar.gz directory-name
```

## short-cut

> `./ssh.bat`

```bat
@echo off

title SSH
echo SSH Remote connection
pause

# ssh -i \path-to-rsa\[name] [user]@ip
ssh -i /path-to-rsa/[name] [user]@ip
```
