const authService = require('../services/auth');
exports.authSignup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.signup(email, password);
        res.status(200).json(result);
    } catch (error) {
        throw error;
    }
}

exports.authSignin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.signin(email, password);
        res.status(200).json(result);
    } catch (error) {
        throw error;
    }
}
