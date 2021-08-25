

var nome = prompt("Qual é o seu nome");
document.write("Seja bem vindo " + nome); 
document.write("<br/>");  

var nome2 = prompt("Olá, " + nome + ", digite um número"); 

var str = nome2;
	alert("Uma string foi enviada");

var conv = nome2;
	alert("A string será convertida para número");

var numero = parseFloat (nome2);
document.write("Você digitou o número " + numero);
document.write("<br/>");

var inteiro = numero;
if (Number.isInteger(inteiro)) {
    document.write("É um número inteiro");
} else{
	document.write("Não é um número inteiro");
}
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


var fruta = prompt("Escolha uma entre essas frutas (Laranja, Uva, Pera ou Manga)");

switch(fruta){
	
	case "Laranja":
		document.write("Voce escolheu a fruta Laranja")
	break;

	case "Uva":
		document.write("Voce escolheu a fruta Uva")
	break; 

	case "Pera":
		document.write("Voce escolheu a fruta Pera")
	break; 

	case "Manga":
		document.write("Voce escolheu a fruta Manga")
	break; 

	default:  
		document.write(nome + ", a fruta escolhida não está na lista")

}
















