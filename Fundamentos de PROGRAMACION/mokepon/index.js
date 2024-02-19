// INICIANDO EL SERVIDOR
// importamos a express con require("express")
const express = require("express")
// se cree una class QUE REPRESENTARA LA LISTA DE LOS JUGADORES
class Jugador{
    constructor(id){
        this.id =id
    }

}
// se invoco a express como si fuera una funtion
const app = express()

// SE CREO UNA CLASE QUE VA A REPRESENTAR A UNA LISTA DE JUGADORES QUE AL UNIRSE UN NUEVO JUGADOR SE VA LLENANDO LA LISTA
const jugadores = []
// con el get se le pide al servidor informacion osea el "id" buscandolo con el"/unirse"
app.get("/unirse", (req,res) => {
    // se genera un numero random que estre sera el identificador de el jugador que este ingrese a la direccion "localhost:8080/unirse" CON const id =`${Math.random()}`
    const id =`${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-origin", "*")

    res.send(id)
})
// con listen se inializa el servidor
app.listen(8080, ()=>{
    // en el terminal se muestra que se inicio el servidor
    console.log("hola mundo");
    console.log("el servidor ya funciona :)");
})