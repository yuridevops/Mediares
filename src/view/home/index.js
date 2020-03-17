import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { useSelector } from 'react-redux'
import Footer from '../../components/footer'

function Home() {
    return (
        <>
            <Navbar />
            <div className='main-body'>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
                <h1>{useSelector(state => state.usuarioEmail)}</h1>
            </div>
        </>
    )
}



export default Home