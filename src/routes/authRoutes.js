const express = require('express');
const { register, login } = require('../controllers/authController');
const { validateRequest } = require('../middlewares/validateRequest');
const { createUserValidator, loginUserValidator } = require('../validators/userValidator');
const router = express.Router();

router.post('/register', createUserValidator, validateRequest, register);
router.post('/login', loginUserValidator, validateRequest, login);

module.exports = router;
