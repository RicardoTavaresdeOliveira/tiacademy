const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

//cada app criado é uma rota 
// inserir, consultar, atualizar, deletar

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(

		req.body

		);
	res.send('Cliente cadastrado!');
});

app.post('/servicos',async(req,res)=>{
	let create=await servico.create(

		req.body
		
		);
	res.send('Serviço Foi inserido!');
});

app.post('/pedidos', async(req,res)=>{
	let create=await pedido.create(

		req.body

		);
	res.send('E é aqui que você vai fazer os seus pedidos');
});

//consultar 
app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        order:[['nome', 'DESC']]
    }).theh(function(servicos){
        res.json({servicos});
    });
});

app.get('/ofertas', async(req, res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id',async(req,res)=>{
	servico.findByPk(req.params.id)
	.then(servico =>{
		return res.json({
			error: false,
			servico
		}).catch(function(erro){
			return res.status(400).json({
				error:true,
				message:"Código não está cadastrado!"
			});
		});
	});
});

//Atualizar serviço 
app.get('/atualizaservico',async(req,res)=>{
	await servico.findByPk(1)
	.then(servico =>{
		servico.nome='HTML/CSS/JS';
		servico.descricao='Páginas estáticas e dinâmicas estilizadas';
		servico.save();
		return res.json({servico});
	});
});

//Editar serviço
app.put('/editarservico',(req,res)=>{
	servico.update(req.body,{
		where: {id: req.body.id}
	}).then(function(){
		return res.json({
			error: false,
			message: "Serviço foi alterado com sucesso"
		});
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Erro na alteração do serviço"
		});
	});
});

app.get('/servicospedidos',async(req,res)=>{
	await servico.findByPk(1,{
		include:[{all:true}]
	}).then(servico =>{
		return res.json({servico});
	});
});

//Editar pedido
app.put('/editarpedido', (req,res)=>{
	pedido.update(req.body,{
		where: {ServicoId: req.body.ServicoId}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Pedido modificado com sucesso."
		});
	}).catch((erro)=>{
		return res.status(400).json({
			error: true, 
			message: "Não foi possível modificar o pedido!"
		});
	});
});

//Excluir cliente
app.get('/excluircliente',async(req,res)=>{
	cliente.destroy({
		where: {id: 2}
	});
	res.send("Cliente excluído com sucesso.")
});

app.delete('/apagarcliente/:id',(req,res)=>{
	cliente.destroy({
		where: {id: req.params.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Cliente foi excluido com sucesso."
		});
	}).catch(()=>{
		return res.status(400).json({
			error: true,
			message: "Não foi possível excluir o cliente."
		});
	});
});


//Exercio 1
app.get('/clientes', async(req,res)=>{
	await cliente.findAll({
		order: [['nome','DESC']]
	}).then(function(clientes){
		res.json({clientes});
	});
});


//Exercio 2
app.get('/ordenarclientes',async(req,res)=>{
	await cliente.findAll({
		order: [['id','ASC']]
	}).then(function(clientes){
		res.json({clientes});
	});
});


//Exercio 3
app.get('/listapedidos',async(req,res)=>{
	await pedido.findAll({
		order: [['id','ASC']]
	}).then(function(pedidos){
		res.json({pedidos});
	});
});


//Exercio 4
app.get('/pedepormaior',async(req,res)=>{
	await pedido.findAll({
		order: [['valor','DESC']]
	}).then(function(pedidos){
		res.json(pedidos);
	});
});


//Exercio 5
app.get('/countclientes',async(req,res)=>{
	await cliente.count('id').then(function(clientes){
		res.json(clientes);
	});
});


//Exercio 6
app.get('/qtpedidos',async(req,res)=>{
	await pedido.count('id').then(function(pedidos){
		res.json(pedidos);
	});
});


app.get('/servicosdeclientes/:id',async(req,res)=>{
	//exercício 1 do dia 5 do ciclo 3
	await cliente.findByPk(req.params.id,{include:[{all:true}]})
	.then(servicos =>{
		return res.json({servicos});
	});

});


app.put('/editarcliente',(req,res)=>{
	cliente.update(req.body,{
		where: {id: req.body.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Dados do cliente atualizados com sucesso."
		});
	}).catch((erro)=>{
		return res.status(400).json({
			error: true,
			message: "Erro ao tentar atualizar cliente."
		});
	});
});

app.put('/editarpedidoporid/:id',(req,res)=>{
	pedido.update(req.body,{
		where: {id: req.params.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Pedido atualizado com sucesso!"
		});
	}).catch((erro)=>{
		res.status(400).json({
			error: true,
			message: "Falha ao atualizar pedido."
		})
	});
});

app.get('/pedidosdeclientes/:id',async(req,res)=>{
	//desafio 1 do dia 5 do ciclo 3
	await cliente.findByPk(req.params.id,{include:[{all:true}]})
	.then(servicos =>{
		return res.json({servicos});
	});

});

app.put('/alterarcliente/:id',(req,res)=>{
	cliente.update(req.body,{
		where: {id: req.params.id}
	}).then(()=>{
		return res.json({
			error: false,
			message: "Cliente atualizado com sucesso!"
		});
	}).catch((erro)=>{
		res.status(400).json({
			error: true,
			message: "Falha ao atualizar cliente."
		})
	});
});


let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});





