//Clase con constructor de objetos
class Plato {
    constructor (comida, ingredientes, precio) {
        this.comida = comida.toUpperCase()
        this.ingredientes = ingredientes
        this.precio = precio
    }
}
//Funcion para agregar objetos al array platos[]
function agregarPlato() {
    let cantidadDePlatos = Number(prompt("Ingrese la cantidad de Platos que desea agregar a su menú"))
    for (let i = 0; i < cantidadDePlatos; i++) {
        platos.push(new Plato(prompt("Ingrese Nombre del Plato " + (i+1)), prompt("Ingrese el Contenido del Plato"), prompt("Ingrese el precio del Plato")))
        console.log("Plato: " + platos[i].comida)
        console.log("Contenido: " + platos[i].ingredientes)
        console.log("Precio: " + platos[i].precio + " $ARS")
    }
    
}
//Declaracion de variables y manejo de opciones
let platos = []
let opcion = prompt("Ingrese AGREGAR para agregar platos al menú\nIngrese ESC para salir")
while (opcion != "AGREGAR" && opcion != "ESC") {
    alert("POR FAVOR INGRESE UN DATO VALIDO")
    opcion = prompt("Ingrese AGREGAR para agregar platos al menú\nIngrese ESC para salir")
}    
switch (opcion) {
    case "AGREGAR":
        agregarPlato()
        break;
        
    case "ESC":  
        break;
}
//Buscador de platos del menu
let buscar = prompt("¿Quiere buscar un plato? ingrese el nombre\nPara cancelar ingrese ESC")
if (buscar != "ESC") {
    const resultado = platos.find((plato) => plato.comida === buscar.toUpperCase())
    alert(`El Plato con nombre ${resultado.comida} tiene un costo de ${resultado.precio} $ARS.`)
}