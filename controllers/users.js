const usersService = require('../services/users');
exports.user_signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await usersService.signup(email, password);
        res.status(200).json(result);
    } catch (error) {
        throw error;
    }
}

exports.user_login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await usersService.signin(email, password);
        res.status(200).json(result);
    } catch (error) {
        throw error;
    }
}