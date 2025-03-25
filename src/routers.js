const express = require('express');
const conexao = require('../db');
const routers = express.Router()

routers.get("/", (req, res) => {
    res.status(200).json({ msg: "API ESTÁ ONLINE" })
})

//Rota para cadastrar estudantes
routers.post("/cadastrar_professor", (req, res) => {
    const {id, nome, sobrenome, materia, escola, estado, cidade, pais} = req.body;

    try {
        conexao.query("INSERT INTO professores VALUES(?,?,?,?,?,?,?,?)",
            [id, nome, sobrenome, materia, escola, estado, cidade, pais], (erro) => {
                if (erro) {
                    res.send(erro)
                } else {
                    res.status(201).json({ msg: "Cadastrado com sucesso" })
                }
            }
        )
    }
    catch (error) {
        res.json(erro);
    }
});

routers.get("/listar_professor",(req,res)=>{

   
conexao.query("SELECT id, nome, sobrenome, materia, escola, estado, cidade, pais FROM professores",
        (erro,result)=>{
        if(erro){
        res.status(404).json(erro)
        }
        res.status(200).json(result)
        }
        )
})

module.exports = routers;