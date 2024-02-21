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
    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
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
    const nombre = req.body.mokepon || "fallo:("
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
  
    res.end()
})
// console.log(mokepon);
app.listen(8080, ()=>{
    console.log("hola mundo");
    console.log("el servidor ya funciona :)");
})