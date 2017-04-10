'use strict';

const { Router } = require('express');
const router = Router();


router.use(require('./loginRoute'));
// router.use(require('./registerRoute'));
// router.use(require('./logoutRoute'));
router.use(require('./likesRoute'));
router.use(require('./homeRoute'));
router.use(require('./profileRoute'));



module.exports = router
