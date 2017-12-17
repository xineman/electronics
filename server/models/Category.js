const { dbms } = require('config');
const {
  findApi,
  createApi,
} = dbms === 'mysql' ? require('../services/mysql') : require('../services/mongo');

class Category {
  static find(where) {
    return findApi('categories', where)
      .then(categories => categories.map(u => new Category(u)))
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
    const { insertId: id } = await createApi('categories', values);
    return new Category({ ...values, id });
  }
  constructor(category) {
    Object.assign(this, category);
  }
}

module.exports = Category;
