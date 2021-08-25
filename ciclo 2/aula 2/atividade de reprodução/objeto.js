
/*

	var / let / const



*/
/*
var nome = "Ricardo" // variavel global

let sobreNome =  "weihmayr";  


if(true){
	console.log("Var nome "+ nome);   
	var nm = nome;   
	console.log ("Chamando o sobreNome "+ sobreNome);
	let sn = "Da Silva";
	console.log(teste);
}

console.log ("Meu no é "+nm+" "+sobreNome+" "+sn); 
console.log("Var nome= "+ nm);   
*/

var Pessoa = {

	nome: "Ricardo",
	rua: "Rua Flamengo",
	ncasa: "55",  
	dados: function(){
		document.write(
			"Nome...:"+this.nome+"<br>"+
			"Rua....:"+this.rua+"<br>"+
			"N. casa...:"+this.ncasa+"<br>")}

}

Pessoa.dados();


console.log("Nome " +Pessoa.nome+ 
	" Endereço" +Pessoa.rua+ 
	" N " +Pessoa.ncasa);




















