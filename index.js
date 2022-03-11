const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const conexao = require('./mysql')
const Tabela = require('./mysql/tabelas')

const app = express();

const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("esta funcionando");
})

app.get('/cadastro', (req, res)=>{
    res.send('tela de cadastro funcionando')
})
const rotas = require ('./rotes');
app.use('/api', rotas)

app.use(express.static(__dirname + '/client') ); //conexao com a pasta client

conexao.connect(err=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected database!')
        Tabela.init(conexao)
        
        app.listen(port, ()=>{
            console.log(`server open on port ${port}`);
        })
        
    }
})



