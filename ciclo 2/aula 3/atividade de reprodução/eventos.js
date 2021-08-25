
//DOM
//window.documento é o inicio da arvore DOM
//dentro do window tem metodo, atributos, eventos etc.  
//eventos= click, passar o mouse, mudar de cor etc.  




window.onload = function(){
	//alert("Olá Mundo");  

	const btn1 = document.querySelector("#btn1");  
	const legP = document.querySelector(".legenda");  
	const cxTexto = document.querySelector("#texto");

	function mgs(){
		alert("Olá");
	}

	
	btn1.addEventListener('click', ()=>{

			legP.innerHTML += cxTexto.value;  // + concatena
	});  


	btn1.addEventListener('click', ()=>{
		legP.innerHTML = " "; //deixa em branco
	})


	/*legP.addEventListener("mouseout", ()=>{
		alert("teste")
	})*/



//trocar tipo do elemento ex: password para text
const trocarSenha = document.querySelector("#verSenha");
const cxSenha = document.querySelector("#senha");

	trocarSenha.addEventListener('click', ()=>{
		//getAttribute() pega o tipo do elemento
		//setattribute() atribuir um tipo ao elemento 

		if(cxSenha.getAttribute() == 'password'){
			cxSenha.setAttribute("type", "text")
		} else{
			cxSenha.setAttribute("type", "password")
		}
	});



//alterar background da caixa de texto
const cxTrocaBg = document.querySelector("#cxTbg");
	//blur quando desfocar despara uma ação 

	cxTrocaBg.addEventListener('blur' , ()=>{
	cxTrocaBg.setAttribute('class' , "corBg")
	}); 



//somar valores cx input text
const valor1 = document.querySelector("#v1");
const valor2 = document.querySelector("#v2");
const btnSomar = document.querySelector("#soma");
const spResultado = document.querySelector("#resultado");


btnSomar.addEventListener('click',()=>{

	var cx1 = valor1.value;
	var cx2 = valor2.value;
	var r = Number(cx1) + Number(cx2);

	spResultado.innerHTML = r;  
});



//evento modal 

const btnModal = document.querySelector("#chamarModal");
const janelaM = document.querySelector("#janModal");
const closeMod = document.querySelector("#fechaModal");


btnModal.addEventListener("click", ()=>{
janelaM.setAttribute("class" , "modal"); 

})

//quando receber um click vai remover o nosso modal
closeMod.addEventListener("click" , ()=>{
	janelaM.classList.remove("modal");
});


}































