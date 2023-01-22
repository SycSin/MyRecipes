# MyRecipes
## Introduction
MyRecipes is a recipe website which is used to create recipes, rate them and add them to a food planner.

This repository is the source for the application deployed at [MyRecipes](https://www.myrecipes.at).

## MOSCOW Requirements


## Installation
Our application is built to run via Docker on any environment.

### Requirements
* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

### Creating the image
In order to create a Docker image the `Dockerfile` as well as the `docker-compose.yml` file are required.

The `Dockerfile` is a sequence of commands for the building process of the image and the `docker-compose.yml` file is required in order to deploy the application.

Issue the following command to build and deploy the application:
```shell
docker-compose up -d --build
```

### Preview
After deploying the application via Docker, you can preview the application via the following link:
> http://127.0.0.1:8080

## Deployments
This section is only required in case the live-update does not work as expected.

### Development
When developing please issue the following command to build the image:
```shell
docker exec -t myrecipes-frontend npm run serve
```
The `serve` command is used for live-updates of the code on the webpage.

### Production
Live updates are not recommended in productive environments, therefore it is best-practise to build the application with the following command:
```shell
docker exec -t myrecipes-frontend npm run build
```
