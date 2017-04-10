'use strict'

const { Router } = require('express')

// add session here
const { render } = require('../controllers/likesCtrl')

const router = Router()

router.get('/likes', render)

module.exports = router
