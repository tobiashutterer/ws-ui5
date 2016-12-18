var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080 });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};

wss.on('connection', function connection(ws) {
  console.log('client: %s', 'connected');
  ws.send('connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    //sende die Nachricht NUR an den sendenden Client
    //ws.send('received:' + message);

    //sende die Nachricht an alle Client
    wss.clients.forEach(function each(client) {
      client.send('received from a client:' + message);
    });

  });
  ws.on('close', function close() {
    console.log('client: %s', 'disconnected');
  });
});