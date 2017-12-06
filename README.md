# iTunes SPA

Application consists three layers

* Front-End (React/Redux)
* Back-End (Express.js)
* Redis (Caching Layer)

## Getting Started

### Prerequisites

Make sure you have installed Docker before.

### Running The Application

In order to run application in development mode please follow these steps.

First of all we need to clone the application repository.

```
git clone git@github.com:metinata/itunes-spa.git
```

After clone the repository go to the application root.

```
cd itunes-spa
```

There is a docker-compose.yml file in the root directory that will create and run application layers into docker containers.

Enter following command and wait a while...

```
docker-compose up
```

Docker Compose will download the appropriate image files from docker-hub and build our custom images as we defined in .yml file.

After the process is completed we can see our application in web browser.

Open Chrome and go to 

```
http://localhost:8080
```

Once you build the images you are no longer need to use docker-compose up command again. 
When you need to re-run application after the build process just enter the "docker-compose start" command and start the containers. 

### Application Structure 

#### Front-End

Front-End application is in the app/src directory of project root.

![alt text](http://i63.tinypic.com/2dljg45.png)

- components folder is where the generic and dumb components are located in
- layout folder contains page layouts
- routes folder is one of the most important part of application. Actions, reducers and page component definitions are here.
- service folder is responsible for ajax requests to back-end api.
- store folder combines all reducers and creates application store.
- style folder contains simple style definitions. (Application uses Ant Design components and styles. for more information please visit the [Ant Design Web Page](https://ant.design/) )
- All route definitions were made in the index.js file which is in the front-end application root directory.

#### Back-End

Back-End application is the middleware of itunes api in the server directory

![alt text](http://i63.tinypic.com/2gwuq7o.png)

- caching folder is an express route middleware that caches api call requests to /api routes. When a request receives from client side express first looks at the redis cache whether this request received before or not.
- routes folder contains express route definitions and controllers
- service folder performs api requests to itunes api and cache them on redis.