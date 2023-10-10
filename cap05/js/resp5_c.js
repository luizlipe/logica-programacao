const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function ehNumeroPerfeito(numero) {
  if (numero <= 0) {
    return false;
  }


  let somaDivisores = 0;


  for (let i = 1; i <= numero / 2; i++) {
    if (numero % i === 0) {
      somaDivisores += i;
    }
  }


  return somaDivisores === numero;
}

rl.question('Digite um número para verificar se é perfeito: ', (numero) => {
  numero = parseInt(numero);

  if (ehNumeroPerfeito(numero)) {
    console.log(numero + ' é um número perfeito.');
  } else {
    console.log(numero + ' não é um número perfeito.');
  }

  rl.close();
});
