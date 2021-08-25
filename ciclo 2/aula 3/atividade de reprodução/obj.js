

function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}


var ps1 = new Pessoa("Ricardo", "Tavares")
	console.log("Nome "+ ps1.nome +" "+ ps1.sobrenome +" idade "+ ps1.idade);

var ps2 = new Pessoa("Mariany", "Ponceti")
	console.log("Nome "+ ps2.nome +" "+ ps2.sobrenome +" idade "+ ps2.idade);


var obpessoa = { rg : '7767' , cpf : '8989'

}
	//console.log(typeof(obpessoa));

	console.log(" RG: "+ obpessoa.rg); 


function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : '777'
		//cpf : '8989'
	}
}


var pessoa2 = new Pessoa2("Junior");

//console.log(" Nome "+ pessoa2.nome +" "+ pessoa2.doc.rg);

console.log('Nome ${pessoa2.nome} ')







