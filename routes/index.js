const Router = require('express-promise-router');
const checkAuth = require('../middleware/check-auth');
const router = new Router();

const auth = require('./auth');
const users = require('./users');

router.use('/auth', auth);
router.use('/users', checkAuth, users);

module.exports = router;