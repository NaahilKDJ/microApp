# microApp


#### Commande ayant permit de générer un container pour mysql

|   docker build -t microapp-mysql -f Dockerfile.mysql .    |   docker run -d  --name mysql-db  --network microapp-network  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD  -e MYSQL_DATABASE=$DB_NAME  -e MYSQL_USER=$DB_USER  -e MYSQL_PASSWORD=$DB_PASSWORD  -p 3306:3306 microapp-mysql    |
|   ----    |   -----   |


#### Commande ayant permit de générer un container pour nodeJS avec connexion a une base de donnée

|   docker build -t microapp-node -f Dockerfile.node .  |   docker run -d   --name node-app   --network microapp-network   -e DB_HOST=$DB_HOST   -e DB_USER=$DB_USER   -e DB_PASSWORD=$DB_PASSWORD   -e DB_NAME=$DB_NAME   microapp-node    |
|   ----    |   ----    |


