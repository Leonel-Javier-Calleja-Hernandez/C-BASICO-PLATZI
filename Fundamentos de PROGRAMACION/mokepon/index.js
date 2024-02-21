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
        this.mokepon =mokepon
    }
    actualizarPosicion(x, y){
        this.x = x
        this.y = y
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
    //const jugadorId ESTA selecionando la variable :jugadorId de la url
    const jugadorId = req.params.jugadorId || ""
    // const nombre Esta seleccionado el odjeto JSON que se creo en mokepon.js en la function seleccionarMokepon(mascotaJugador) mokepon es igual la "mascotaJugador" que elegie el usuario
    const nombre = req.body.mokepon || "fallo:("
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if (jugadorIndex >= 0){
        // JUGADOR EN LA LISTA
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    //console.log(jugadores)= muestra en la terminal el id y mokepon de usuario
    console.log(jugadores)
    // el id de usuario
    console.log(jugadorId)
  
    res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }
// se responde un dato vacio con res.end()
    res.end()
})
app.listen(8080, ()=>{
    console.log("hola mundo");
    console.log("el servidor ya funciona :)");
})