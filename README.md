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

Install postgres on localhost using port 5432 and create a database named "gympoint"


### Setting up the Backend

All the commands below must be executed on backend directory

```
  # from project directory
  # navigate to backend directory
  cd backend
```

#### Install dependencies

Install/upgrade project dependencies:

``` 
  # run yarn command
  yarn
```

#### Create database strucure

Run the migrations to create the correct database structure on "gympoint"

```
  # run migrations
  yarn sequelize db:migrate
```

#### Create the admin user

In order to create the admin user run:

```
  yarn sequelize db:seed:all
```

it will create a fake admin user with the credentials:

> ***email:** admin@gympoint.com*  
***password:** 123456*


**Note:** these credentials must be used to signin on frontend application

#### Start the Server

**Note:** Frontend and mobile applications depends on backend to be running

``` 
    # Run yarn dev command
    yarn dev
```

### Setting up Frontend Application (ReactJS)

All the commands below must be executed on frontend directory

```
  # from project directory
  # navigate to frontend directory
  cd frontend
```

#### Install dependencies

Install/upgrade project dependencies:

``` 
  # run yarn command
  yarn
```

#### Start the application

``` 
    # Run yarn start command
    yarn start
```

### Setting up Mobile Application (React Native)

All the commands below must be executed on mobile directory

```
  # from project directory
  # navigate to mobile directory
  cd mobile
```

#### Install dependencies

Install/upgrade project dependencies:

``` 
  # run yarn command
  yarn
```

#### Start the application

**Note:** this application only works on ***Android***

First of all, start android emulator then run:

``` 
  # Run yarn start command
  react-native run-android
```
