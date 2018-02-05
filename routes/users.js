const Router = require('express-promise-router');
const usersController = require('../controllers/users');

const router = new Router();

router.post('/signup', usersController.user_signup);
router.post('/signin', usersController.user_login);
module.exports = router;