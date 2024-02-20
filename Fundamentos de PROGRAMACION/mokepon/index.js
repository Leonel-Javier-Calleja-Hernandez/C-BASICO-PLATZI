// INICIANDO EL SERVIDOR BACKEND
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())


const jugadores = []

class Jugador{
    constructor(id){
        this.id =id
    }

}

app.get("/unirse", (req,res) => {
    const id =`${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    // la línea de código que has proporcionado establece el encabezado "Access-Control-Allow-Origin" en la respuesta del servidor para permitir el acceso a los recursos desde cualquier origen.
    res.setHeader("Access-Control-Allow-origin", "*")

    res.send(id)
}) 

app.post("/mokepon/:jugadorId",(req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.listen(8080, ()=>{
    console.log("hola mundo");
    console.log("el servidor ya funciona :)");
})