const usersService = require('../services/users');
exports.getAll = async (req, res) => {
    try {
        const {
            rows
        } = await usersService.getAll();
        res.status(200).json(rows);
    } catch (error) {
        throw error;
    }
}