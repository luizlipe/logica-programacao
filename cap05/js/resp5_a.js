const prompt = require("prompt-sync")()
const fruta = prompt("Fruta: ")
const repeticao = Number(prompt("Número: "))

for(let i = 0; i < repeticao; i++){
    console.log(fruta)
}

