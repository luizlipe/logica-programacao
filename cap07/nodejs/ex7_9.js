const prompt = require("prompt-sync")()
const formula = prompt("Fórmula: ")
let abre = 0
let fecha = 0
for(const simbolo of formula){
    if(simbolo == "("){
        abre++
    }else if( simbolo == ")"){
        fecha++
    }
    if( fecha > abre){
        break
    }

    if(abre == fecha){
        console.log("Ok! formula correta (em relação aos parenteses)")
    }else{
        console.log("Erro... Formula incorreta")
    }
}