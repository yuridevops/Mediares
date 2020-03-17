import React, { useState } from 'react'
import firebase from '../../config/firebase'
import 'firebase/auth'
import Navbar from '../../components/navbar'

import './usuario-novo.css'

function NovoUsuario() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [msgTipo, setMsgTipo] = useState('')
    const [msg, setMsg] = useState('')
    const [carregando, setCarregando] = useState(false)

    function cadastrar() {
        setCarregando(true)

        setMsgTipo(null)

        if (!email || !senha) {
            setMsgTipo('Erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro')
            return
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(resultado => {
                setMsgTipo('Sucesso')
            }).catch(erro => {
                setMsgTipo('Erro')
                switch (erro.message) {
                    case 'Password should be at least 6 characters':
                        setMsg('A senha deve ter pelo menos 6 caracteres')
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg('Este email ja esta sendo utilizado por outro usuario')
                        break;
                    case 'The email address is badly formatted.':
                        setMsg('O formato do email digitado e invalido')
                        break;
                    default:
                        setMsg('Nao foi possivel cadastrar. Tente novamente mais tarde!')
                        break;
                }
            }).finally(() => {
                setCarregando(false)
            })
    }

    return (
        <>
            <Navbar/>

            <div className="form-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

                    {carregando ? <div class="spinner-border text-danger" role="status"> <span class="sr-only">Carregando...</span></div>
                        :
                        <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                    }

                    <div className="msg-login text-black text-center my-5 ">

                        {msgTipo === 'Sucesso' && <span><strong>WoW! </strong>Usuario cadastrado com sucesso! &#128526;</span>}
                        {msgTipo === 'Erro' && <span><strong>Ops! </strong>{msg}! &#128543;</span>}

                    </div>
                </form>
            </div>
        </>
        
    )
}

export default NovoUsuario