const { MongoClient } = require('mongodb');
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
    const conn = await connection;
    const collection = conn.collection(table);
    const items = await collection.find(where).toArray();
    return items;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function getWishesApi(filters) {
  const conn = await connection;
  const collection = conn.collection('wishes');
  const products = conn.collection('products');
  const items = await collection.find(filters).toArray();
  items.map(async (i) => {
    const p = await products.findOne({ id: i.productId });
    return p;
  });
  return items;
}

async function createApi(collection, data) {
  const res = await (await connection)
    .collection(collection)
    .insertOne(data);
  return { ...res, insertId: res.insertedId };
}

module.exports = {
  findApi,
  createApi,
  getWishesApi,
};
