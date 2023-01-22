# MyRecipes
## Introduction
MyRecipes is a recipe website which is used to create recipes, rate them and add them to a food planner.

This repository is the source for the application deployed at [MyRecipes](https://www.myrecipes.at).

## MOSCOW Requirements

### 1.2.1. Must-criteria
* **The user must be able to register, login, change password and remove the account**
* **The user must be able to view recipes.**
* **The system must be able to retrieve macronutrients and display them to the user.**
### 1.2.2. Should-criteria
* User should be able to create recipe and delete It.
* **User should be able to add recipes to food planner**
### 1.2.3. Could-criteria
* The user could adjust the recipe according to portions
* **The user could print a recipe**
* The user could rate a recipe
* **The user could add a recipe to a weekday in the food planner via autocompletion**
* **The user could delete a recipe from the weekday in the food planner**
### 1.2.4. Won’t-criteria
* **The user won't be able to leave comments**
* **The user won't be able to share recipes on third party social media sites**

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
