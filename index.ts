/* eslint-disable no-magic-numbers */
import { question } from 'readline-sync';
console.log('Lanchonete do Guilherme');


console.log(`            ~~~~~Cardapio~~~~~;
CÓDIGO        DESCRICAO           VALOR(R$)I;
I 100    I   CACHORRO QUENTE       I  9.00
I 101    I   CACHORRO QUENTE DUPLO I  11.00
I 102    I   X - EGG               I  12.00
I 103    I   X - SALADA            I  13.00
I 104    I   X - BACON             I  14.00
I 105    I   X - TUDO              I  17.00
I 200    I   REFRI LATA            I  5.00
I 201    I   CHA GELADO            I  4.00)`);


let repetir = true;
let valor = 0;
while (repetir) {
    repetir = true;

    const pedido = Number(question('Por favor, Digite o codigo do seu pedido: '));
    switch (pedido) {
    case 100:
        console.log('Voce adicionou um CACHORRO QUENTE  NO VALOR DE R$9.00');
        valor += 9;
        break;

    case 101:
        console.log('voce adicionou um CACHORRO QUENTE NO VALOR DE R$ 11.00');
        valor += 11;
        break;

    case 102:
        console.log('voce adicionou um X-EGG NO VALOR DE R$ 12.00');
        valor += 12;
        break;


    case 103:
        console.log('voce adicionou um X-SALADA NO VALOR DE R$ 13.00');
        valor += 13;
        break;

    case 104:
        console.log('voce adicionou um X-BACON NO VALOR DE R$ 14.00');
        valor += 14;
        break;

    case 105:
        console.log('voce adicionou um X-TUDO NO VALOR DE  R$ 17.00');
        valor += 17;
        break;

    case 200:
        console.log('voce adicionou um X-EGG NO VALOR DE 12 R$ 12.00');
        valor += 12;
        break;

    case 201:
        console.log('voce adicionou um REFRI LATA NO VALOR DE R$ 5.00');
        valor += 5;
        break;
    }
    const pedirmais = question('Deseja pedir algo mais? \n (S/N) -->').toUpperCase();
    repetir = pedirmais === 'S';
    if (pedirmais === 'S') {
        repetir = true;
    } else if (pedirmais === 'N') {
        repetir = false;
    }
}

console.log(`O valor total a ser pago do seu pedido é: R$ ${valor.toFixed(2)}`);
console.log('A Lanchonete agradece o seu pedido!');
