function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min)
}
function eleccion (jugada){
    let resultado = ""
    if (jugada == 1){
        resultado = "🗿"
    }else if(jugada == 2) {
        resultado = "📄"
    }else if (jugada == 3){
        resultado ="✂" 
    }
    else{
        resultado="perdiste :("}

        return resultado
}



let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
while(triunfos < 3 && perdidas < 3 ){
     pc = aleatorio (1,3)
     jugador = prompt("elejir: 1 piedra, 2 papel , 3 tigera")
    
      alert("pc elige: " + eleccion(pc))
      alert("elegiste: " + eleccion(jugador))

        if(pc == jugador){
            alert("EMPATE 😐")
        }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        alert("GANASTE 😁")
        triunfos = triunfos + 1
        }else{
            alert("PERDISTE 😥")
            perdidas = perdidas + 1 
        }

}
alert("GANASTES " + triunfos + " veces. PERDISTES " + perdidas + " veces")

