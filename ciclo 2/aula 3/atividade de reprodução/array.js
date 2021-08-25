


//trabalhando com string


var frutas = ["Uva" , "Banana" , "Amora" , "Melão"]; 

console.log(`Quantidade de array: ${frutas.length}, fruta: ${frutas[0]}`);

var frutas2 = ["Maça" , "Pera" , "Laranja"];

var todasAsFrutas = frutas.concat(frutas2); //concat concatena informações

console.log(frutas);
console.log(todasAsFrutas);

var retornoIndexOf = todasAsFrutas.indexOf("Laranja"); //indexOf procura um elemento especifico no array
console.log(retornoIndexOf);


//join junta todos os elementos de um array em uma string

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray); 

//push inseri um novo elemento no final da lista

var outraLista = ["Bola" , "Peteca"];
var novaLista = outraLista.push("Boneca" , "Qualquer brinqueto");  

console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

//pop() remove o ultimo elemento do array

console.log(outraLista.pop());
console.log(outraLista);

//reverse() inverte a ordem dos elementos do array


console.log(outraLista.reverse());

//shift() remove o primeiro elemento do array

var removerPrimeiro = ["Fusca" , "Variante"];
console.log(removerPrimeiro);
console.log(removerPrimeiro.shift());
console.log(removerPrimeiro);

//sort() ordena os elementos do array em ordem crescente

var alfa = ["b" , "t" , "z" , "a"];
alfa.sort(); //outra maneira de buscar o recurso do array
console.log(alfa);

var alfa2 = [2 , 7 , 5 , 1];
alfa2.sort(); //outra maneira de buscar o recurso do array
console.log(alfa2);


//toString() converte um array em string e retorna essa string

// vide join igual ao de cima

// unshift() insere um novo elemento no inicio do array

alfa2.unshift(10);
alfa2.sort();
console.log(alfa2);



//splice() corta o arrray em um ponto indicado dois parametos indice e quantos elementos quer remover a partir da posição

var f = ["Uva" , "Banana" , "Amora" , "Melão"];
var idx = f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx, 1));
console.log(f);


//console.log(f.splice(2)); //corta os elemento anterior ao indice 2, cortou o 0 e o 1.



// arrays de obejtos

var dados = [
		
		{nome: "Ricardo"}, //indice [0]
		{nome: "Mariany"}  //indice [1]

]


console.log(dados[0].nome)
console.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : doc[0],
		cpf : doc[1]
	}
}


var pessoa2 = new Pessoa2("Junior" , "" , "" , ["22" , "555"]);

//console.log(" Nome "+ pessoa2.nome +" "+ pessoa2.doc.rg);

console.log(pessoa2); 












