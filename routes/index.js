const Router = require('express-promise-router');
const users = require('./users');
const checkAuth = require('../middleware/check-auth');
const router = new Router();
router.use('/users', users);
router.get('/test', checkAuth, (reg,res)=>{ 

    res.status(200).json({
        message: 'Work!'
    })
});
// router.get('*', (req, res) => {
//   console.log('there')
//   const error = new Error('Not found');
//   error.status = 404;
//   throw error;
// })
module.exports = router;