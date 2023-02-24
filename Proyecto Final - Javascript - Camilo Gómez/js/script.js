/* ---------------Definicion de variables y obtención de elementos ------------------*/
let btnCalcular = document.getElementById('btnCalcular')
let selectBanco = document.getElementById('banco');
let btnAgregar = document.getElementById('btnAgregarBanco');
let nombreElemento = document.getElementById('nuevoBanco')
let interesElemento = document.getElementById('nuevoInteres')
let btnAceptar = document.getElementById('btnAceptar')
let btnCancelar = document.getElementById('btnCancelar')
let textoNombre = document.getElementById('textoNombre')
let numeroInteres = document.getElementById('numeroInteres')
let capitalFinalCompuesto = 0
let interesAcumuladoCompuesto = 0
let interesAcumuladoSimple = 0
let capitalFinalSimple = 0
let montoInvertir = 0
let interesAnual = 0
let tiempoMeses = 0
let bancosNuevos = []
let bancosStorage
/*---------------Funciones Especificas----------------------- */
function guardarEnStorage() {
    localStorage.setItem('bancoUsuario', JSON.stringify(bancosNuevos))
 
}
function obtenerBancosStorage() {
 bancosStorage = JSON.parse(localStorage.getItem('bancoUsuario'))
}
const obtenerBancosJSON = async ()=> {
    await fetch('json/bancos.json').then((resp) => resp.json()).then((datos) => {
        let arrayBancos =[]
        arrayBancos = datos
        if (bancosStorage != null) {
            
            for (const i of bancosStorage) {
                arrayBancos.unshift(i)
                
            }
        }
        for (let i of arrayBancos) {
            let nombre = ''
            let interes = 0
            nombre = i.nombreBanco
            interes = i.interesAnual
            let option = document.createElement('option')
            option.className = "opt"
            /*             option.setAttribute("label", `${nombre}`)
            */            option.value = interes
            option.innerText = nombre
            selectBanco.appendChild(option) 
        }
    })
    
}
function agregarClases () {
    nombreElemento.classList.add('nuevoBanco')
    interesElemento.classList.add('nuevoBanco')
    btnAceptar.classList.add('nuevoBanco')
    btnCancelar.classList.add('nuevoBanco')
    textoNombre.classList.add('textoNuevoBanco')
    numeroInteres.classList.add('textoNuevoBanco')
}
function borrarClase(){
    nombreElemento.classList. remove('nuevoBanco')
    interesElemento.classList. remove('nuevoBanco')
    btnAceptar.classList. remove('nuevoBanco')
    btnCancelar.classList.remove('nuevoBanco')
    textoNombre.classList.remove('textoNuevoBanco')
    numeroInteres.classList.remove('textoNuevoBanco')
}
function calculoInteresSimple() {
    let interesMensual = (interesAnual / 12) / 100
    interesAcumuladoSimple = montoInvertir * interesMensual * tiempoMeses
    capitalFinalSimple = interesAcumuladoSimple + montoInvertir
}
function calculoInteresCompuesto() {
    let interesMensual = (interesAnual / 12) / 100
    capitalFinalCompuesto = montoInvertir * (1 + interesMensual)**tiempoMeses
    interesAcumuladoCompuesto = capitalFinalCompuesto - montoInvertir
}
/*------------ Clase Constructora ----------------- */
class Banco {
    constructor(literal) {
        this.nombreBanco = literal.nombreBanco
        this.interesAnual = literal.interesAnual
    }
}
/* ------------Llamado de funciones y realizacion de Eventos------------------ */
obtenerBancosStorage()
obtenerBancosJSON()
btnAgregar.onclick = () =>{
    agregarClases()
    btnCancelar.onclick = () => {
       borrarClase()
    }
    
    btnAceptar.onclick = () => {
        if(nombreElemento.value != '' & interesElemento.value > 0){ 
            let nombreBanco = nombreElemento.value
            let interesAnual = interesElemento.value
            let option = document.createElement('option')
            option.className = "opt"
            option.value = interesAnual
            option.innerText = nombreBanco
            selectBanco.appendChild(option)
            borrarClase()
            let agregarBanco = new Banco ({nombreBanco,interesAnual})
            bancosNuevos.unshift(agregarBanco)
            guardarEnStorage()
        }else if(nombreElemento.value == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Atención!',
                text: 'Debe completar el campo de nombre!',
              })
            }else{
            Swal.fire({
                icon: 'warning',
                title: 'Atención!',
                text: 'Recuerde que el interés debe ser mayor a 0!',
              })
        }
    }
}
btnCalcular.onclick = () =>{
    if(Number(document.getElementById('monto').value) > 0 & Number(document.getElementById('banco').value) > 0 & Number(document.getElementById('meses').value) >0){
        montoInvertir = Number(document.getElementById('monto').value)
        interesAnual = Number(document.getElementById('banco').value)
        tiempoMeses = Number(document.getElementById('meses').value)
        let respuesta = document.getElementById('respuesta')
        let tabla1 = document.getElementById('tabla1')
        let tabla2 = document.getElementById('tabla2')
        calculoInteresCompuesto()
        calculoInteresSimple()
        tabla1.className = 'table1'
        tabla1.innerHTML = `<caption class="caption1">
        Cálculo realizado con fórmula de Interés Simple
        </caption>
        <tr class="tr1">
        <th class="th1">Monto</th>
        <th class="th1">Interés anual</th>
          <th class="th1">Tiempo(meses)</th>
          <th class="th1">Interés Acumulado</th>
          <th class="th1">Capital Final</th>
          </tr>
          <tr class="tr1">
          <td class="td1">$${montoInvertir}</td>
          <td class="td1">${interesAnual}%</td>
          <td class="td1">${tiempoMeses}</td>
          <td class="td1">$${interesAcumuladoSimple.toFixed(2)}</td>
          <td class="td1">$${capitalFinalSimple.toFixed(2)}</td>
        </tr>`
        tabla2.className = 'table1'
        tabla2.innerHTML =`
        <caption class="caption1">
          Cálculo realizado con fórmula de Interés Compuesto
        </caption>
        <tr class="tr1">
          <th class="th1">Monto</th>
          <th class="th1">Interés anual</th>
          <th class="th1">Tiempo(meses)</th>
          <th class="th1">Interés Acumulado</th>
          <th class="th1">Capital Final</th>
        </tr>
        <tr class="tr1">
          <td class="td1">$${montoInvertir}</td>
          <td class="td1">${interesAnual}%</td>
          <td class="td1">${tiempoMeses}</td>
          <td class="td1">$${interesAcumuladoCompuesto.toFixed(2)}</td>
          <td class="td1">$${capitalFinalCompuesto.toFixed(2)}</td>
        </tr>`
      respuesta.appendChild(tabla1)
      respuesta.appendChild(tabla2)
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Ingrese valores mayores a 0 para calcular',
          })
    }
}