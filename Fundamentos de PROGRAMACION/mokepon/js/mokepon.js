const sectionSeleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
const sectionReiniciar = document.getElementById("REINICIAR")
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonReiniciar = document.getElementById("reiniciar-juego")

const sectionSeleccionarMascota = document.getElementById("SELECCIONAR-MASCOTA")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo=document.getElementById("mascota-enemigo")

const spanVidasJugador=document.getElementById("vidas-jugador")
const spanVidasEnemigo=document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataques-de-jugador")
const ataqueDelEnemigo = document.getElementById("ataques-de-Enemigo")
const contenedorTargetas= document.getElementById('contenedorTargetas')
const contenedorAtaques= document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo =[]
let opcionDeMokepones
// las modifique ya que antes eran const y por que como al leer el codigo no reconose los valores ya que aun no an sido creados y los puse dentro de "mokepones.forEach" ya que hay se estan creando
let inputVAL
let inputZERO
let inputNACHO
let mascotasJugador
// "let ataquesMokepon" nombre de el ataque de la mascota
let ataquesMokepon
let ataquesMokeponEnemigo
let botonM4A1 
let botonAK47
let botonKAG6
let botones =[]


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
let VAL = new Mokepon('Val',"css/imagenes/val1.png",5)
// par colocar la url de img se se utilizan "/" ya que en el html es diferente per se utiliza es esta 

let ZERO =new Mokepon('Zero','css/imagenes/zero2.png',5)

let NACHO = new Mokepon('Nacho','css/imagenes/nacho3.png',5)
 
VAL.ataques.push(
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'📄',id:'boton-AK47',imagenAtaque:'css/imagenes/ak47.png'},
    {nombre:'✂',id:'boton-KAG6',imagenAtaque:'css/imagenes/kag6.png'},
)

ZERO.ataques.push(
    {nombre:'✂',id:'boton-KAG6',imagenAtaque:'css/imagenes/kag6.png'},
    {nombre:'✂',id:'boton-KAG6',imagenAtaque:'css/imagenes/kag6.png'},
    {nombre:'✂',id:'boton-KAG6',imagenAtaque:'css/imagenes/kag6.png'},
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'📄',id:'boton-AK47',imagenAtaque:'css/imagenes/ak47.png'},
    
)

NACHO.ataques.push(
    {nombre:'📄',id:'boton-AK47',imagenAtaque:'css/imagenes/ak47.png'},
    {nombre:'📄',id:'boton-AK47',imagenAtaque:'css/imagenes/ak47.png'},
    {nombre:'📄',id:'boton-AK47',imagenAtaque:'css/imagenes/ak47.png'},
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'✂',id:'boton-KAG6',imagenAtaque:'css/imagenes/kag6.png'},
)

mokepones.push(VAL,ZERO,NACHO)


function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none' 
    sectionReiniciar.style.display = 'none'

    // "mokepones.forEach" se le indica a js que por cada elemento que se agrege a este arreglo "mokepones"" automatizando la creacion de los personajes
    // "forEach"por cada uno de los arreglos mokepones has algo
    mokepones.forEach((mokepon) =>{
        //´´ =>comollas invertidas sirven para implementar directamente html en variables ".js"
        opcionDeMokepones =`
        <input type="radio"name="mascota"id=${mokepon.nombre} />
        <label class="targeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
               
        `
    // "contenedorTargetas.innerHTML = opcionDeMokepones" SOLO ESTA IMPRIMIENDO 1 PARA QUE IMPRIMA TODODS LOS ELEMENTOS SELE AGREGA "+=""
        contenedorTargetas.innerHTML += opcionDeMokepones
        inputVAL = document.getElementById("Val")
        inputZERO = document.getElementById("Zero")
        inputNACHO = document.getElementById("Nacho")
    })


    botonMascotaJugador.addEventListener('click',seccionarMascotaJugador)
    
    



    botonReiniciar.addEventListener('click',reiniciarJuego)
}



function seccionarMascotaJugador(){
    
    sectionSeleccionarAtaque.style.display = 'flex' 
    
    sectionSeleccionarMascota.style.display = 'none' 

    alert('SELECCIONASTE TU PERSONAJE :D')
// UNA SOLA FUENTES DE VERDAD = QUE ESA VARIABLE SE A AUTOMATISADA SI EL PROGRAMA CAMBIA 
// Ej:"inputVAL" 
    if (inputVAL.checked){
         spanMascotaJugador.innerHTML= inputVAL.id
         mascotasJugador = inputVAL.id
    }else if(inputZERO.checked){
        spanMascotaJugador.innerHTML= inputZERO.id
        mascotasJugador = inputZERO.id
    }else if(inputNACHO.checked){
        spanMascotaJugador.innerHTML= inputNACHO.id
        mascotasJugador = inputNACHO.id
    }else{
        alert("NO HAS SELECCIONADO A TU MASCOTA :(")
        reiniciarJuego()}
        //=para buscar y extraer sus ataques
        extraerAtaques(mascotasJugador) 
        seleccionarMascotaEnemigo()
        // "mascotasJugador = inputNombre.id" para que se guarde el nombre de el personaje en la variable
        // ya que en "spanMascotaJugador.innerHTML= inputVAL.id" solo lo imprime
}
// function extraerAtaques(mascotasJugador)=
function extraerAtaques(mascotasJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        // if(si)(mascotaJugador es igual(==) a mokepones[i]"cunado tenemos un arreglo y le ponemos lo [numero"i"] esto signigica que nos va a regresar el odjet que este en ese indise (numero).nombre as que (ataques) sea ==(igual) mokepones[i].ataques")
        if(mascotasJugador==mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
    console.log(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
    ataquesMokepon=`
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}
         <img class="${ataque.nombre}" src=${ataque.imagenAtaque} alt="${ataque.nombre}">
        </button>`
    
    contenedorAtaques.innerHTML += ataquesMokepon}
    )
    botonM4A1 = document.getElementById("boton-M4A1")
    botonAK47 = document.getElementById("boton-AK47")
    botonKAG6 = document.getElementById("boton-KAG6")
    botones =  document.querySelectorAll('.BAtaque')



}

function secuenciaDeAtaque(){
    botones.forEach((boton)=> {
        boton.addEventListener('click',(e)=>{
            if(e.target.textContent=== '🗿'){
                ataqueJugador.push('M4A1')
       console.log(ataqueJugador)
                boton.style.background = '#ff00bf'
            }else if(e.target.textContent=== '📄'){
             ataqueJugador.push('AK47')
        console.log(ataqueJugador)
                boton.style.background = '#ff00bf'
            }else{
                ataqueJugador.push('KAG6')
       console.log(ataqueJugador)
                boton.style.background = '#ff00bf'
            }
            ataqueAleatorioEnemigo()
        })
    })
   
}
// se combirtio la seleccionarMascotaEnemigo() en un afuente de verdad
function seleccionarMascotaEnemigo(){
    let mascotaEnemiga=aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemiga].nombre
    ataquesMokeponEnemigo = mokepones[mascotaEnemiga].ataques
    secuenciaDeAtaque()
}

    // function ataqueM4A1(){
    //     ataqueJugador="M4A1"
    //     ataqueAleatorioEnemigo()
    //     }
    
    // function ataqueAK47(){
    //     ataqueJugador="AK47"
    //     ataqueAleatorioEnemigo()
    //     }
    
    // function ataqueaKAG6(){
    //     ataqueJugador="KAG6"
    //     ataqueAleatorioEnemigo()
    // }

    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio=aleatorio(0, ataquesMokeponEnemigo.length -1)

        if(ataqueAleatorio == 0 || ataqueAleatorio ==1 ){
            ataqueEnemigo.push=('M4A1')
        }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
            ataqueEnemigo.push=('AK47')
        }else {
            ataqueEnemigo.push=('KAG6')
        }
        console.log(ataqueEnemigo)
        combatePartida()
    }

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