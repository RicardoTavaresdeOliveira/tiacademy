

/*
var nome = "Ricardo";

console.log(nome.length); //comprimento de letras
console.log(nome[3]); //escolher o indice a apresentar





//match
//procura uma palavra em uma string
//tras a letra e a posição

var palavras = "Maça doce";   

console.log(palavras.match(/D/gi)); //gi = ajuda na diferença da maiusculo da minusculo
*/





//search()
//tras a posição
//var palavras = "Maça doce";   

//console.log(palavras.search(/d/gi));







//replace()
//substitui uma carreira de caracter por outra dentro da string
/*
var str = "Lorem ipsum dolor, sit amet consectetur"+
"adipisicing elit. Pariatur incidunt asperiores";

var mudarStr = str.replace(/e/gi,'X'); //substituiu a letra e pela X, gi ignora a caixa alta

console.log(mudarStr);
*/





//localCompare()
//faz comparação entre duas string, quando enconta retorn zero, não encontra retorna diferente de zero;
/*
var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase(); //tolowercase é para deixar tudo em caixa baixa
var c2 = comp2.toLowerCase();

//console.log(`Este é o c1: ${c1} Este é o c2 ${c2}`);

var comparacao = comp1.localeCompare(/comp2/gi);
//console.log(comparacao);//retornou 1, 
*/




//trim
//remove espaço antes e depois da string solicitada


/*var p = '     palavra    ';   
console.log(p);//com o espaço
console.log(p.trim());// sem o espaço
*/
//ou

var p = '    fpalavra+    ';   

var r = p.trim();
console.log(r);
var s = r.replace(/f/gi,''); 
console.log(s);
var sub_a = s.replace('+',' ');
console.log(`Removido: ${sub_a}`);  



//toLocaleString
//para formatar valor monetario; formatação de moedas.

var valor = 1.35 //1,35; tem que ser o ponto porque a virgula é um separador
var formatarMoeda = valor.toLocaleString('pt-BR',{
	style:'currency',
	currency:'BRL' 
})

console.log(formatarMoeda);






















