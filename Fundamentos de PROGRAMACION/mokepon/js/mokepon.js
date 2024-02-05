const sectionSeleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
const sectionReiniciar = document.getElementById("REINICIAR")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonM4A1 = document.getElementById("boton-M4A1")
const botonAK47 = document.getElementById("boton-AK47")
const botonKAG6 = document.getElementById("boton-KAG6")
const botonReiniciar = document.getElementById("reiniciar-juego")

const sectionSeleccionarMascota = document.getElementById("SELECCIONAR-MASCOTA")
const inputVAL = document.getElementById("VAL")
const inputZERO = document.getElementById("ZERO")
const inputNACHO = document.getElementById("NACHO")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo=document.getElementById("mascota-enemigo")

const spanVidasJugador=document.getElementById("vidas-jugador")
const spanVidasEnemigo=document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataques-de-jugador")
const ataqueDelEnemigo = document.getElementById("ataques-de-Enemigo")
// arraus o arreglos
// tipo de variable en la que se pueden agregar valores de variables.
// [] => se van agregaran los valores
// let mokepones = []  
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let combate
let vidasEnemigo = 3
let vidasJugador = 3



// clase
class Mokepon{
    constructor(nombre, foto, vidas){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
        // this = esto mismo "EL.nombre es = a nombre"
    }

}

// Objetos
let VAL = new Mokepon('Val','css\imagenes\val1.png',5)
console.log(VAL)

let ZERO =new Mokepon('Zero','css\imagenes\zero2.png',5)

let NACHO = new Mokepon('Naclo','css\imagenes\nacho3.png',5)
// creamos un arreglo para los ataques en el que se puede cambiar el ataque por un emoji y el ID(nombre) de el ataque
// a este le agregamos a cada uno de nuestros personajes 5 ataques
VAL.ataques.push(
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'✂',id:'boton-AK47'},
)

ZERO.ataques.push(
    {nombre:'✂',id:'boton-AK47'},
    {nombre:'✂',id:'boton-AK47'},
    {nombre:'✂',id:'boton-AK47'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'📄',id:'boton-AK47'},
    
)

NACHO.ataques.push(
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'✂',id:'boton-AK47'},
)
//VAL.ataques.push se esta agregando un valor a un arreglo que en este caso es "ataques"


function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none' 
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click',seccionarMascotaJugador)
    
    botonM4A1.addEventListener('click',ataqueM4A1)    
    botonAK47.addEventListener('click',ataqueAK47)
    botonKAG6.addEventListener('click',ataqueaKAG6)



    botonReiniciar.addEventListener('click',reiniciarJuego)
}



function seccionarMascotaJugador(){
    
    sectionSeleccionarAtaque.style.display = 'flex' 
    
    sectionSeleccionarMascota.style.display = 'none' 

    alert('SELECCIONASTE TU PERSONAJE :D')
    

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
    // "resultado"
    
    sectionMensajes.innerHTML=combate
    // "ataque-de-jugador"
    
    let nuevoAtaqueDelJugador = document.createElement('p')

    nuevoAtaqueDelJugador.innerHTML = ataqueJugador

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    //ataque-de-enemigo
    
    let nuevoAtaqueDelEnemigor = document.createElement('p')

    nuevoAtaqueDelEnemigor.innerHTML = ataqueEnemigo

    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigor)
}



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