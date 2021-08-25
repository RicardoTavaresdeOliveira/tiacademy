

var nome = prompt("Qual é o seu nome");
document.write("Seja bem vindo " + nome); 
document.write("<br/>");  

var nome2 = prompt("Olá, " + nome + ", digite um número");  


var numero = parseInt (nome2);
document.write("Você digitou o número " + numero);
document.write("<br/>");

var booleano = numero >= 30? true : false; 
document.write("O retorno da comparação booleana é " + booleano);
document.write("<br/>");

var soma = numero + numero; 
document.write("A soma dos valores é " + soma);
document.write("<br/>");

var subtrair = numero - numero;
document.write("A subtração dos valores é " + subtrair);
document.write("<br/>");

var resto = numero%numero; 
document.write("O resto da divisão é de " + resto);
document.write("<br/>");

var quadrado = numero * numero; 
document.write("O quadrado do número digitado é " + quadrado);
document.write("<br/>");
















