'use strict'

const { Router } = require('express')

// add session here
const { render } = require('../controllers/homeCtrl')

const router = Router()

router.get('/home', render)

module.exports = router
