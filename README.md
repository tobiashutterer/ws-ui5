ws-ui5
======
A simple dockerized websocket server and a corresponding webapp in SAP UI5

##For Development & Debugging
````bash
docker-compose up -d
````
##For hosting
````bash
docker-compose -f docker-compose.prod.yml up -d
````

Architecture
-----

![Architecture diagram](container_diagram.png)

* A Node.js (express) webapp as chat client
* A Node.js (ws) as chat backend server

Additional
-----

For testing purposes you can also use the chrome websocket client webapp
[Simple Websocket Client](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo)
Use [ws://localhost:4000](ws://localhost:4000) for the connection to the backend server container.