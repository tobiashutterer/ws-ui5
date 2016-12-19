var WebSocketServer = require('ws').Server,
    os = require('os'),
    wss = new WebSocketServer({ port: 4000 });


wss.on('connection', function connection(ws) {
  console.log('client: %s', 'connected');
  ws.send('connected on container: ' + os.hostname());
//ws.send('container stats: ' + JSON.stringify(os.cpus(), null, 2));

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