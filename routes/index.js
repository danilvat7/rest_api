const Router = require('express-promise-router');
const users = require('./users');

const router = new Router();
router.use('/users', users);
// router.get('*', (req, res) => {
//   console.log('there')
//   const error = new Error('Not found');
//   error.status = 404;
//   throw error;
// })
module.exports = router;