import React, { useState } from 'react'
import './evento-cadastro.css'
import firebase from '../../config/firebase'
import 'firebase/auth'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar'

function EventoCadastro() {
    const [msgTipo, setMsgTipo] = useState()
    const [titulo, setTitulo] = useState()
    const [tipo, setTipo] = useState()
    const [detalhes, setDetalhes] = useState()
    const [data, setData] = useState()
    const [hora, setHora] = useState()
    const [foto, setFoto] = useState()
    const [carregando, setCarregando] = useState(false)

    const storage = firebase.storage()
    const db = firebase.firestore()
    const usuarioEmail = useSelector(state => state.usuarioEmail)


    function cadastrar() {
        if (foto === undefined){
            alert('Foto e obrigatoria!')
            return 
        } 
        storage.ref(`imagens/${foto.name}`).put(foto).then(() => {
            setCarregando(true)
            console.log()
            db.collection('eventos').add({
                titulo: titulo,
                tipo: tipo,
                detalhes: detalhes,
                data: data,
                hora: hora,
                usuario: usuarioEmail,
                visualizacoes: 0,
                foto: foto.name,
                publico: true,
                cricao: new Date()
            }).then(() => {
                setMsgTipo('Sucesso')
            }).catch((e) => {
                setMsgTipo('Erro')
            })
        }).catch(e => {
            setMsgTipo('Erro')
        }).finally(e => {
            setCarregando(false)
        })
    }


    return (
        <>
            <Navbar />
            <div className="col-12">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold mt-5">Novo evento</h3>
                </div>
                <form className="form-cadastro mx-auto">
                    <div className="form-group ">
                        <label>Titulo:</label>
                        <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tipo do evento:</label>
                        <select onChange={(e) => setTipo(e.target.value)} className="form-control">
                            <option disabled selected>-- Selecione um tipo --</option>
                            <option>festa</option>
                            <option>teatro</option>
                            <option>show</option>
                            <option>evento</option>
                        </select>
                    </div>
                    <div className="form-group ">
                        <label>Descricao do evento:</label>
                        <textarea onChange={(e) => setDetalhes(e.target.value)} className="form-control" rows="3" />
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Dia do evento:</label>
                            <input onChange={(e) => setData(e.target.value)} type="date" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Hora do evento:</label>
                            <input onChange={(e) => setHora(e.target.value)} type="time" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group ">
                        <label>Upload da Foto:</label>
                        <input type="file" onChange={(e) => setFoto(e.target.files[0])} className="form-control" />
                    </div>
                    {
                        carregando ?
                            <div class="spinner-border text-danger spinner" role="status"> <span class="sr-only">Carregando...</span></div>
                            :
                            <button type="button" onClick={cadastrar} className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>
                    }
                </form>

                <div className="msg-login text-black text-center my-2 ">

                    {msgTipo === 'Sucesso' && <div class="alert alert-success" role="alert">
                        Evento cadastrado com sucesso   !
                        </div>}

                    {msgTipo === 'Erro' && <div class="alert alert-danger" role="alert">
                        Falha ao cadastrar evento   !
                        </div>}

                </div>
            </div>
        </>
    )
}

export default EventoCadastro