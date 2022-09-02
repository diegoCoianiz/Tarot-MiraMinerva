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
        return `.jpg" width="150" height="210" class="efectoCartas" id="cartaSeleccionada-${i}" onclick="seleccion(${i})">`
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
    document.body.style.backgroundImage = "url('img/fondo_1.jpg')"
    document.body.style.backgroundSize = "100%"
    firstStep.remove()
    InitPogram.innerHTML = 
    `
    <div class="container-fluid">
        <div class="row mx-4 my-2">
            <div class="col">
                <div id="IdTodo">
                </div>
            </div>
        </div>
    </div>
    `
    IdTodo = document.getElementById("IdTodo")
    presentarMazo()
    document.getElementById("estilos").href = "css/estiloCartas.css"

}

lista = []
seleccion = (i) => {

    cartaSeleccionada = document.getElementById(`cartaSeleccionada-${i}`)
    cartaSeleccionada.style.cssText = "filter: grayscale(80%);"

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
    IdTodo.remove()
    InitPogram.innerHTML = 
        `
        <div class="container-fluid">
            <div id="devolucion1">
                <div class="row row-cols-4" style="height:250px; color:white;">

                </div>

                <div class="row row-cols-4" style="height:250px; color:black;">
                    <div class="col">
                    </div>
                    <div class="col col-6 mx-1">
                        <h1>  </h1>
                    </div>
                </div>

                <div class="row row-cols-6" style="color:black;">
                    <div class="col-5">
                    </div>
                    <div class="col mx-1">
                        <h2></h2>
                    </div>
                    <div class="col">
                </div>
            </div>
        </div>
        `
    setTimeout(() => {
        devolucion_2(lis)
    }, 3000);
} 

devolucion_2 = (lis) => {
    console.log(lis)

    l1 = lis[0], l2 = lis[1], l3 = lis[2]
    document.body.style.backgroundImage = "url('img/fondo_2.jpg')"
    console.log("en devolucion dos: llegan los 3 elementos: ", l1, l2, l3)
    const devolucion1 = document.getElementById("devolucion1")
    devolucion1.remove()
    
    InitPogram.innerHTML =
    `
        <div id="devolucion2">
            <div class="row row-cols-4">
                <div class="col">

                </div>
                <div class="col-6 text-center my-5" style="height:250px;">
                    <div class="row">
                        <h1 style="color:black;"><b>
                            ${Carta["_"+(l1+1)][0]}, ${Carta["_"+(l2+1)][1]} ${Carta["_"+(l3+1)][2]}
                        </b></h1>
                    </div>
                <div class="row mt-5" class="efectoCartas" style="height:250px;" >
                    <a href="https://www.facebook.com/profile.php?id=100083412135292" target="_blank"> </a>
                </div>
                </div>
            </div>
        </div>
    `
}