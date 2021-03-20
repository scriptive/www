# rsync

remote sync

## Structure

```shell
# Local Sync
rsync {options} {Source} {Destination}

# Remote Sync pull
rsync {options} [User_Name]@[Remote-Host][Source-Files-Dir] {Destination}

# Remote Sync Push
rsync {options} [Source-Files-Dir] [User_Name]@[Remote-Host]:{Destination}
```

## Options

command | name | desc
---|---|---
-v | –verbose | Verbose output
-q | –quiet | suppress message output
-a | –archive | archive files and directory while synchronizing ( -a equal to following options -rlptgoD)
-r | –recursive | sync files and directories recursively
-b | –backup | take the backup during synchronization
-u | –update | don’t copy the files from source to destination if destination files are newer
-l | –links | copy symlinks as symlinks during the sync
-n | –dry-run | perform a trial run without synchronization
-e | –rsh=COMMAND | mention the remote shell to use in rsync
-z | –compress | compress file data during the transfer
-h | –human-readable | display the output numbers in a human-readable format
–progress | ? | show the sync progress during transfer

## test

```shell
rsync -avP /var/path-src?/ /var/path-tar?
```

## Media

```shell
rsync -avP /var/path-src?/ /var/path-tar?
rsync -avP /var/www/storage/media/ /var/www/media
rsync -avP /var/www/media/ /var/www/storage/media

rsync -avP /var/www/storage/media/store/ /var/www/media/store
