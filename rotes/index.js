const express = require('express');
const router = express.Router();
const cadastro = require('./cadastro')
const login = require('./login')


router.use('/', cadastro);
router.use('/', login);

module.exports = router;

