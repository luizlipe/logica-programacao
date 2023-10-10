 const chinchilas = 1;
 const triplica = 3;

// Número inicial de chinchilas
var numeroDeChinchilas = 1;

// Ano atual
var anoAtual = 0;

// Ano limite (você pode ajustar esse valor)
var anoLimite = 15;

while (anoAtual < anoLimite) {
  // Triplica o número de chinchilas a cada ano
  numeroDeChinchilas *= 3;
  
  // Incrementa o ano atual
  anoAtual++;
  
  // Exibe o número de chinchilas no ano atual
  console.log("Ano " + anoAtual + ": " + numeroDeChinchilas + " chinchilas");
}

console.log("Após " + anoLimite + " anos, haverá " + numeroDeChinchilas + " chinchilas.");

console.log(`Nº de Chinchilas: ${chinchilas}`)