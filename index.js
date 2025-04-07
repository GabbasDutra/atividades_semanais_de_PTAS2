const express = require("express");

const app = express();

//capturar campos enviados por POST
app.use(express . urlencoded({extended: true}))
app.use(express.json());

app.get("/",(req, res) =>
     {res.send("ta potente")
     }
    )

const VeiculosRoutes = require("./routes/VeicolosRoute.js");    
app.use ("/veiculos", VeiculosRoutes)

app.listen(8000, (err)=>{

    console.log("a batata ta rodando na porta 8000")
})