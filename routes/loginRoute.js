'use strict'

const { Router } = require('express')

// add session here
const session = require('../controllers/sessionCtrl')

const router = Router()

router.get('/login', session.render)
router.post('/login', session.login)

module.exports = router
