const prompt = require("prompt-sync")() // Adiciona pacote para entrada de dados
const num1 = Number(prompt("1º Número: "))
const num2 = Number(prompt("2º Número: "))
const soma = num1 + num2
console.log(`Soma é: ${soma}`)
