const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a base do triângulo: ', (baseInt) => {
    rl.question('Informe a altura do triângulo: ', (alturaInt) => {
        const base = parseFloat(baseInt);
        const altura = parseFloat(alturaInt);
        if (isNaN(base) || isNaN(altura)) {
            console.log('Por favor, insira valores numéricos válidos.');
        } else {
            // Calcule a área do triângulo (base x altura / 2)
            const area = (base * altura) / 2;
            console.log(`A área do triângulo é: ${area}`);
        }

        rl.close();
    });
});