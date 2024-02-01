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

    let botonM4A1 = document.getElementById("boton-M4A1")
    botonM4A1.addEventListener('click',ataqueM4A1)

    let botonAK47 = document.getElementById("boton-AK47")
    botonAK47.addEventListener('click',ataqueAK47)

    let botonKAG6 = document.getElementById("boton-KAG6")
    botonKAG6.addEventListener('click',ataqueaKAG6)


    let botonReiniciar = document.getElementById("reiniciar-juego")
    botonReiniciar.addEventListener('click',reiniciarJuego)

}



function seccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
    sectionSeleccionarAtaque.style.display = 'flex' 
    let sectionSeleccionarMascota = document.getElementById("SELECCIONAR-MASCOTA")
    sectionSeleccionarMascota.style.display = 'none' 

    alert('SELECCIONASTE TU PERSONAJE :D')
    let inputVAL = document.getElementById("VAL")
    let inputZERO = document.getElementById("ZERO")
    let inputNACHO = document.getElementById("NACHO")
    //con spanMascotaJugador estamos llamando al id "mascota-jugado" para que con innHTML seleccionemos a lo que esta en el "span"
    //y luego poder cambier el nombre de la mascota que hallamos seleccionado y poner el nombre en el "Tu mascota "mascota-jugador" tiene 3 vidas"
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputVAL.checked){
         spanMascotaJugador.innerHTML="VAL "
    }else if(inputZERO.checked){
        spanMascotaJugador.innerHTML="ZERO "
    }else if(inputNACHO.checked){
        spanMascotaJugador.innerHTML="NACHO "
    }else{
        alert("NO HAS SELECCIONADO A TU MASCOTA :(")
        reiniciarJuego()}

        seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo(){
    let mascotaEnemiga=aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById("mascota-enemigo")
    if(mascotaEnemiga==1){
        spanMascotaEnemigo.innerHTML="VAL "
    }else if(mascotaEnemiga==2){
        spanMascotaEnemigo.innerHTML="ZERO "
    }else if(mascotaEnemiga==3){
        spanMascotaEnemigo.innerHTML="NACHO "
    }
    
}

    function ataqueM4A1(){
        ataqueJugador="M4A1"
        ataqueAleatorioEnemigo()
        }
    
    function ataqueAK47(){
        ataqueJugador="AK47"
        ataqueAleatorioEnemigo()
        }
    
    function ataqueaKAG6(){
        ataqueJugador="KAG6"
        ataqueAleatorioEnemigo()
    }

    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio=aleatorio(1,3)

        if(ataqueAleatorio == 1){
            ataqueEnemigo='M4A1'
        }else if(ataqueAleatorio == 2){
            ataqueEnemigo='AK47'
        }else {
            ataqueEnemigo='KAG6'
        }

        combatePartida()
    }

// con function crearMensaje() se se crea un mensaje en el cual diga por medio de 'p' con  el ataque de el jugador y de el enemigo let parrafo =document.createElement('p')
//al invocar a crearMennsaje despues de que el ataque aleatorio enemigo se ejecute y asi el usuario puede visalizar el ataque de el y el enemigo 
function crearMensaje(){
    
    let sectionMensajes = document.getElementById("resultado")
    sectionMensajes.innerHTML=combate

    // let parrafo =document.createElement('p')
    // parrafo.innerHTML=combate


    //con sectionMensajes.appendChild(parrafo) se le invica a el html que por ".appendChild" inserte un "parrafo" que sea creado en mokepon.js
    // sectionMensajes.appendChild(parrafo)


  
}
    //con la propiedad "disaible" el jugador al ganar o perder le desabilitamos los botones d epoderes y por ende tiene que reiniciar el juego



function GANASTE(){

    let sectionReiniciar = document.getElementById("REINICIAR")
    sectionReiniciar.style.display = 'block'

    //let sectionMensajes = document.getElementById("MENSAJES")

    let parrafo =document.getElementById("resultado")
    parrafo.innerHTML="🎆GANASTE✨🧨,REINICIA LA PAGINA"
    //sectionMensajes.appendChild(parrafo)

    let botonM4A1 = document.getElementById("boton-M4A1")
    botonM4A1.disabled = true

    let botonAK47 = document.getElementById("boton-AK47")
    botonAK47.disabled = true

    let botonKAG6 = document.getElementById("boton-KAG6")
    botonKAG6.disabled = true
}

    function PERDISTE(){

        let sectionReiniciar = document.getElementById("REINICIAR")
        sectionReiniciar.style.display = 'block'
        
        //let sectionMensajes = document.getElementById("MENSAJES")
    
        let parrafo =document.getElementById("resultado")
        parrafo.innerHTML="PERDISTE😕😔,REINICIA LA PAGINA"
        //sectionMensajes.appendChild(parrafo)

        let botonM4A1 = document.getElementById("boton-M4A1")
        botonM4A1.disabled = true
    
        let botonAK47 = document.getElementById("boton-AK47")
        botonAK47.disabled = true
    
        let botonKAG6 = document.getElementById("boton-KAG6")
        botonKAG6.disabled = true

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
}else if(ataqueJugador =="M4A1" && ataqueEnemigo =="KAG6"){
    combate="GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo
}else if(ataqueJugador =="AK47"&&ataqueEnemigo =="M4A1"){
    combate="GANASTE"
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo
}else if(ataqueJugador =="KAG6"&&ataqueEnemigo =="AK47"){
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