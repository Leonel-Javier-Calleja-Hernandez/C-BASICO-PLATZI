function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener('click',seccionarMascotaJugador)

}



function seccionarMascotaJugador(){
    alert('SELECCIONASTE TU MASCOTA :D')
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    //con spanMascotaJugador estamos llamando al id "mascota-jugado" para que con innHTML seleccionemos a lo que esta en el "span"
    //y luego poder cambier el nombre de la mascota que hallamos seleccionado y poner el nombre en el "Tu mascota "mascota-jugador" tiene 3 vidas"
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
         spanMascotaJugador.innerHTML="Hipodoge "
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML="Capipepo "
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML="Ratigueya "
    }else{
        alert("NO HAS SELECCIONADO A TU MASCOTA :(")}

        seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById("mascota-enemigo")
    if(ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML="Hipodoge "
    }else if(ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML="Capipepo "
    }else if(ataqueAleatorio==3){
        spanMascotaEnemigo.innerHTML="Ratigueya "
    }
    
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load', iniciarJuego)

