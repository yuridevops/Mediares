import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux';

//Paginas
import Login from './view/login'
import NovoUsuario from './view/usuario-novo'
import UsuarioRecuperarSenha from './view/recuperar-senha'
import Home from './view/home';
import Footer from './components/footer';
import EventoCadastro from './view/evento-cadastro/evento-cadastro';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="router-body">
        <Route exact path='/login' component={Login} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/recuperarsenha' component={UsuarioRecuperarSenha} />
        <Route exact path='/eventocadastro' component={EventoCadastro} />
        <Route exact path='/' component={Home} />
        </div> 
      </Router>
      <Footer />
    </Provider>
    
  );
}

export default App;
