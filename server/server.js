var WebSocketServer = require('ws').Server;
var os = require('os');
var kafka = require('kafka-node');

var client = new kafka.Client('192.168.86.100'),
  Producer = kafka.Producer;

var producer = new Producer(client);


Consumer = kafka.Consumer;
var consumer = new Consumer(client, [{
  topic: 'chatmsg'
}], {
  autoCommit: false

});

consumer.on('message', function (message) {
  console.log("consumer: " + JSON.stringify(message));
});

producer.on('ready', function () {

});

producer.on('error', function (err) {})



var wss = new WebSocketServer({
  port: 4000

});


producer.on('ready', function () {
  console.log('kafka producer is ready')
});

wss.broadcast = (data) => {
  for (var i in this.clients)
    this.clients[i].send(data);
  console.log('broadcasted: %s', data);
};

wss.on('connection', (ws) => {
  ws.on('message', (message) => {

    var messageobject = JSON.parse(message);
    //send message to Kafka
    payloads = [{
      topic: 'chatmsg',
      messages: messageobject.text
    }];

    producer.send(payloads, function (err, cbdata) {
      console.log("producer" + JSON.stringify(cbdata));
    });

    console.log('ws received: %s', message);
    //wss.broadcast(message);
  });


  ws.send(JSON.stringify({
    user: 'Server: ',
    text: 'Welcome to my container ' + os.hostname()
  }));
});