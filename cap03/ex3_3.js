const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Math.floor(tempo / 4)
const acrecimo = salario * quadrienios /100
console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario+acrecimo).toFixed(2)}`)