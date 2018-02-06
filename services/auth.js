const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

module.exports = {
    signup: async (email, password) => {
        try {
            const data = await User.getByEmail(email);

            if (data.rows.length > 0) {
                const error = new Error('Mail exists');
                error.status = 409;
                throw error;
            } else {
                const hash = bcrypt.hashSync(password, 10);
                const {
                    rows
                } = await User.signup(email, hash);
                return {
                    message: "User created"
                }
            }
        } catch (error) {
            throw error;
        }
    },

    signin: async (email, password) => {
        try {

            const data = await User.getByEmail(email);
            if (data.rows.length > 0) {
                const hash = data.rows[0].password;
                const compHash = bcrypt.compareSync(password, hash);
                if (compHash) {
                    const token = jwt.sign({
                            email: data.rows[0].email,
                            userId: data.rows[0].id
                        },
                        process.env.JWT_KEY, {
                            expiresIn: "24h"
                        }
                    );
                    return {
                        message: "Auth successful!",
                        token
                    }
                } else {
                    const error = new Error('Incorrect password!');
                    error.status = 401;
                    throw error;
                }

            } else {
                const error = new Error('There is no such email!');
                error.status = 401;
                throw error;
            }
        } catch (error) {
            throw error;
        }
    }
}