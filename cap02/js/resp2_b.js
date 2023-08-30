const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const calc = Math.ceil(tempo / 15) * valor

    resp.innerText = `Valor a pagar R$: ${calc.toFixed(2)}`


    e.preventDefault()
})