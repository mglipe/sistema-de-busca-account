const conexao = require('../index')

class Buscar {


    buscarDados(email, password){
        const sql = `SELECT email, password FROM users WHERE email = ? AND password = ?`
        conexao.query(sql, [email, password], (err, result) =>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    }
}

module.exports = new Buscar