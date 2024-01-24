//function iniciarJuego se le creeo un let botonMascotaJugador el es lo mismo que "document.getElementById("boton-mascota")" 
//este sera el botos "SELECCIONAR" al invocar botonMascotaJugador con el "addEventListener"(espera la interaccion de le usuario) 
//el usuario al hacer "click" activa la funtion seccionarMascotaJugador


function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener('click',seccionarMascotaJugador)

}


//con funtion  seleccionarMascotasJugador es mostrar en forma de alert a los usuarios, que mascota an seleccionado  
function seccionarMascotaJugador(){
    alert('SELECCIONASTE TU MASCOTA :D')
    //se creo un let para cada boton para no ocupar tanto espacio en el if,else if... y haci que es sea mas organizado 
    //cada let duscara en el "document" (que en este caso es mokepon.html) y por el "getElementById("")" buscara cual Id se refiere
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
//con el if hemos hecho una cadena la cual dependiendo de cual fu la seleccion del usuario los trar la mascota que selecciono 
    if (inputHipodoge.checked){
         alert("HAS SELECCIONADO A HIPODOGE")
    }else if(inputCapipepo.checked){
        alert("HAS SELECCIONADO A CAPIPEPO")
    }else if(inputRatigueya.checked){
    alert("HAS SELECCIONADO A RATIGUEYA")
    }else(alert("NO HAS SELECCIONADO A TU MASCOTA :("))
}
//para que cuando <script src="./js/mokepon.js"></script> en el "html" esta de primera y como el html empiza a leer el codigo de arriba a bajo 
//por eso con "window.addEventListener('load', iniciarJuego)" hace que el .js espere hasta que "load"(cargue) el html y luego inicieJuego
window.addEventListener('load', iniciarJuego)