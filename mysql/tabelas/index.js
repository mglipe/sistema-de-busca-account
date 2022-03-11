class Tabela {
    init(conection){
        this.conection = conection
        console.log('creating tables')

        this.createTable()
    }

    createTable(){
        const sql = 'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(16))'
        this.conection.query(sql, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('table created with successfuly')
            }
        })
    }
}


module.exports = new Tabela
