import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {

    console.log(props.match.parans.id);

    const [data, setData] = useState([]);
    const [id, setID] = useState(props.match.parans.id);

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    console.log(response.data.servico);
                    setData(response.data.servico);
                })
                .catch(() => {
                    console.log("Erro: não foi possivel conectar a API.")
                })
        }
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Quantidade de pedidos do Serviço</h1>
                    </div>
                    
                    <div className="p-2">
                        <Link to="/visualizarservico" className="btn btn-outline-success btn-sm n-1" >Listar</Link>

                        <Link to={"/editarservico/"+data.id} className="btn btn-outline-warning btn-sn">Editar</Link>
                    </div>
                </div>
                
                <dl className="row">
                    <dt className="col-sm-3">Nome</dt>
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Valor total</dt>
                    <dd className="col-sm-9">{data}</dd>
                </dl>

            </Container>
        </div>
    )
}