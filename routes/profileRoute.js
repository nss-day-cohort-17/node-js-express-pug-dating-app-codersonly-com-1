'use strict';

const { Router } = require('express');

// add session here
const { render } = require('../controllers/profileCtrl');

const router = Router();

router.get('/profile', render);

module.exports = router;
