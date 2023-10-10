const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = `Entra ${numero} e 1/: `
    for(let i = numero; i> 1; i-- ){
        resposta = resposta = i + ", "
    }
})