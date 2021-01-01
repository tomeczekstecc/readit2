# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command




# SOURCE:
https://youtu.be/pXQtG-U8SQI

## tags
orm,typeorm, mysql, postgres, mongo, jasonwebtoken, authentication , next js, tailiwnd, docker

## curl
```sql
curl -v -X POST localhost:5000/api/auth/register -H 'Content-Type: application/json' -d '{"username":"Tomek", "email":"towm@tom1.pl","password":"dasdasdadasd"}'
```
## connect to docker
```sh
docker exec -it readit_db_1 bash
```

## cocnect mysql in docker
```sh
mysql -u root -p
```

## connect mysql outside a dockerz
```sh
docker exec -it readit_db_1 mysql -u root -p
```

## drop schemas - clear db
```sh
npm run typeorm schema:drop
```

## generate migrations
```sh
npm run typeorm migration:generate -- --name create-users-table
```

## run migrations
```sh
npm run typeorm migration:run
```