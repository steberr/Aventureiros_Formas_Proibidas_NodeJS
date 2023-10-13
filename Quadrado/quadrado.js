const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o lado do quadrado: ', (ladoInput) => {
  const lado = parseFloat(ladoInput);
  if (isNaN(lado) || lado <= 0) {
    console.log('Por favor, insira um valor numérico válido e positivo.');
  } else {
    // Calcular a área do quadrado (lado * lado)
    const area = lado * lado;
    console.log(`A área do quadrado é: ${area}`);
  }

  rl.close();
});




