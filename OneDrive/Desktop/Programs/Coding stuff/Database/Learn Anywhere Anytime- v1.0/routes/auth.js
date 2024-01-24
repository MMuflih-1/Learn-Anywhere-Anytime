// this is for our routes (our html page. each page HAS to have a route) I moved it for orginization purposes

const express = require('express')

const router = express.Router();
const authController = require('../controllers/auth')

module.exports = router;

router.post('/register', authController.register )

// router for login
router.post('/login', authController.login);

// router for logout
router.get('/logout', authController.logout)





