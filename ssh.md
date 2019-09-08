# ssh

Remote connection

- Generate ssh key using

```shell
# windows client just use putty-keygen
ssh-keygen
```

- Copy the key.pub file contents, and append to ~/.ssh/authorized_keys file

```shell
sudo nano ~/.ssh/authorized_keys
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
