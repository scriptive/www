# Archive

## curl

```shell
# download
curl https://github.com/rep/name/archive/master.tar.gz -output master.tar.gz

# download & extract
curl -L https://github.com/rep/name/archive/master.tar.gz | tar zx

# download, extract then strip
curl -L https://github.com/rep/name/archive/master.tar.gz | tar zx --strip-components=1
```

## wget

```shell
# download
wget https://github.com/rep/name/archive/master.tar.gz
# extract
tar xf master.tar.gz --strip-components=1
```

## installation

```shell
# curl
sudo apt-get install curl software-properties-common

# wget
sudo apt-get install wget
```

additional | description
--- | --- | ---
-z | Compress archive using gzip program in Linux or Unix
-c | Create archive on Linux
-v | Verbose i.e display progress while creating archive
-f | Archive File name
-x | Extract files to the given archive


curl -L https://github.com/scriptive/zaideih/archive/master.tar.gz | tar zx --strip-components=1
curl -L https://github.com/scriptive/myordbok/archive/master.tar.gz | tar zx --strip-components=1