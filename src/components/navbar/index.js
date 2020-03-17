import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import usuarioReducer from '../../store/usuarioReducer'
import Logo from '../../statics/imgs/logo-mediares.png'

function Navbar() {

    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg ">
            <img className="mr-3" src={Logo} alt="" width="80" height="72" />
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>

                    {
                        useSelector(state => state.usuarioLogado) ?
                            <>
                                <li className="nav-item "><Link className="nav-link" to=''>Publicar Evento</Link></li>
                                <li className="nav-item"><Link className="nav-link" to=''>Meus Eventos</Link></li>
                            </>
                            :
                            <>
                                
                            </>

                    }
                </ul>
                <ul className="navbar-nav ml-auto">

                    {
                        useSelector(state => state.usuarioLogado) ?
                            <>
                                <li className="nav-item nav-border"><Link className="nav-link" onClick = {(e) =>{dispatch({type: 'LOG_OUT'})}} to='/'>Sair</Link></li>
                            </>
                            :
                            <>
                                <li className=" nav-border mx-1"><Link className="nav-link" to='/novousuario'>Cadastrar</Link></li>
                                <li className=" nav-border mx-1"><Link className="nav-link" to='/login'>Login</Link></li>
                            </>

                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar