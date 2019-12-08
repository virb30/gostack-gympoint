# Gostack Gympoint
Bootcamp Gostack Final Challenge - Gympoint

# Installation

### Clone repository

Clone this repository to your local repository

```git clone https://github.com/virb30/gostack-gympoint.git <project-name>```

### Setup database server/container

Build and Start the docker database container

With docker installed:
```
  # navigate to container directory
  cd container
  # build and start docker container
  docker-compose up -d --build
```

or

Install postgres and create a database named "gympoint"

### Install packages for each part of the application

Backend (Node.js)

``` 
  # navigate to backend directory
  cd backend
  # run yarn command
  yarn
```

Frontend (ReactJS)
 
``` 
  # navigate to frontend directory
  cd frontend
  # run yarn command
  yarn 
```

Mobile (React Native)

``` 
  # navigate to mobile directory
  cd mobile
  # run yarn command
  yarn
```

### Create database structure

All the commands below must be executed on backend directory

```
  # from project directory
  # navigate to backend directory
  cd backend
```

Run the migrations to create the correct database structure on "gympoint"

```
  # run migrations
  yarn sequelize db:migrate
```

### Create the admin

In order to create the admin user run:

```
  yarn sequelize db:seed:all
```

this will create a fake admin user with the credentials:

* email: admin@gympoint.com *
* password: 123456 *

### Run the applications

Backend (must be executed before frontend and mobile)

``` #  navigate to backend directory
    cd backend 
    # Run yarn dev command
    yarn dev
```

Note: Frontend and mobile applications are independent, but both depends on backend

#### Frontend

``` #  navigate to frontend directory
    cd frontend 
    # Run yarn start command
    yarn start
```

#### Mobile

**Note:** this application only works on Android

First of all, start android emulator

``` 
  #  navigate to mobile directory
  cd mobile 
  # Run yarn start command
  react-native run-android
```
