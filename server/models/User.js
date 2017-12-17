const {
  findApi,
  createApi,
  deleteApi,
  connection,
} = require('../services/mysql');

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
    Object.assign(this, user);
  }
  async getWishes({ id }) {
    let queryString = `select products.* from products inner join user_wishes as wish on wish.productId = id where wish.userId = ${this.id}`;
    if (id) queryString += ` AND wish.productId = "${id}"`;
    const conn = await connection;
    const [wishes] = await conn.query(queryString);
    return wishes;
  }
  async addWish(id) {
    createApi('user_wishes', {
      productId: id,
      userId: this.id,
    });
  }
  async removeWish(id) {
    deleteApi('user_wishes', {
      productId: id,
      userId: this.id,
    });
  }
}

module.exports = User;
