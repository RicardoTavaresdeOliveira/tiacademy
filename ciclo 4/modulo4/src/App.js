import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente/';
import {Menu} from './components/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { Servico } from './pages/Servico/Servico';

import { Cadastrar } from './pages/Servico/Cadastrar';
import { Editar } from './pages/Servico/Editar';


function App() {
  return (
    <div>
      <Menu/>
      <Router>

            <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/visualizarcliente" component={VisualizarCliente}/>
                <Route path="/visualizarservico" component={VisualizarServico}/>
                
                <Route path="/servico/:id" component={Servico}/>
                <Route path="/cadastrarservico/:id" component={Cadastrar}/>
                <Route path="/editarservico/:id" component={Editar}/>
                           
            </Switch>

      </Router>
    </div>
  );
}

export default App;
