#!/bin/bash

if [ $(hostname) == 'myrecipes' ]
then
  export DBPASSWORD=$(ansible-vault view vault.yml --vault-password-file vault.key | grep mariadb_root_password | awk '{print $2}')
else
  export DBPASSWORD="example"
fi

sed -ie "s/MARIADB_ROOT_PASSWORD:\ example/MARIADB_ROOT_PASSWORD:\ $DBPASSWORD/g" docker-compose.yml
rm docker-compose.ymle

sed -ie "s/example/$DBPASSWORD/g" backend/models/users.js
rm backend/models/users.jse
sed -ie "s/example/$DBPASSWORD/g" backend/models/recipes.js
rm backend/models/recipes.jse
sed -ie "s/example/$DBPASSWORD/g" backend/models/categories.js
rm backend/models/categories.jse
sed -ie "s/example/$DBPASSWORD/g" backend/models/events.js
rm backend/models/events.jse

docker-compose up -d --build

sed -ie "s/MARIADB_ROOT_PASSWORD:\ $DBPASSWORD/MARIADB_ROOT_PASSWORD:\ example/g" docker-compose.yml
rm docker-compose.ymle

sed -ie "s/$DBPASSWORD/example/g" backend/models/users.js
rm backend/models/users.jse
sed -ie "s/$DBPASSWORD/example/g" backend/models/recipes.js
rm backend/models/recipes.jse
sed -ie "s/$DBPASSWORD/example/g" backend/models/categories.js
rm backend/models/categories.jse
sed -ie "s/$DBPASSWORD/example/g" backend/models/events.js
rm backend/models/events.jse

# load the data into the database
echo "Loading data into database..."
docker exec -i myrecipes-db mysql -uroot -p$DBPASSWORD < schema.sql
docker exec -i myrecipes-db mysql -uroot -p$DBPASSWORD < seed.sql
echo "Done"