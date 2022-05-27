const { Kafka } = require("kafkajs");

const clientId = process.env.KAFKA_CLIENT_ID || "cloud-fn";
const broker = process.env.KAFKA_BROKER_URL || "localhost:9092";
const topic = process.env.KAFKA_TOPIC || "book-recommendation";
const brokers = [broker];

const kafka = new Kafka({
  clientId,
  brokers,
  connectionTimeout: 3000,
  retry: {
    retries: 2,
  },
});
const producer = kafka.producer();

const produce = async (message) => {
  await producer.connect();

  await producer.send({
    topic,
    messages: [{ key: null, value: message }],
  });
};

module.exports = produce;
