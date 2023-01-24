// Funcion calculadora de INTERES COMPUESTO
function interesCompuesto() {
    let capitalFinal = montoInvertir * (1 + interesMensual)**tiempoMeses
    let interesAcumulado = capitalFinal - montoInvertir
    console.log(`El INTERES COMPUESTO acumulado será de $${interesAcumulado.toFixed(2)}`)
    console.log(`Al finalizar los ${tiempoMeses} meses usted tendría $${capitalFinal.toFixed(2)} disponible`)
}
//Funcion calculadora de INTERES SIMPLE
function interesSimple() {
    let interesAcumulado = montoInvertir * interesMensual * tiempoMeses
    let capitalFinal = interesAcumulado + montoInvertir
    console.log(`El INTERES SIMPLE acumulado será de $${interesAcumulado.toFixed(2)}`)
    console.log(`Al finalizar los ${tiempoMeses} meses usted tendría $${capitalFinal.toFixed(2)} disponible`)
}
// ENTRADA A LA APLICACION y seleccion de tipo de cálculo
alert("BIENVENIDO A LA CALCULADORA DE INTERESES\nHaga CLICK en aceptar para continuar")
//Ingreso de datos
let montoInvertir = parseFloat(prompt("Ingrese MONTO a invertir en pesos"))
let interesAnual = parseFloat(prompt("Ingrese TASA de INTERES ANUAL"))
let tiempoMeses = parseInt(prompt("Ingrese cuantos MESES mantendrá su inversión"))
let interesMensual = (interesAnual / 12) / 100
let porcentajePesos = montoInvertir * interesMensual / 100
let opcion = prompt("Ingrese SIMP para calcular INTERES SIMPLE \nIngrese COMP para calcular INTERES COMPUESTO\nIngrese AMBOS para calcular los dos tipos de intereses")
while (opcion != "SIMP" && opcion != "COMP" && opcion != "AMBOS") {
    alert("POR FAVOR INGRESE UN DATO VALIDO")
    opcion = prompt("Ingrese SIMP para calcular INTERES SIMPLE \nIngrese COMP para calcular INTERES COMPUESTO\nIngrese AMBOS para calcular los dos tipos de intereses")
}
console.log(`Su interes mensual será ${(interesMensual * 100).toFixed(4)}%, lo que equivale a $${(porcentajePesos*100).toFixed(2)} `)
// Llamada a las funciones según tipo de cálculo elegido
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
