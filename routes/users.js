const Router = require('express-promise-router');
const usersController = require('../controllers/users');

const router = new Router();

router.get('/', usersController.getAll);

module.exports = router;