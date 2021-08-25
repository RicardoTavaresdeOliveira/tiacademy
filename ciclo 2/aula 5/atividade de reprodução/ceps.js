window.onload = function(){


//alert("ola mundo");



//mapeou o botão do HTML
const btnBuscaCep = document.querySelector("#btnBuscaCep");
//mapeou da caixa de Cep do HTML
const cxCep = document.querySelector(".cxCep");

const dadosCep = async function (cepUrl){
	
	var url = `https://viacep.com.br/ws/${cepUrl}/json/`
	var consultaCep = await fetch(url);
	var dadosCep = await consultaCep.json();   

	//console.log(dadosCep);
	for( var campos in dadosCep){
		console.log(campos);   
		if(document.querySelector("#"+campos)){
			document.querySelector("#"+campos).value = dadosCep[campos]
		}
	}
} 


btnBuscaCep.addEventListener("click", ()=>{

	let cep = cxCep.value;
	dadosCep(cep);
	



})











}//fim do window