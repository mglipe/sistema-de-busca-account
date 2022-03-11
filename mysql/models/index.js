const conexao = require('../index')

class Users{
    addUser(user){
        const sql = 'INSERT INTO users SET ?'
        conexao.query(sql, user, (err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    }
}

module.exports = new Users