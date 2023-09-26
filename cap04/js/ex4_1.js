// Cria referencia ao form e elementos de resposta ao programa
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// Cria um "ouvinte" de evento, acionado quando o form for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault(); // evita que o formulário seja enviado
    const nome = frm.inNome.value //Obtobtém o contéudo do campo nome
    const nota1 = Number(frm.inNota1.value) //Obtém o contéudo do campo nota1
    const nota2 = Number(frm.inNota2.value) //Obtém o contéudo do campo nota2
    const media = (nota1 + nota2) / 2  //Calcula a média
    resp1.innerText = `Média das notas ${media.toFixed(2)}`
    // Cria as condições
    if(media >= 7){
        resp2.innerText = `Parabens ${nome}! Vocé foi aprovado(a)`
        resp2.style.color = 'green'
    }else if(media >= 4){
        resp2.innerText = `Vocé está de recuperação ${nome}`
        resp2.style.color = 'blue'
    
    }
    else{
        resp2.innerText = `Que pena ${nome}... Vocé foi reprovado(a)`
        resp2.style.color = 'red'
    }
    
})
