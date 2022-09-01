const InitPogram = document.getElementById("InitPogram")
const firstStep = document.getElementById("firstStep")
const IdMazo = document.getElementById("IdMazo")

//#region posiciones y significados
const carta = {
    _1 : ["uno", "dos", "tres"],
    _2 : ["cuatro", "cinco", "seis"]
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
    IdTodo.remove()
    document.body.style.backgroundImage = "url('img/fondo.jpg')"
    InitPogram.innerHTML = 
        `
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
        `
} 

devolucion_2 = () => {

}

startApp()