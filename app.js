alert('Bem vindes ao jogo do número secreto!');
let numeroMaximo = 9999;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(`Número Secreto: ${numeroSecreto}`);

let chute;
let tentativas = 1;


// Manter o jogo funcionando com vários chutes
while (chute != numeroSecreto) {
    chute = prompt(`Chute um número entre 1 e ${numeroMaximo}`);

    // Comparação do chute com número secreto.
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`Você errou! O número secreto é menor que ${chute}!`);
        } else {
            alert(`Você errou! O número secreto é maior que ${chute}!`);
        }
       tentativas++;
    }
}

// Operador Ternário
// palavraTentativa: if tentativas is greater than 1, then (?) palavraTentativas = 'tentativas', if not (:), then palavraTentativa = 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);


