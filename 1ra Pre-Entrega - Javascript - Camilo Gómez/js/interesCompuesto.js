// Funcion calculadora de INTERES COMPUESTO
function interesCompuesto (){
    // funcion para calcular potencia (necesaria para la formula de INTERES COMPUESTO)
    function factorPotencia (base, exponente) {
        for(let i = 0; i < exponente; i++){
            resultadoPotencia = resultadoPotencia * base
        }
        return resultadoPotencia
    }
    factorPotencia(FACTOR, tiempoMeses)
    // Calculo de Capital final e interes acumulado
    capitalFinal= (montoInvertir * resultadoPotencia).toFixed(2)
    interesAcumulado = (capitalFinal - montoInvertir).toFixed(2)
    console.log(`El INTERES COMPUESTO acumulado será de $${interesAcumulado}`)
    console.log(`Al finalizar los ${tiempoMeses} meses usted tendría $${capitalFinal} disponible`)
}
//Funcion calculadora de INTERES SIMPLE
function interesSimple (){
    interesAcumulado = montoInvertir * interesMensual * tiempoMeses
    capitalFinal = interesAcumulado + montoInvertir
    console.log(`El INTERES SIMPLE acumulado será de $${interesAcumulado}`)
    console.log(`Al finalizar los ${tiempoMeses} meses usted tendría $${capitalFinal} disponible`)
}
// ENTRADA A LA APLICACION y seleccion de tipo de calculo
let opcion = ""
alert("BIENVENIDO A LA CALCULADORA DE INTERESES\nHaga CLICK en aceptar para continuar")
while (opcion != "SIMP" || opcion!= "COMP" || opcion!= "AMBOS") {
    opcion = prompt("Ingrese SIMP para calcular INTERES SIMPLE \nIngrese COMP para calcular INTERES COMPUESTO\nIngrese AMBOS para calcular los dos tipos de intereses")
    if(opcion=="SIMP" || opcion=="COMP" || opcion =="AMBOS" ){
        break
    }else {
        alert("POR FAVOR INGRESE UN DATO VALIDO")
    }
}
//Ingreso de datos
let montoInvertir = parseFloat(prompt("Ingrese MONTO a invertir en pesos"))
let interesAnual = parseFloat(prompt("Ingrese TASA de INTERES ANUAL"))
let tiempoMeses = parseInt(prompt("Ingrese cuantos MESES mantendrá su inversión"))
let interesMensual = (interesAnual/12) /100
let porcentajePesos = montoInvertir * interesMensual /100
let resultadoPotencia = 1
let capitalFinal = 0
let interesAcumulado = 0
const FACTOR = (1+interesMensual)
console.log (`Su interes mensual será ${interesMensual*100}%, lo que equivale a $${porcentajePesos*100} `)
// Llamada a las funciones segun tipo de calculo elegido
switch (opcion) {
    case "SIMP":
        interesSimple()
    break;
    case "COMP":
        interesCompuesto()
    break;
    case "AMBOS":
        interesSimple()
        interesCompuesto()
    break;
 }
    