const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(req,res){
    console.log("teste");
    res.send("Bem vindo ao inferno")
})
app.get("/jogos/:Jogo", function(req,res){
    console.log("jogos :" + req.params.Jogo);
    var Jogo = req.params.Jogo;
    if (Jogo == "Hanoi"){
        res.sendFile(__dirname + "/Hanoi.html");
    }
    else if (Jogo == "Roca"){
        res.sendFile(__dirname + "/public/Roca.html");
    }
})

app.listen(27015,function(erro){
    if (erro){
        console.log("Serjão sujô")
    }
    else console.log("Aê Cassinão")
})