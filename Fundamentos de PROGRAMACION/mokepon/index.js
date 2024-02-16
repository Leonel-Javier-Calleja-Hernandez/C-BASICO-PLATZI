// INICIANDO EL SERVIDOR
const express = require("express")

class Jugador{
    constructor(id){
        this.id =id
    }

}
const app = express()


const jugadores = []
app.get("/unirse", (req,res) => {
    const id =`${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.send(id)
})

app.listen(8080, ()=>{
    console.log("hola mundo");
    console.log("el servidor ya funciona :)");
})