# MySQL

...start/stop

```shell
sudo systemctl restart mysql.service
sudo systemctl restart mariadb.service
```

## Installation

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

-- database character set and collation
ALTER DATABASE myordbok CHARACTER SET utf8 COLLATE utf8_general_ci;
ALTER DATABASE zaideih CHARACTER SET utf8 COLLATE utf8_general_ci;
-- table character set and collation
ALTER TABLE tablename CHARACTER SET utf8 COLLATE utf8_general_ci;

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
CREATE USER 'user' IDENTIFIED BY 'password';

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

...tmp(remote2SQL)

```sql
CREATE USER 'root' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* to root@'%';
GRANT USAGE ON *.* TO 'user'@'%' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON *.* TO 'user'@'IP' IDENTIFIED BY 'password';
FLUSH PRIVILIGES;

UPDATE mysql.user SET authentication_string = PASSWORD('password') WHERE User = 'root' AND Host = '%';

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

```sql
mysql -u root

SET PASSWORD FOR 'root'@'localhost' = PASSWORD('search');
UPDATE mysql.user SET plugin = '' WHERE user = 'root' AND host = 'localhost';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'root'@'localhost';
```