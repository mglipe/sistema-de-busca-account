const express = require('express');
const router = express.Router();
const User = require('../mysql/models');



router.post('/cadastro',  (req, res)=>{
    const dadosUser = req.body
    User.addUser(dadosUser)
})





module.exports = router