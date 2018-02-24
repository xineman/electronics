const mysql = require('mysql2/promise');
const { mysql: config } = require('config');

const connection = mysql.createConnection(config);

function parseQuery(qu) {
  return Object.keys(qu)
    .map(key => `${key}="${qu[key]}"`)
    .join(' AND ');
}

async function findApi(table, where, params) {
  try {
    let queryString;
    if (!where) queryString = `SELECT * FROM ${table}`;
    else queryString = `SELECT * FROM ${table} WHERE ${parseQuery(where)}`;
    if (params) {
      if (params.sort) {
        queryString += ` ORDER BY ${table}.price ${params.sort}`;
      }
      if (params.count) {
        queryString += ` limit ${params.count}`;
      }
    }
    const conn = await connection;
    const [items] = await conn.query(queryString);
    return items;
  } catch (e) {
    console.error(e);
    return e;
  }
}

async function createApi(table, data) {
  try {
    const queryString = `INSERT INTO ${table}(${Object.keys(data)
      .concat('createdAt', 'updatedAt')
      .join(', ')
    }) VALUES (${Object.values(data)
      .map(v => `"${v}"`)
      .concat('NOW()', 'NOW()')
      .join(', ')})`;
    const conn = await connection;
    const [res] = await conn.query(queryString);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
}

async function deleteApi(table, data) {
  try {
    const queryString = `DELETE FROM ${table} WHERE ${parseQuery(data)}`;
    const conn = await connection;
    const [res] = await conn.query(queryString);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
}

async function getWishesApi(filters) {
  let where = {
    'wish.userId': filters.userId,
  };
  if (filters && filters.productId) {
    where = {
      ...where,
      'wish.productId': filters.productId,
    };
  }
  const queryString = `select products.* from products inner join user_wishes as wish on wish.productId = id where ${parseQuery(where)}`;
  const conn = await connection;
  const [wishes] = await conn.query(queryString);
  return wishes;
}

module.exports = {
  connection,
  findApi,
  createApi,
  deleteApi,
  getWishesApi,
};
