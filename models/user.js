const db = require('../db');

const queriesText = {
    getByEmail: 'SELECT * FROM users WHERE email = $1',
    insertUser: 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *',
    getList: 'SELECT * FROM users'
}

module.exports = {
    getByEmail: async (...values) => {
        const query = {
            text: queriesText.getByEmail,
            values: values
        }
        try {
            const data = await db.query(query);
            return data;
        } catch (error) {
            throw error;
        }

    },
    signup: async (...values) => {
        const query = {
            text: queriesText.insertUser,
            values: values
        }
        try {
            const data = await db.query(query);
            return data;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        const query = {
            text: queriesText.getList,
        }
        try {
            const data = await db.query(query);
            return data;
        } catch (error) {
            throw error;
        }
    }
}