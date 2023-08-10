// Cria referencia ao form e a o elemento h3 (onde sera exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    resp.innerText = `Olá ${nome}`
    e.preventDefault() //Envia o formulario
})