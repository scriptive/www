# reference

...start/stop

```shell
sudo systemctl restart mysql.service
sudo systemctl restart mariadb.service
```

... installation

```shell
sudo apt update
sudo apt install mariadb-client mariadb-server
sudo systemctl status mariadb
sudo systemctl start mariadb
sudo systemctl stop mariadb
sudo systemctl restart mariadb
sudo systemctl enable mariadb

sudo mysql_secure_installation
```

...configuration

```shell
sudo mysql -u root -p
```

...create database

```sql
CREATE DATABASE myordbok;
CREATE DATABASE zaideih;
```

...show database

```sql
SHOW DATABASES;
```

...user

```sql
# show
SELECT user,host FROM mysql.user;

# create
CREATE USER 'user' IDENTIFIED BY '<password>';

# grant
GRANT ALL PRIVILEGES ON *.* to user@'<ip>.%';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'ip' IDENTIFIED BY 'password';

# flush
FLUSH PRIVILIGES;
```

...bind-address

```bash
sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf
#bind-address            = 0.0.0.0
```

...tmp

```sql
CREATE USER 'root' IDENTIFIED BY 'remote2SQL';
GRANT ALL PRIVILEGES ON *.* to root@'%';
GRANT USAGE ON *.* TO 'root'@'%' IDENTIFIED BY 'remote2SQL';

GRANT ALL PRIVILEGES ON *.* TO 'USERNAME'@'IP' IDENTIFIED BY 'PASSWORD';
FLUSH PRIVILIGES;

UPDATE mysql.user SET authentication_string = PASSWORD('remote2SQL') WHERE User = 'root' AND Host = '%';

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'my-new-password' WITH GRANT OPTION;
