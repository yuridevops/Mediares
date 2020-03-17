import React, { useState } from 'react'
import './login.css'
import firebase from '../../config/firebase'
import 'firebase/auth'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../statics/imgs/logo-mediares.png'
function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [msgTipo, setMsgTipo] = useState('')

    const dispatch = useDispatch()

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(resultado => {
                setMsgTipo('Sucesso')
                dispatch({ type: 'LOG_IN', usuarioEmail: email })

            }).catch(erro => {
                setMsgTipo('Erro')
            })
    }

    return (
        <div className="login-content d-flex align-items-center">

            {
                useSelector(state => state.usuarioLogado) ? <Redirect to='/' /> : null
            }

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-5" src={Logo} alt="" width="240" height="216" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>


                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />



                <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5 ">

                    {msgTipo === 'Sucesso' && <span><strong>WoW! </strong>Você está conectado! &#128526;</span>}
                    {msgTipo === 'Erro' && <span><strong>Ops! </strong>Verifique se a senha ou o usuários estão corretos! &#128543;</span>}


                </div>

                <div className="opcoes-login mt-5 text-center">
                    <Link to={'/recuperarsenha'} className="mx-2">Recuperar senha</Link>
                    <span className="text-white">&#9775;</span>
                    <Link to={'/novousuario'} className="mx-2">Quero cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
