const { dbms } = require('config');
const {
  findApi,
  createApi,
} = dbms === 'mysql' ? require('../services/mysql') : require('../services/mongo');

class Product {
  static find(where, params) {
    return findApi('products', where, params)
      .then(users => users.map(u => new Product(u)))
      .then((u) => {
        switch (u.length) {
          case 0:
            return undefined;
          case 1:
            return u[0];
          default:
            return u;
        }
      });
  }
  static async create(values) {
    const { insertId: id } = await createApi('products', values);
    return new Product({ ...values, id });
  }
  constructor(user) {
    Object.assign(this, { id: user._id }, user); // eslint-disable-line
  }
}

module.exports = Product;
