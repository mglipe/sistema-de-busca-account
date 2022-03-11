const express = require('express');
const router = express.Router();
const Busca = require('../mysql/models/buscarDado.js')



router.post('/login', async (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    const authenticate = await Busca.buscarDados(email, password)

    if(authenticate > 0){
        res.redirect("/logado")
    }else{
      res.send({message: "wrong user/password combination!"})
    }
    
})


module.exports = router;