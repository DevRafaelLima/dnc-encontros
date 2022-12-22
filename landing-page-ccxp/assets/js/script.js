let dias = document.querySelector('#dias')
let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

let lancamento = '23 oct 2023'

function countDown() {
    const dataLancamento = new Date(lancamento)
    const dataHoje = new Date()

    const segTotal = (dataLancamento - dataHoje) / 1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segTotal / 60 ) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dias.innerHTML = formatoTempo(finalDias)
    horas.innerHTML = formatoTempo(finalHoras)
    minutos.innerHTML = formatoTempo(finalMinutos)
    segundos.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}`: tempo
}
countDown()
setInterval(countDown, 1000)