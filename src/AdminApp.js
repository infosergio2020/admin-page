import React from 'react'
import VideoApp from "./components/video/VideoApp";
import './main.css'

function AdminApp() {
    return (
        <div>
            <header className="header__container">
                soy el header
            </header>
            <h1>HOLA SOY EL COMPONENTE PRINCIPAL YO CONTENGO A LOS DEMAS COMPONENTES</h1>
            <div className="hola">
                <VideoApp url="https://youtu.be/or8QfmradNM" />
            </div>
        </div>
    )
}

export default AdminApp