//Criar um contador que va do 1 ao 10, e mostre cada numero
alert('Seja bem vindo ao contador digital');
let contador = 1;

while (contador < 5) {
    console.log('executando a contagem' + contador);
    alert(contador);
    contador++;
}

//Criar um contador que va do 10 ao 1, e mostre cada numero
alert('Seja bem vindo ao contador digital');
let contador2 = 10;

while (contador2 > 0) {
    console.log(`executando a contagem ${contador2}`);
    alert(contador2);
    contador2--;
}

//Crie um programa de contagem regressiva, Peça um numero e conte ate 0
alert('Vamos fazer uma contagem regressiva?');
let contador3 = prompt(`insira um número para começarmos`);

while (contador3 > 0) {
    console.log(`executando a contagem em  ${contador3}`);
    alert(contador3);
    contador3--;
}

//Crie um programa de contagem progressiva, Peça um numero e conte de 0 ate el
alert('Vamos fazer uma contagem?');
let contador4 = prompt(`insira um número para começarmos`);
let limite = 1;

while (limite <= contador4) {
    console.log(`executando a contagem em  ${limite}`);
    alert(limite);
    limite++;
}
