const mysql = require('mysql2/promise');
const { db } = require('config');

const connection = mysql.createConnection({
  host: db.host,
  database: db.name,
  user: db.user,
  password: db.pass,
});

function parseQuery(qu) {
  return Object.keys(qu)
    .map(key => `${key}="${qu[key]}"`)
    .join(' AND ');
}

async function findApi(table, where) {
  try {
    let queryString;
    if (!where) queryString = `SELECT * FROM ${table}`;
    else queryString = `SELECT * FROM ${table} WHERE ${parseQuery(where)}`;
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

module.exports = {
  connection,
  findApi,
  createApi,
  deleteApi,
};
