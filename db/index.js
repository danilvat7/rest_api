const {
    Pool
} = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: process.env.PG_PW,
    database: 'usersdb'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}