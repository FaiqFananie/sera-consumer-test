const { Pool } = require('pg')

class ProductsPostgresService {
  constructor () {
    this._pool = new Pool()
  }

  async getProducts () {
    const query = 'SELECT * FROM products'

    const result = await this._pool.query(query)
    return result.rows
  }
}

module.exports = ProductsPostgresService
