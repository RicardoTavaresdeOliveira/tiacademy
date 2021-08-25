//o modulo é criado para dar performace no HTML, 
//pode reaproveitar codigo já criado neste arquivo. 

const msgLog = function(msg=""){

	try{

		if(msg.length <=6) {throw "Digite uma mensagem válida"}

			alert(msg)

	} catch(err){
		alert(`Erro: ${err}`)
	}
const Produtos = [
	{codigoProdutos: 1, 
		descProduto: "Mesa",
		precoProduto:890.00}
]


export {msgLog, Produto}



}

