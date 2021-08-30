window.onload=function(){


//produtos
(()=>{

	let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

	for (let idx in produtos){

		mostrarProdutosCliente.innerHTML += `<li class='itemProduto' data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`;

	}
  
})(produtos);



//compra

const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");   

const cestaDoCliente = document.querySelector("ul#cestaDoCliente");  

const mostraTotalCompra = document.querySelector("#mostraTotalCompra"); 

const armazenaIten = [];

var totalPedido = 0;


itemProduto.forEach((item)=>{

	item.addEventListener("click",()=>{

		li = document.createElement("li");
				
		if(armazenaIten.indexOf(item.textContent) == -1){

			armazenaIten.push(item.textContent);
			cestaDoCliente.appendChild(li).textContent = item.textContent = item.textContent;
			totalPedido += Number(item.dataset.preco);
			mostraTotalCompra.value = totalPedido.toLocaleString('pr-BR',
				{style: 'currency', currency: 'BRL'}

				)

		}else{
			alert(`Este item ${item.textContent} já está na sua cesta`);
		}

	})

});

const removerItems = document.querySelectorAll("ul#cestaDoCliente");

	removerItems.forEach((removeItem)=>{
    	
    	removeItem.addEventListener("click", (Itens)=>{
        
        let indexProduto=armazenaIten.indexOf(produto.target.textContent);

					if (indexProduto > -1){
						if(confirm(`Tem certeza que você quer remover ${produto.textContent} de sua cesta?`)){
							armazenaIten.splice(indexProduto, 1); 
							totalPedido-=Number(produto.target.dataset.preco);
								if(totalPedido<=0){	
									totalPedido=0;
								}

							cestaDoCliente.removeChild(produto.target);
							mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
						}
					}

    })
})


};//fim do window.onload


















