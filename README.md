# FRONT

#### Install
```
cd front 
npm install
```
copy front/.env.example to front/.env

#### Run in development mode
```
npm run dev
```

# API
#### Install
```
cd api 
npm install
```

copy api/.env.example to api/.env

#### Run in development mode

```
npm run dev
```
#### Run in debug mode
```
npm run debug
```
#### Migrations
##### Create tables
```
nm run migrations:run
```
##### Rever Migrations

```
migrations:rever
```
##### New migrations
```
npm unmigrations:generate
```


### Docker Compose
You can use the `docker-compose.yml` file to run local database