//Import da biblioteca para comunicar com o banco de dados
const mysql = require('mysql2');

//String para se conectar com o banco de dados
const conexao = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"admin",
    database:"senaisesi"
})

conexao.connect(function(erro){
    if (erro) {
        console.log("Falha ao conectar")
    }else{
        console.log("Conectado com sucesso")
    }
});

module.exports = conexao;