'use strict'

const { Router } = require('express')

// add session here
const user = require('../controllers/userCtrl')

const router = Router()

router.get('/register', user.render)
router.post('/register', user.create)

module.exports = router
