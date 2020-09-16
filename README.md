# monorepo demo

## Getting started

Clone this repository then run:

```
$ yarn install
```

This project uses yarn workspaces, when run `yarn install` all dependencies will be installed.


## Building using Docker

Build the server:

```
docker build . -f server.dockerfile -t demo-monorepo-server
```

Build the front-end

```
docker build . -f webapp.dockerfile -t demo-monorepo-webapp
```

## Running docker containers

```sh
# server
docker run -p 3000:3000 demo-monorepo-webapp 

# front-end
docker run -p 5000:5000 demo-monorepo-webapp 
```