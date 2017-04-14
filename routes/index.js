'use strict';

const { Router } = require('express');
const router = Router();


router.use(require('./loginRoute'));
router.use(require('./registerRoute'));
// router.use(require('./logoutRoute'));
// router.use(require('./likesRoute'));
// router.use(require('./homeRoute'));
// router.use(require('./profileRoute'));

router.use( (req, res, next) => {
  if( req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
})

// move other routes below here when working
// router.use(require('/logout'))

router.use(require('./homeRoute'));
router.use(require('./profileRoute'));
router.use(require('./logoutRoute'));
router.use(require('./likesRoute'));

module.exports = router
