'user strict';

const { Router } = require('express')

const { render } = require('../controllers/createCtrl.js')

const router = Router()

router.get('/createProfile', render);

module.exports = router
