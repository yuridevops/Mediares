import React, { useState, useEffect } from 'react'
import './evento-card.css'
import { Link } from 'react-router-dom'
import firebase from '../../config/firebase'


function EventoCard({id, img, titulo, detalhes, visualizacoes}) {

    const [urlImagem,setUrlImagem] = useState()
    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL()
        .then(url => {
            setUrlImagem(url)
        })
    },[])
    return (
       
            <div className="col-md-3 my-4 mx-auto">
                <img id="banner-evento" src={urlImagem} className=" img-cartao" alt="Imagem do evento" />
                <div className="card-body">
                    <h5>{titulo}</h5>
                    <p className="card-text text-justify">{detalhes}</p>

                    <div className="row rodape-card d-flex align-itens-center">

                        <div className="col-6 text-right">
                            <Link to={"/eventodetalhes/"+id} className="btn btn-sm btn-detalhes" >Ver detalhes</Link>
                        </div>
                        <div className="col-6 text-right">
                            <i className="fas fa-eye" /><span> 2020</span>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default EventoCard