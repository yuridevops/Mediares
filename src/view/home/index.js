import React, { useState, useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { useSelector } from 'react-redux'
import Footer from '../../components/footer'
import EventoCard from '../../components/evento-card'
import firebase from '../../config/firebase'

function Home() {

    const [eventos,setEventos] = useState([])
    let listaEventos = []

    useEffect(() => {
        firebase.firestore().collection('eventos').get()
        .then(async (resultado) => {
            await resultado.docs.forEach( doc => {
                listaEventos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setEventos(listaEventos)
        })
    },[])

    return (
        <>
            <Navbar />
            <div className='main-body'>
                <input type="text" className="form-control" placeholder="Procurar evento pelo titulo"/>
                <div className="row p-3">
                    {
                        eventos.map(evento => (
                            <EventoCard id={evento.id} img={evento.foto} titulo={evento.titulo} 
                            detalhes={evento.detalhes} visualizacoes = {evento.visualizacoes} />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}



export default Home