const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe a base maior do trapézio: ', (baseMaiorInt) => {
  rl.question('Informe a base menor do trapézio: ', (baseMenorInt) => {
    rl.question('Informe a altura do trapézio: ', (alturaInt) => {
      const baseMaior = parseFloat(baseMaiorInt);
      const baseMenor = parseFloat(baseMenorInt);
      const altura = parseFloat(alturaInt);
      if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura) || baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
        console.log('Por favor, insira valores numéricos válidos e positivos para as bases e a altura.');
      } else {
        // Calcule a área do trapézio ((baseMaior + baseMenor) * altura / 2)
        const area = ((baseMaior + baseMenor) * altura) / 2;
        console.log(`A área do trapézio é: ${area}`);
      }

      rl.close();
    });
  });
});
