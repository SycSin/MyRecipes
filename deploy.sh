#!/bin/bash

export DBPASSWORD=$(ansible-vault view vault.yml --vault-password-file vault.key | grep mariadb_root_password | awk '{print $2}')
sed -ie "s/MARIADB_ROOT_PASSWORD:\ example/MARIADB_ROOT_PASSWORD:\ $DBPASSWORD/g" docker-compose.yml
rm docker-compose.ymle
docker-compose up -d --build
sed -ie "s/MARIADB_ROOT_PASSWORD:\ $DBPASSWORD/MARIADB_ROOT_PASSWORD:\ example/g" docker-compose.yml
rm docker-compose.ymle
