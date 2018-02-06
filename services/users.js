const User = require('../models/user');

module.exports = {
    getAll: async () => {
        try {
            const data = await User.getAll();
            return data;
        } catch (error) {
            throw error;
        }
    }
}