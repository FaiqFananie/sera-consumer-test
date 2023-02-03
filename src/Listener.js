class Listener {
  constructor (productsService, mailSender) {
    this._productsService = productsService
    this._mailSender = mailSender

    this.listen = this.listen.bind(this)
  }

  async listen (message) {
    try {
      const targetEmail = JSON.parse(message.content.toString())
      const products = await this._productsService.getProducts()
      const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(products))
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Listener
