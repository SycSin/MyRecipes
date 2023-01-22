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

### Automated deployment (Linux, OSX)
On Linux or OSX it is recommended to use the `deploy.sh` script in order to deploy the application and load the initial data into the database
This can be done with the following:
```shell
chmod u+x deploy.sh
./deploy.sh
```
When developing locally, it is recommended to use `http://localhost:3000` as the API via axios on the frontend.

## Manual deployment (Windows, OSX, Linux): 
### Creating the image
In order to create a Docker image the `Dockerfile` as well as the `docker-compose.yml` file are required.

The `Dockerfile` is a sequence of commands for the building process of the image and the `docker-compose.yml` file is required in order to deploy the application.

Issue the following command to build and deploy the application:
```shell
docker-compose up -d --build

```

### Loading the data into the database
```shell
docker exec -i myrecipes-db mysql -uroot -pexample < schema.sql
docker exec -i myrecipes-db mysql -uroot -pexample < seed.sql
````

### Preview
After deploying the application via Docker, you can preview the application via the following link:
> http://127.0.0.1:8080
