const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;


app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.post('/clientes', async(req,res)=>{
    let create=await servico.create({
        nome: "Ricardo Tavares",
        endereco: "Rua Flamengo, 55",
        cidade: "Nova Esperança",
        uf: "PR",
        nascimento: "1985-06-19"
    });
    req.body

    res.send('Serviço foi inserido!');
});

app.get('/pedidos', function(req,res){
    res.send('Lista de pedido');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        rep.body
    );
    res.send('Serviço foi inserido!');
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});
