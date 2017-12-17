const { MongoClient, ObjectID } = require('mongodb');
const {
  mongo: {
    user,
    pass,
    host,
    db,
  },
} = require('config');

const users = encodeURIComponent(user);
const password = encodeURIComponent(pass);

const connection = MongoClient.connect(`mongodb://${users}:${password}@${host}/?authSource=${db}`)
  .then(client => client.db(db));

async function findApi(table, where = {}) {
  try {
    if (where.id) {
      where._id = ObjectID.createFromHexString(where.id); // eslint-disable-line
      delete where.id;
    }
    const conn = await connection;
    const collection = conn.collection(table);
    const items = await collection.find(where).toArray();
    return items
      .map(i => ({ ...i, id: i._id })); // eslint-disable-line
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function getWishesApi(filters) {
  const conn = await connection;
  const collection = conn.collection('user_wishes');
  // const products = conn.collection('products');
  const items = await collection.find(filters).toArray();
  return items.map(i => ({ ...i, id: i.productId })); // eslint-disable-line
}

async function createApi(collection, data) {
  const res = await (await connection)
    .collection(collection)
    .insertOne(data);
  return { ...res, insertId: res.insertedId };
}

async function deleteApi(collection, data) {
  const res = await ((await connection)
    .collection(collection)
    .deleteMany(data));
  return { ...res, insertId: res.insertedId };
}

module.exports = {
  findApi,
  createApi,
  deleteApi,
  getWishesApi,
};
