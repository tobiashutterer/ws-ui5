"use strict";

var WebSocketServer = require('ws').Server,
  os = require('os'),
  wss = new WebSocketServer({
    port: 4000
  });


wss.broadcast = (data) => {
  for (var i in this.clients)
    this.clients[i].send(data);
  console.log('broadcasted: %s', data);
};

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received FLO: %s', message);
    wss.broadcast(message);
  });

  ws.send(JSON.stringify({
    user: 'Server: ',
    text: 'Welcome to my container ' + os.hostname()
  }));
});