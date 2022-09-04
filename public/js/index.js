const InitPogram = document.getElementById("InitPogram")
const firstStep = document.getElementById("firstStep")
const IdMazo = document.getElementById("IdMazo")

//#region posiciones y significados
const Carta = {
    _1 : [ " Sé Tú Mismo.", " ¿Es éste Tú camino?", " Aprende del desapego."],
    _2 : [ " Concéntrate en tus propósitos.", " ¿Estás enfocado en tus objetivos?", " Elabora tus proyectos."],
    _4 : [ " Desarrolla tu espacio vital." , " ¿Disfrutas de tu hábitat?", " Comparte tu espacio vital."],
    _5 : [ " Domina tus capacidades." , " ¿Estás resolviendo tus contradicciones?", " Confía en tu poder."],
    _3 : [ " Custodia lo que amas." , " ¿Atiendes a lo que es sagrado para tí?" , " Cuida lo sagrado que hay en tí."],
    _6 : [ " Tiende puentes.", " ¿Algo nuevo despierta el deseo? ", " Arriésgate más allá de lo que conoces."],
    _7 : [ " Usa tu libre albedrío.", " ¿Eliges sabiamente entre pasión y fuerza mayor?", " Elegir implica descartar."],
    _8 : [ " Avanza sin distracciones.", " ¿Defines tus estrategias?", " El éxito es de los osados."],
    _9 : [ " Define tus límites.", " ¿Comprometes y respetas tu palabra?", " No invadir está en la base de la justicia y la elegancia."],
    _10 : [ " Aprende de tus experiencias.", " ¿Te conoces en profundidad?", " Tu sabiduría ilumina a otros."],
    _11 : [ "Mantén tu identidad.", " ¿Aceptas los cambios externos?", " El movimiento mantiene el equilibrio."],
    _12 : [ " Sostiene tus principios.", " ¿Sabes ser a la vez fuerte y gentil?", " Muestra fortaleza moral."],
    _13 : [ "Tómate tu tiempo.", " ¿Te permites pausas?", " Las pausas son necesarias para poder continuar."],
    _14 : [ " Es hora de cerrar un ciclo.", "¿Haces espacio para que algo nuevo nazca?", " El vacío da lugar a todo."],
    _15 : [ " No perdura lo que se estanca.", " ¿Cuidas tus palabras? ", " Los cambios son necesarios."],
    _16 : [ " Lo que tienta, seduce.", " ¿ Es un corset apto para la vida?", " No te demores en salir de las trampas"],
    _17 : [ " Rompe con los condicionamientos.", " Anticípate a las tormentas", " ¿Estás preparado para una semana de lluvia?"],
    _18 : [ " Deseas entregarte sin temor.", " Prolonga la valentía de tu juventud y no envejecerás.", " ¿Estás mostrando lo más genuino de tí?" ],
    _19 : [ " Guarda tus secretos.", " ¿Identificas lo que te inquieta?", "No mires sólo lo imperfecto. " ],
    _20 : [ " Nada hay oculto que …", " No hay justicia sin equilibrio", " ¿Recuerda tus compromisos?."],
    _21 : [ " Intenta ser imparcial.", " ¿Qué practicas: crítica o autocrítica?", " Sé benevolente en tus juicios de valor."],
    _22 : [ " Alcanzar las metas otorga una transitoria serenidad.", " ¿Te dará serenidad alcanzar tus propósitos?", " Integra lo diverso."]
}


//#endregion

CrearMazo = () => {
    nombreCarta = `<img src="img/The-Estensi-Tarot-deck-`
    parametros = (i) => {
        return `.jpg" width="145rem" height="210rem" class="efectoCartas" id="cartaSeleccionada-${i}" onclick="seleccion(${i})">`
    }
    parametrosAviso = `.jpg" width="145rem" height="207rem">`

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
    firstStep.remove()
    InitPogram.innerHTML = 
    `
    <div class="container-xxl">
        <div class="row mx-3 my-2">
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
    document.body.style.backgroundImage = "url('img/fondo_1.jpg')"
    document.body.style.backgroundSize = "100%"
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
    l1 = lis[0], l2 = lis[1], l3 = lis[2]
    document.body.style.backgroundImage = "url('img/fondo_2.jpg')"
    const devolucion1 = document.getElementById("devolucion1")
    devolucion1.remove()
    
    InitPogram.innerHTML =
    `
        <div class="container-xxl">
            <div class="row row-cols-4">
                <div class="col">

                </div>
                <div class="col-6 my-5 text-center" style="height:250px;">
                    <div class="row">
                        <font face="Luminari">
                            <h1 style="color:black;"><b>
                                ${Carta["_"+(l1+1)][0]}
                            </b></h1>
                            <h1 style="color:black;"><b>
                                ${Carta["_"+(l2+1)][1]}
                            </b></h1>
                            <h1 style="color:black;"><b>
                                ${Carta["_"+(l3+1)][2]}
                            </b></h1>
                        </font>
                    </div>
                <div class="row mt-5" class="efectoCartas" style="height:250px;" >
                    <a href="https://www.facebook.com/profile.php?id=100083412135292" target="_blank"> </a>
                </div>
                </div>
            </div>
        </div>
    `   
}