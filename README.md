# SWAPI Java Angular Wrapper

## About

This is an ongoing project to create a docker containers for an Open Feign SpringBoot API with an Angular frontend

## installation
Before installing this project, please ensure you have Docker, Java, and NPM

### Angular side installation

To install the Angular part of the project, you need to run the following commands

```bash
cd src/main/ui
npm install
```

### Java side installation

The first time the Java side of the application runs it will install all dependencies

## Running the Project

### Java side startup

To start the Java side of the project, run the following command in the root folder

```bash
./mvnw spring-boot:run
```

### Angular side startup

To start the Angular side of the project, run the following commands in the root folder

```bash
cd src/main/ui
npm start
```