const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const senha = frm.inSenha.value
    const erros = []


    //verifica se o tamanho da senha é inválido
    if(senha.length < 8 || senha.length > 15){
        erros.push("Possuir entre 8 e 15 caracteres")
    }

    //Verifica se não possui números
    if(senha.match(/[0-9]/g) == null){
        erros.push("possuir numeros (no minimo, 1)")
    }

    //verifica se não possui letras minusculas
    if(!senha.match(/[a-z]/g)){
        erros.push("possuir letras minusculas (no minimo, 1)")
    }

    //verifica se não possui letras maiusculas ou se possui apenas 1
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push("possuir letras maisculas (no minimo, 2)")
    }
    //verfica se nao possui simbolos ou "_"
    if(!senha.match(/[\W|_]/g)){
        erros.push("possuir simbolos (no minimo, 1)")
    }
    //se o vetor esta vazio (significa que não foram encontrados erros
    if(erros.length == 0){
        resp.innerText = "Ok! Senha Válida"
    }else{
        resp.innerText = `Erro... A senha deve ${erros.join(", ")}` 
    }
})