//Bibliotecas do projeto
const express = require("express");
const routers = require('./src/routers')

const app = express();
app.use(express.json()); //classe que permite a API receber objeto JSON
app.use(routers);

app.listen(3001, ()=>{
    console.log("Servidor está execultando na url:http://localhost:3001");
})