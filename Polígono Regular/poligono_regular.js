const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o número de lados do polígono regular: ', (numLadosInt) => {
  rl.question('Informe o comprimento de cada lado do polígono regular: ', (comprimentoLadoInt) => {
    const numLados = parseInt(numLadosInt);
    const comprimentoLado = parseFloat(comprimentoLadoInt);
    if (isNaN(numLados) || isNaN(comprimentoLado) || numLados < 3 || comprimentoLado <= 0) {
      console.log('Por favor, insira valores numéricos válidos, com mais de 2 lados, e com comprimento de lado maior que zero.');
    } else {
      const apotema = 5; 
      // Calcular a área do polígono regular
      const perimetro = numLados * comprimentoLado;
      const area = (perimetro * apotema) / 2;

      console.log(` área do polígono regular com ${numLados} lados e comprimento de lado ${comprimentoLado} é: ${area}`);
    }

    rl.close();
  });
});
