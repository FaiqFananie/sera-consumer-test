require('dotenv').config()
const amqp = require('amqplib')
const ProductsService = require('./ProductsPostgresService')
const MailSender = require('./MailSender')
const Listener = require('./Listener')

const init = async () => {
  const productsService = new ProductsService()
  const mailSender = new MailSender()
  const listener = new Listener(productsService, mailSender)

  const connection = await amqp.connect(process.env.RABBITMQ_SERVER)
  const channel = await connection.createChannel()

  await channel.assertQueue('export:products', {
    durable: true
  })

  channel.consume('export:products', listener.listen, { noAck: true })
}

init()
