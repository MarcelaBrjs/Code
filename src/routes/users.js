const { Router } = require('express');
const router = Router()
const usersContoller = require('../controllers/users');

router.route('/').get(usersContoller.getUser);

module.exports = router;