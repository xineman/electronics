const { dbms } = require('config');
const {
  findApi,
  createApi,
  deleteApi,
  getWishesApi,
} = dbms === 'mysql' ? require('../services/mysql') : require('../services/mongo');

class User {
  static find(where) {
    return findApi('users', where)
      .then(users => users.map(u => new User(u)))
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
    const { insertId: id } = await createApi('users', values);
    return new User({ ...values, id });
  }
  constructor(user) {
    Object.assign(this, { id: user._id }, user); // eslint-disable-line
  }
  async getWishes(filter) {
    let query = {
      userId: this.id.toString(),
    };
    if (filter && filter.id) {
      query = {
        ...query,
        productId: filter.id.toString(),
      };
    }
    const wishes = await getWishesApi(query);
    return wishes;
  }
  async addWish(id) {
    createApi('user_wishes', {
      productId: id,
      userId: this.id.toString(),
    });
  }
  async removeWish(id) {
    deleteApi('user_wishes', {
      productId: id,
      userId: this.id.toString(),
    });
  }
}

module.exports = User;
