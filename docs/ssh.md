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