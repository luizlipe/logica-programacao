const frm = document.querySelector('form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista = ''
    for( let i = 0; i < pacientes.length; i++){
        lista += pacientes[i] + '\n'
    }
    respLista.innerText = lista
    frm.inPaciente.value = ''
    frm.inPaciente.focus()
})

frm.btUrgencia.addEventListener('click', () => {
    if(!frm.checkValidity()){
        alert("Preencha o nome do paciente para ser atendido em carater de urgencia")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ''
    pacientes.forEach((paciente, i) => (lista += paciente + '\n'))
        
    respLista.innerText = lista
    frm.inPaciente.value = ''
    frm.inPaciente.focus()
})
   
frm.btAtender.addEventListener('click', () => {
    if(pacientes.length == 0){
        alert("Não há pacientes na fila")
        frm.inPaciente.focus()
        return
    
    }

    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ''
    pacientes.forEach((paciente, i) => (lista += paciente + '\n'))
        
    respLista.innerText = lista
})
