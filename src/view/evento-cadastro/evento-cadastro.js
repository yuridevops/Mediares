import React, { useState } from 'react'
import './evento-cadastro.css'
import firebase from '../../config/firebase'
import 'firebase/auth'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar'

function EventoCadastro() {
    const [msgTipo, setMsgTipo] = useState('Sucesso')
    return (
        <>
            <Navbar />
            <div className="col-12">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold mt-5">Novo evento</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label>Titulo:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tipo do evento:</label>
                        <select className="form-control">
                            <option disabled selected>-- Selecione um tipo --</option>
                            <option>festa</option>
                            <option>teatro</option>
                            <option>show</option>
                            <option>evento</option>
                        </select>
                    </div>
                    <div className="form-group ">
                        <label>Descricao do evento:</label>
                        <textarea className="form-control" rows="3" />
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Dia do evento:</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Hora do evento:</label>
                            <input type="time" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group ">
                        <label>Upload da Foto:</label>
                        <input type="file" className="form-control" />
                    </div>
                    <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>
                </form>

                <div className="msg-login text-black text-center my-2 ">

                    {msgTipo === 'Sucesso' && <span><strong>WoW! </strong>Usuario cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === 'Erro' && <span><strong>Ops! </strong>Algo deu errado! &#128543;</span>}

                </div>
            </div>
        </>
    )
}

export default EventoCadastro