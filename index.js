const mqtt = require('mqtt');

// Set the MQTT broker address and port
const brokerUrl = 'mqtt://localhost:1883'; // Update with your Mosquitto broker address

// Connect to the MQTT broker
const client = mqtt.connect(brokerUrl);

// Event handlers
client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Subscribe to a topic
  client.subscribe('example/topic');

  // Publish a message after subscribing
  client.publish('example/topic', 'Hello, MQTT from Node.js!');
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

// Handle errors
client.on('error', (err) => {
  console.error(`Error: ${err}`);
});

// Handle close event
client.on('close', () => {
  console.log('Connection to MQTT broker closed');
});
