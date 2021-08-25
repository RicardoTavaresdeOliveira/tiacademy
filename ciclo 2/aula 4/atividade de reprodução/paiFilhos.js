window.onload=function(){


const pai = document.querySelectorAll("#pai");

//forEach é um loop para procurar itens filhos de um elemento pai
pai.forEach((pegarFilhas)=>{

	//todos as filhas empagotadas/juntas
	pegarFilhas.addEventListener("click",(filha)=>{

		//buscar o item de cada item
		alert(filha.target.textContent);
	})
})


const btn = document.querySelector("#btn");
const outroPai = document.querySelector("#outroPai");  
var i=0;   
btn.addEventListener("click",()=>{

	let lista = ["Banana", "Uva", "Pera", "Manga"];

	li = document.createElement("li");
    //tem o removeChild para retirar elementos da lista
	outroPai.appendChild(li).textContent = "Elemento Filho";   



})



























}


























