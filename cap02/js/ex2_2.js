// Cria referenciaao ao form e aos elementos h3 e h4 (resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um "ouvinte" de evento, acionado quando o botão de submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value // Obtem conteudo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // arredonda para baixo resultado
    const minutos = duracao % 60 // Obtem o resto da divisão

    resp1.innerText = titulo // exibe respostas
    resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`


    e.preventDefault() // Evita o envio do form
})