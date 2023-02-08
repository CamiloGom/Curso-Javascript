let tiempoMeses = 0;
let capitalFinal = 0;
let interesAcumulado = 0;
let interesAcumulado2 = 0;
let capitalFinal2 = 0;
function guardarLocalStorage(){
    localStorage.setItem("capital", capitalFinal)
    localStorage.setItem("interes", interesAcumulado)
    localStorage.setItem("capital2", capitalFinal2)
    localStorage.setItem("interes2", interesAcumulado2)
}
function calcular() {
    let montoInvertir = Number(document.getElementById('montoInvertir').value)
    let interesAnual = Number(document.getElementById ('tasaAnual').value)
    tiempoMeses = Number(document.getElementById ('tiempoMeses').value)
    let interesMensual = (interesAnual / 12) / 100
    capitalFinal = montoInvertir * (1 + interesMensual)**tiempoMeses
    interesAcumulado = capitalFinal - montoInvertir
    interesAcumulado2 = montoInvertir * interesMensual * tiempoMeses
    capitalFinal2 = interesAcumulado2 + montoInvertir
    let respuesta = document.getElementById('respuesta')
    respuesta.className = "mostrar cajas"
    respuesta.innerHTML=`<h2>Resultado</h2>
                        <p>El <i>INTERES COMPUESTO</i> acumulado será de <span class="verde">$${interesAcumulado.toFixed(2)}</span></p>
                        <p>Al finalizar los ${tiempoMeses} meses usted tendría <span class="verde">$${capitalFinal.toFixed(2)}</span> disponible</p>
                        <p>El <i>INTERES SIMPLE</i> acumulado será de <span class="verde">$${interesAcumulado2.toFixed(2)}</span></p>
                        <p>Al finalizar los ${tiempoMeses} meses usted tendría <span class="verde">$${capitalFinal2.toFixed(2)}</span> disponible</p>`
                        guardarLocalStorage()
                        
}
function verUltimoCalculo(){
    let capital = Number(localStorage.getItem("capital"))
    let interes = Number(localStorage.getItem("interes"))
    let capital2 = Number(localStorage.getItem("capital2"))
    let interes2 = Number(localStorage.getItem("interes2"))
    let historial = document.getElementById('historial')
    historial.className = "mostrar cajas"    
    historial.innerHTML = `<h2>Último Cálculo Realizado</h2>
                        <p>El <i>INTERES COMPUESTO</i> acumulado será de <span class="verde">$${interes.toFixed(2)}</span></p>
                        <p>Al finalizar los ${tiempoMeses} meses usted tendría <span class="verde">$${capital.toFixed(2)}</span> disponible</p>
                        <p>El <i>INTERES SIMPLE</i> acumulado será de <span class="verde">$${interes2.toFixed(2)}</span></p>
                        <p>Al finalizar los ${tiempoMeses} meses usted tendría <span class="verde">$${capital2.toFixed(2)}</span> disponible</p>`
}