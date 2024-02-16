// INICIANDO EL SERVIDOR
const express = require("express")


const app = express()

app.get("/", (req,res) => {
res.send("HOLA XD")
})

app.listen(8080, ()=>{
    console.log("hola mundo");
    console.log("el servidor ya funciona :)");
})