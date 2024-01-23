function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener('click',seccionarMascotaJugador)

}



function seccionarMascotaJugador(){
    alert('SELECCIONASTE TU MASCOTA :D')
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

    if (inputHipodoge.checked){
         alert("HAS SELECCIONADO A HIPODOGE")
    }else if(inputCapipepo.checked){
        alert("HAS SELECCIONADO A CAPIPEPO")
    }else if(inputRatigueya.checked){
    alert("HAS SELECCIONADO A RATIGUEYA")
    }else(alert("NO HAS SELECCIONADO A TU MASCOTA"))
}

window.addEventListener('load', iniciarJuego)

