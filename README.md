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

#### Environment configuration

In order to setup the environment variables, copy or rename .env.example to .env and fill out with your own settings:

Generate your own app secret key and fill out the *Auth* section APP_SECRET variable.

**Note:** If using the container provided set *Database* section variables as follow:

> DB_HOST=localhost  
DB_USER=postgres  
DB_PASS=docker  
DB_NAME=gympoint

For mail functions, fill out the *Mail* section variables with your own setting

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

The default API URL is: [http://localhost:3333](http://localhost:3333)

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

Access the application using the following URL: [http://localhost:3000](http://localhost:3000)

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
