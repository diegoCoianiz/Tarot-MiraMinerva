const InitPogram = document.getElementById("InitPogram")
const firstStep = document.getElementById("firstStep")
const IdMazo = document.getElementById("IdMazo")

//#region posiciones y significados
const Carta = {
    _1 : [ " Sé tú mismo", " inventando tu propio camino que te lleve a", " ser Tú Mismo."],
    _2 : [ " Transforma", " transformandote en función de", " tus objetivos."],
    _4 : [ " Habita tu espacio vital" , " generando", " tu espacio vital."],
    _5 : [ " Domina tus capacidades" , " avanzando hacia", " lo que mereces."],
    _3 : [ " Custodia lo que más amas" , " custodiando" , " lo sagrado que hay en tí."],
    _6 : [ " Construye", " construyendo el camino que te lleve a", " lo que te lleve más allá de lo conocido."],
    _7 : [ " Usa tu libre albedrío", " eligiendo libremente", " el uso de tu libre albedrío."], 
    _8 : [ " Avanza", " definiendo las estrategias para", " el éxito de tus batallas."], 
    _9 : [ " Define los límites", " comprometiéndote a aceptar", " el respeto de los límites."],
    _10 : [ " Aprende de tus experiencias", " aprendiendo de tus experiencias lo que necesites saber sobre", " el camino que recorres."],
    _11 : [ "Mantén en tu lugar", " manteniéndote en equilibrio con", " el reconocimiento de las vicisitudes de la vida."],
    _12 : [ " Sostente", " sosteniendo", " tu fortaleza."],
    _13 : [ "Tómate tu tiempo", " poniendo en pausa", " las pausas necesarias."],
    _14 : [ " Cierra el ciclo", " poniéndole fin a", " el final para que algo nuevo nazca."],
    _15 : [ " Cambia", " revirtiendo", " los cambios que sean necesarios."],
    _16 : [ " Seduce", " capturando", " lo que te seduce."],
    _17 : [ " Rompe con los condicionamientos", " rompiendo con los condicionamientos que te alejan de", " tu último refugio."], 
    _18 : [ " Entrégate sin temor", " entregándote sin temor a", " lo más genuino de tí." ],
    _19 : [ " Guarda tus secretos", "ocultando que lo que te impulsa es", "tus misterios." ],
    _20 : [ " Echa luz", " observando", " tus compromisos."],
    _21 : [ " Revisa", "revisando", " tus juicios de valor."],
    _22 : [ " Alcanza tus metas", " alcanzando", " tus actuales propósitos."]
}
//#endregion

CrearMazo = () => {
    nombreCarta = `<img src="img/The-Estensi-Tarot-deck-`
    parametros = (i) => {
        return `.jpg" width="150" height="210" onclick="seleccion(${i})">`
    }
    parametrosAviso = `.jpg" width="150" height="207">`

    CartasTarot = {}
    for(i=0 ; i < 24 ; i++) {
        if(i<11) {
            CartasTarot[i] = ` ${nombreCarta}${i}${parametros(i)}`
        } else if (i == 11 || i == 12) {
            i == 11 ? CartasTarot[i] = ` ${nombreCarta}aviso1${parametrosAviso}` :
            CartasTarot[i] = ` ${nombreCarta}aviso2${parametrosAviso}`
        } else {
            CartasTarot[i] = ` ${nombreCarta}${i-2}${parametros(i-2)}`
        }
    }
    return CartasTarot
}

presentarMazo = () => {
    CrearMazo()
    for(i = 0; i < Object.keys(CartasTarot).length; i++){
        IdTodo.innerHTML += CartasTarot[i]
    } 
}

startApp = () => {
    IdMazo.innerHTML = ` <img src="img/mazo.jpg" alt=""> `

    Init = () => {
        firstStep.remove()
        InitPogram.innerHTML = 
        `
        <div class="row mx-4 my-2">
            <div class="col">
                <div id="IdTodo">

                </div>
            </div>
        </div>
        `
        IdTodo = document.getElementById("IdTodo")
        presentarMazo()
    }
}

lista = []
seleccion = (i) => {
    agregar = true
    
    if (lista.length == 0) {
        lista.push(i)
    } else {
        for(num in lista){
            if(lista[num] == i){
                agregar = false
            }
        }
        if(agregar){
            lista.push(i)
        }
    }

    lista.length == 3 ? devolucion_1(lista) : null
}

devolucion_1 = (lis) => {
    console.log("en devolucion uno: llegan los elementos: ", lis)
    IdTodo.remove()
    document.body.style.backgroundImage = "url('img/fondo.jpg')"
    InitPogram.innerHTML = 
        `
        <div id="devolucion1">
            <div class="row row-cols-4" style="height:250px; color:white;">

            </div>

            <div class="row row-cols-4" style="height:250px; color:black;" onclick="devolucion_2(${lis})">
                <div class="col">
                </div>
                <div class="col col-6 mx-1">
                    <h1> El consejo que te da el Tarot es: </h1>
                </div>
            </div>

            <div class="row row-cols-6" style="color:black;">
                <div class="col-5">
                </div>
                <div class="col mx-1">
                    <h2>(click)</h2>
                </div>
                <div class="col">
            </div>
        </div>
    </div>
    `
} 

devolucion_2 = (l1, l2, l3) => {

    console.log("en devolucion dos: llegan los 3 elementos: ", l1, l2, l3)
    const devolucion1 = document.getElementById("devolucion1")
    devolucion1.remove()
    console.log("las siguientes son las cartas elejidas:")
    console.log(Carta["_"+(l1+1)],Carta["_"+(l2+1)],Carta["_"+(l3+1)])
    console.log("y estos sus significados:")
    console.log(Carta["_"+(l1+1)][0],", ",Carta["_"+(l2+1)][1],Carta["_"+(l3+1)][2])
    
    InitPogram.innerHTML =
    `
        <div id="devolucion2">
            <h1 style="color:black;">
                ${Carta["_"+(l1+1)][0]}, ${Carta["_"+(l2+1)][1]} ${Carta["_"+(l3+1)][2]}
            </h1>
        </div>
    `
}

startApp()