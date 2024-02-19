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
// con const sectiojVerMapa y mapa se lla,a a los id de html para el canvas
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
let mascotaJugadorObjeto
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
let intervalo
let mapaBackground = new Image()
mapaBackground.src = 'css/imagenes/MAPA.jpg'

// let alturaQueBuscamos
// let anchoDelMapa = window.innerWidth -20
// let anchoMaximoDelMapa = 350
// if (anchoDelMapa > anchoMaximoDelMapa){
//     anchoMaximoDelMapa = anchoMaximoDelMapa - 20
// }
// alturaQueBuscamos = anchoDelMapa * 450 / 650

// mapa.width = anchoDelMapa
// mapa.height = alturaQueBuscamos

// clase
class Mokepon{
    constructor(nombre, foto, vidas, fotoMapa,){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        // le agrege las dimenciones de la imagen, tambien la funcion de pintar la imagen  y que se mueva asi la derecha
        this.x = aleatorio(0, mapa.width-this.ancho)
        this.y = aleatorio(0, mapa.height-this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        // cree otro this que cambia la imagen del personaje seleccionado y muestra una imagen que representa a el personaje
        // this = esto mismo "EL.nombre es = a nombre"
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }

}

// Objetos del jugador
let VAL = new Mokepon('Val',"css/imagenes/val1.png",5,"css/imagenes/valA.png")

let ZERO =new Mokepon('Zero','css/imagenes/zero2.png',5,"css/imagenes/zeroA.png")

let NACHO = new Mokepon('Nacho','css/imagenes/nacho3.png',5,"css/imagenes/nachoA.png")
 
// objetos del enemigo
let VALEnemigo = new Mokepon('Val',"css/imagenes/val1.png",5,"css/imagenes/valA.png",)

let ZEROEnemigo =new Mokepon('Zero','css/imagenes/zero2.png',5,"css/imagenes/zeroA.png",)

let NACHOEnemigo = new Mokepon('Nacho','css/imagenes/nacho3.png',5,"css/imagenes/nachoA.png",)



// se creo la lista de ataques de los enemigos 
VAL.ataques.push(
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'🗿',id:'boton-M4A1',imagenAtaque:'css/imagenes/m4a1.png'},
    {nombre:'📄',id:'boton-AK47',imagenAtaque:'css/imagenes/ak47.png'},
    {nombre:'✂',id:'boton-KAG6',imagenAtaque:'css/imagenes/kag6.png'},
)

VALEnemigo.ataques.push(
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

ZEROEnemigo.ataques.push(
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

NACHOEnemigo.ataques.push(
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

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            // console.log(res)
            if (res.ok) {
                    res.text()
                    .then(function (respuesta){
                        console.log(respuesta)
                    })

            }
        })
}



function seccionarMascotaJugador(){
    


    sectionSeleccionarMascota.style.display = 'none'


    alert('SELECCIONASTE TU PERSONAJE :D')
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

        
        sectionVerMapa.style.display = 'flex'
        //cree un funtion de iniciar mapa para estar mas ordenado el codigo
        iniciarMapa()
        extraerAtaques(mascotasJugador) 

        // "mascotasJugador = inputNombre.id" para que se guarde el nombre de el personaje en la variable
    
}
// function extraerAtaques(mascotasJugador)=
function extraerAtaques(mascotasJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotasJugador==mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
          // if(si)(mascotaJugador es igual(==) a mokepones[i]"cunado tenemos un arreglo y le ponemos lo [numero"i"] esto signigica que nos va a regresar el odjet que este en ese indise (numero) .nombre has que (ataques) sea ==(igual) mokepones[i].ataques")
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
// Eventos de click dinamicos
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
function seleccionarMascotaEnemigo(enemigo){
    // let mascotaEnemiga=aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}


//  'function ataqueAleatorioEnemigo()' ya se esta guardando en el arreglo ataqueEnemigo en fila
    function ataqueAleatorioEnemigo(){
        console.log("ataques MOK E",ataquesMokeponEnemigo);
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
   
}

    function PERDISTE(){

        let sectionReiniciar = document.getElementById("REINICIAR")
        sectionReiniciar.style.display = 'block'
        
        //let sectionMensajes = document.getElementById("MENSAJES")
    
        let parrafo =document.getElementById("resultado")
        parrafo.innerHTML="PERDISTE😕😔,REINICIA LA PAGINA"
       

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
// "pintarCanvas" agrega la imagen
function pintarCanvas(){
    // console.log(mascotaJugadorObjeto.x,mascotaJugadorObjeto.y)

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width,mapa.height)
    // "lienzo.clearRect(0,0, mapa.width,mapa.height)" limpi el canvas dando la ilucion de movimiento
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
// se pintan a los enemigos y al personaje con el array ".pintarMokepon()"en el mapa llamando a el 
   mascotaJugadorObjeto.pintarMokepon()
   VALEnemigo.pintarMokepon()
   ZEROEnemigo.pintarMokepon()
   NACHOEnemigo.pintarMokepon()
//  si la mascotaJugadorObjeto se mueve entonses se invocan las funtion revisarColision
   if(mascotaJugadorObjeto.velocidadY !== 0 || mascotaJugadorObjeto.velocidadX !== 0){
    revisarColision(VALEnemigo)
    revisarColision(ZEROEnemigo)
    revisarColision(NACHOEnemigo)
   }
}

// MOVER = le estamos asignando una velocidad con(velocidadX,velocidadY) al personaje y al mantenerlo presionado este se mueve
// hasta que se suelte y se detiene con la funcion detenerMovmiento
function moverArriba(){
mascotaJugadorObjeto.velocidadY = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
    }
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
    }
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5 
    }       
    
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
// AL PRESIONAR LAS TECHAS EL PERSONAJE EJECUTA LA FUNCION CORRESPONDIENTE
function sePresionoTecla(event){
    console.log(event.key);
    switch (event.key) {
        case 'ArrowUp': 
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowRight':
        moverDerecha()
            break
        case 'ArrowLeft':
        moverIzquierda()
            break
        default:
            break
    }


}

function iniciarMapa(){

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 360

if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos
    console.log(mascotaJugadorObjeto,mascotasJugador)

    mascotaJugadorObjeto=odtenerObjetoMascota()
    intervalo = setInterval(pintarCanvas,50)
    // con setInterval se le invica que cada 50 milisegundos ejecute la funcion de pintar a el personaje y esto significa que cada 50 milsegundos cambia de posicion aumnetando su velocida 
    
    window.addEventListener('keydown', sePresionoTecla)

    window.addEventListener('keyup', detenerMovimiento)

}

function odtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotasJugador==mokepones[i].nombre){
            return mokepones[i]
        }
}
}
//con la "function revisarColision(enemigo)" primero se crea unas const que tenga el valir de arriba,abajo,izquierda y derecha de el jugador y de el enemigo.  
function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota =
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
        mascotaJugadorObjeto.x

// se comparan 
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
      return
    }
    // clearInterval(intervalo) DE TIENE LAS IMPRESIONES DE EL MAPA 
    clearInterval(intervalo)
    console.log("se detecto colision");
   sectionSeleccionarAtaque.style.display = 'flex'
//    OCULTAMOS EL MAPA
   sectionVerMapa.style.display = 'none' 
    detenerMovimiento()
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)