const Router = require('express-promise-router');
const authController = require('../controllers/auth');

const router = new Router();

router.post('/signup', authController.authSignup);
router.post('/signin', authController.authSignin);

module.exports = router;