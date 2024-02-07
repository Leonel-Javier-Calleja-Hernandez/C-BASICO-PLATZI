const sectionSeleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
const sectionReiniciar = document.getElementById("REINICIAR")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonM4A1 = document.getElementById("boton-M4A1")
const botonAK47 = document.getElementById("boton-AK47")
const botonKAG6 = document.getElementById("boton-KAG6")
const botonReiniciar = document.getElementById("reiniciar-juego")

const sectionSeleccionarMascota = document.getElementById("SELECCIONAR-MASCOTA")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo=document.getElementById("mascota-enemigo")

const spanVidasJugador=document.getElementById("vidas-jugador")
const spanVidasEnemigo=document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataques-de-jugador")
const ataqueDelEnemigo = document.getElementById("ataques-de-Enemigo")
const contenedorTargetas= document.getElementById('contenedoTargetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
// las modifique ya que antes eran const y por que como al leer el codigo no reconose los valores ya que aun no an sido creados y los puse dentro de "mokepones.forEach" ya que hay se estan creando
let inputVAL
let inputZERO
let inputNACHO
// .
//"let mascotasJugador" nombre de la mascota de el jugador 
let mascotasJugador
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

let NACHO = new Mokepon('Naclo','css/imagenes/nacho3.png',5)
 
VAL.ataques.push(
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'✂',id:'boton-KAG6'},
)

ZERO.ataques.push(
    {nombre:'✂',id:'boton-KAG6'},
    {nombre:'✂',id:'boton-KAG6'},
    {nombre:'✂',id:'boton-KAG6'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'📄',id:'boton-AK47'},
    
)

NACHO.ataques.push(
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'📄',id:'boton-AK47'},
    {nombre:'🗿',id:'boton-M4A1'},
    {nombre:'✂',id:'boton-KAG6'},
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
        // en la naterior vercion habia un error el cual al estar en la pestaña de "SECCION-ATAQUE" NO SE LE MOSTRABA EL NOMBRE DE LOS JUGADORES .
        inputVAL = document.getElementById("Val")
        inputZERO = document.getElementById("Zero")
        inputNACHO = document.getElementById("Nacho")
    })


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
// UNA SOLA FUENTES DE VERDAD = QUE ESA VARIABLE SE A AUTOMATISADA SI EL PROGRAMA CAMBIA 
// Ej:"inputVAL" se modifico el nombre de el = "..." ya que este es texto y esto puede dar errores al modificar o al cambiar el nombre de los personajes, ahorra ya se modifica automaticamente el nombre de los personajes.
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
// for = es una estructura muy similar a el forEach la diferencia es que genera una nueva variable(index=i) y por cada iteracion va a sumar un valor "array" = el arreglo que queremos iterar
// se lee= "i" es igua a sero ";"(mientras) "i" se "<" menor a la .length(longitud) del arreglo de mokepones
    }

// se combirtio la seleccionarMascotaEnemigo() en un afuente de verdad
function seleccionarMascotaEnemigo(){
    let mascotaEnemiga=aleatorio(0, mokepones.length -1)
// mokepones.length=es la longitud(cantidad de mokepones) y se le resta -1 ya que son 3 pero como inicia de el 0 al llegar al el 3 serian 4 entonces por ende se le resta -1 al mokepones.length
    spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemiga].nombre
        
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