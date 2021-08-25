

/*
function nome(parametros){
	//codigo que precisa ser executado
}
*/

//função sem parametro
function soma(){
	var x = 1;  
	var y = 2;  
	console.log(x+y);  
}

//chamar a função

//soma(); 

//função com parametro
function somaPar(x, y){
	var r = x + y;  //variavel local, só pode ser usada dentro deste escopo
	console.log(r);
}
// somaPar(4, 9);

/*
(function respostaF(){
	var nome = "Ricardo";
	alert(nome);
	return nome; 
})();
*/

//função anonima
//var f = function(){alert("função sem nome");}

//f(); 

//var d = respostaF();  

//repostaF();


//var ar = ()=>{alert("ArFunc")}

//ar();   

//(()=>{alert("ArFunc")})();  

/*
function mult(n, o){
	var resultado = n * o; 
	console.log(resultado);  
}

function pot(n, o){
	var resultado = Math.pow(n, o);
	console.log(resultado);
}

mult(4, 4);

pot(7, 3);
*/








