function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener('click',seccionarMascotaJugador)

}



function seccionarMascotaJugador(){
    alert('SELECCIONASTE TU MASCOTA :D')
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    //
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
         spanMascotaJugador.innerHTML="hipodoge "
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML="capipepo "
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML="ratigueya "
    }else(alert("NO HAS SELECCIONADO A TU MASCOTA :("))
}

window.addEventListener('load', iniciarJuego)

