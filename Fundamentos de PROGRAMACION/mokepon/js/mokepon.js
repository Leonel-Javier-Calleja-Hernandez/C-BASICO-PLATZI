let ataqueJugador
let ataqueEnemigo
let combate
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
    sectionSeleccionarAtaque.style.display = 'none' 
    let sectionReiniciar = document.getElementById("REINICIAR")
    sectionReiniciar.style.display = 'none'


    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',seccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click',ataqueaTierra)


    let botonReiniciar = document.getElementById("reiniciar-juego")
    botonReiniciar.addEventListener('click',reiniciarJuego)

}



function seccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
    sectionSeleccionarAtaque.style.display = 'block' 
    let sectionSeleccionarMascota = document.getElementById("SELECCIONAR-MASCOTA")
    sectionSeleccionarMascota.style.display = 'none' 

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
        alert("NO HAS SELECCIONADO A TU MASCOTA :(")
        reiniciarJuego()}

        seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo(){
    let mascotaEnemiga=aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById("mascota-enemigo")
    if(mascotaEnemiga==1){
        spanMascotaEnemigo.innerHTML="Hipodoge "
    }else if(mascotaEnemiga==2){
        spanMascotaEnemigo.innerHTML="Capipepo "
    }else if(mascotaEnemiga==3){
        spanMascotaEnemigo.innerHTML="Ratigueya "
    }
    
}

    function ataqueFuego(){
        ataqueJugador="FUEGO"
        ataqueAleatorioEnemigo()
        }
    
    function ataqueAgua(){
        ataqueJugador="AGUA"
        ataqueAleatorioEnemigo()
        }
    
    function ataqueaTierra(){
        ataqueJugador="TIERRA"
        ataqueAleatorioEnemigo()
    }

    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio=aleatorio(1,3)

        if(ataqueAleatorio == 1){
            ataqueEnemigo='FUEGO'
        }else if(ataqueAleatorio == 2){
            ataqueEnemigo='AGUA'
        }else {
            ataqueEnemigo='TIERRA'
        }

        combatePartida()
    }

// con function crearMensaje() se se crea un mensaje en el cual diga por medio de 'p' con  el ataque de el jugador y de el enemigo let parrafo =document.createElement('p')
//al invocar a crearMennsaje despues de que el ataque aleatorio enemigo se ejecute y asi el usuario puede visalizar el ataque de el y el enemigo 
function crearMensaje(){
    let sectionMensajes = document.getElementById("MENSAJES")

    let parrafo =document.createElement('p')
    parrafo.innerHTML='Tu MASCOTA ataco con ' + ataqueJugador + ' las mascotas de el ENEMIGO ataco con ' + ataqueEnemigo + " " +combate


    //con sectionMensajes.appendChild(parrafo) se le invica a el html que por ".appendChild" inserte un "parrafo" que sea creado en mokepon.js
    sectionMensajes.appendChild(parrafo)


  
}
    //con la propiedad "disaible" el jugador al ganar o perder le desabilitamos los botones d epoderes y por ende tiene que reiniciar el juego



function GANASTE(){

    let sectionReiniciar = document.getElementById("REINICIAR")
    sectionReiniciar.style.display = 'block'

    let sectionMensajes = document.getElementById("MENSAJES")

    let parrafo =document.createElement('p')
    parrafo.innerHTML="🎆GANASTE✨🧨,REINICIA LA PAGINA"
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
}

    function PERDISTE(){

        let sectionReiniciar = document.getElementById("REINICIAR")
        sectionReiniciar.style.display = 'block'
        
        let sectionMensajes = document.getElementById("MENSAJES")
    
        let parrafo =document.createElement('p')
        parrafo.innerHTML="PERDISTE😕😔,REINICIA LA PAGINA"
        sectionMensajes.appendChild(parrafo)

        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true
    
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true
    
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled = true

}

    
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

//COMBATE
function combatePartida(){
let spanVidasJugador=document.getElementById("vidas-jugador")
let spanVidasEnemigo=document.getElementById("vidas-enemigo")
//se creo una cadena de if,ende if.. para que el usuario sepa si gano o perdio e incluso se greo una 
//let global para que se le muestre al usuario si gana o perde cuantas vidas le quedan en el juego
    if (ataqueJugador==ataqueEnemigo){
    combate="EMPATE"
}else if(ataqueJugador =="FUEGO" && ataqueEnemigo =="TIERRA"){
    combate="GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo
}else if(ataqueJugador =="AGUA"&&ataqueEnemigo =="FUEGO"){
    combate="GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo
}else if(ataqueJugador =="TIERRA"&&ataqueEnemigo =="AGUA"){
    combate="GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo
}else{
    combate="PERDISTE"
    vidasJugador--
    spanVidasJugador.innerHTML=vidasJugador
}
crearMensaje()
revisarVidas()

}
function revisarVidas(){
    if(vidasEnemigo==0){
       GANASTE()
    }else if(vidasJugador==0){
        PERDISTE()
    }
}

function reiniciarJuego(){
    //"location.reload()" recarga la pagina Actual 
    location.reload()
}



window.addEventListener('load', iniciarJuego)
