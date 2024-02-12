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

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
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
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let combate
let vidasEnemigo = 3
let vidasJugador = 3
let lienzo = mapa.getContext("2d")
// let lienzo = mapa.getContext("2d") nos permite usar el lienzo para dibujar en el canvas

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
    sectionVerMapa.style.display = 'none'

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
    
    // sectionSeleccionarAtaque.style.display = 'flex' 
    sectionVerMapa.style.display = 'flex'

    sectionSeleccionarMascota.style.display = 'none'
    let imagenVal= new Image()
    imagenVal.src = VAL.foto
    lienzo.drawImage(
        imagenVal,
        20,
        40,
        100,
        100,

    )

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
    // console.log(ataques)
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
        // console.log(botones)


}
// Eventos de click dinamicos= fuciona"solucionar IMG"
// SOLUCIONADO IMG= ANTES AL TOCARLA IMAGEN EL CODIGO ENTENDIA QUE NO AVIA SELECCIONADO NADA ENTONSES automaticamente se selecccionada el else con el "||e.target.alt==='📄'" su funcion es como 2 condicion que en este caso seria la img y quite el else ya que si mas a futuro se le agrega algo a los botones no de problemas
// NOTA=utilizar el console.log para solucionar errores y saber usarlo 
function secuenciaAtaque(){
    botones.forEach((boton)=> {
        boton.addEventListener('click',(e)=>{
            if(e.target.textContent === '📄\n         \n        '||e.target.alt==='📄'){
                ataqueJugador.push('AK47')
                boton.style.background = '#ff00bf'
                boton.disabled = true
            }else if(e.target.textContent=== '🗿\n         \n        '||e.target.alt==='🗿'){
                ataqueJugador.push('M4A1')
                console.log(ataqueJugador)
                boton.style.background = '#ff00bf'
                boton.disabled = true
            }else if(e.target.textContent=== '✂\n         \n        '||e.target.alt==='✂'){
                ataqueJugador.push('KAG6')
                console.log(ataqueJugador)
                boton.style.background = '#ff00bf'
                boton.disabled = true
               }
            // console.log(e)
            // console.log(e.target.alt==='✂')
            // console.log(ataqueJugador)
            ataqueAleatorioEnemigo()
        })
    })
   
}
// se combirtio la seleccionarMascotaEnemigo() en un afuente de verdad
function seleccionarMascotaEnemigo(){
    let mascotaEnemiga=aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemiga].nombre
    ataquesMokeponEnemigo = mokepones[mascotaEnemiga].ataques
    secuenciaAtaque()
}


//  'function ataqueAleatorioEnemigo()' ya se esta guardando en el arreglo ataqueEnemigo en fila
    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio=aleatorio(0, ataquesMokeponEnemigo.length -1)

        if(ataqueAleatorio == 0 || ataqueAleatorio ==1 ){
            ataqueEnemigo.push('M4A1')
        }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
            ataqueEnemigo.push('AK47')
        }else {
            ataqueEnemigo.push('KAG6')
        }
        console.log(ataqueEnemigo)
        iniciarPelea()
        
    }

function iniciarPelea(){
    if(ataqueJugador.length=== 5)
    combatePartida()
}


function crearMensaje(){
    // "resultado"
    
    sectionMensajes.innerHTML=combate
    // "ataque-de-jugador"
    
    let nuevoAtaqueDelJugador = document.createElement('p')

    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    //ataque-de-enemigo
    
    let nuevoAtaqueDelEnemigor = document.createElement('p')

    nuevoAtaqueDelEnemigor.innerHTML = indexAtaqueEnemigo

    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigor)
}



function GANASTE(){

    let sectionReiniciar = document.getElementById("REINICIAR")
    sectionReiniciar.style.display = 'block'

    //let sectionMensajes = document.getElementById("MENSAJES")

    let parrafo =document.getElementById("resultado")
    parrafo.innerHTML="🎆GANASTE✨🧨,REINICIA LA PAGINA"
    //sectionMensajes.appendChild(parrafo)

    // let botonM4A1 = document.getElementById("boton-M4A1")
    // botonM4A1.disabled = true

    // let botonAK47 = document.getElementById("boton-AK47")
    // botonAK47.disabled = true

    // let botonKAG6 = document.getElementById("boton-KAG6")
    // botonKAG6.disabled = true
}

    function PERDISTE(){

        let sectionReiniciar = document.getElementById("REINICIAR")
        sectionReiniciar.style.display = 'block'
        
        //let sectionMensajes = document.getElementById("MENSAJES")
    
        let parrafo =document.getElementById("resultado")
        parrafo.innerHTML="PERDISTE😕😔,REINICIA LA PAGINA"
        // //sectionMensajes.appendChild(parrafo)

        // let botonM4A1 = document.getElementById("boton-M4A1")
        // botonM4A1.disabled = true
    
        // let botonAK47 = document.getElementById("boton-AK47")
        // botonAK47.disabled = true
    
        // let botonKAG6 = document.getElementById("boton-KAG6")
        // botonKAG6.disabled = true

}

    
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
//COMBATE
function combatePartida(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index]===ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if(ataqueJugador[index]==='M4A1'&& ataqueEnemigo[index]==='KAG6'||ataqueJugador[index]==='AK47'&&ataqueEnemigo[index]==='M4A1'||ataqueJugador[index]==='KAG6'&&ataqueEnemigo[index]==='AK47'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador       
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML=victoriasEnemigo
        }
        console.log(victoriasJugador)
        console.log(victoriasEnemigo)
        
    }


revisarVidas()

}
function revisarVidas(){
    if(victoriasJugador>victoriasEnemigo){
       GANASTE()
    }else if(victoriasJugador<victoriasEnemigo){
        PERDISTE()
    }else{
        "EMPATE"
    }
}

function reiniciarJuego(){
    //"location.reload()" recarga la pagina Actual 
    location.reload()
}



window.addEventListener('load', iniciarJuego)