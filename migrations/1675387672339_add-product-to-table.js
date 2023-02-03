/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.sql('INSERT INTO products (id, name, qty, price, created_at, updated_at, is_delete) VALUES (\'product-123\', \'Macbook PRO 13\', \'1\', \'13000000\', \'2023-02-03 11:00:00\', \'2023-02-03 11:00:00\', \'false\');')
  pgm.sql('INSERT INTO products (id, name, qty, price, created_at, updated_at, is_delete) VALUES (\'product-124\', \'Macbook PRO 14\', \'1\', \'14000000\', \'2023-02-03 11:00:00\', \'2023-02-03 11:00:00\', \'false\');')
}

exports.down = pgm => {
  pgm.sql('DELETE FROM products WHERE 1=1;')
}
