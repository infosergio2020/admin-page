import React from 'react'
import "../styles/Bienvenido.css"
import iconos from '../assets/img/iconos';
import { Link } from 'react-router-dom';

export const Bienvenido = () => {
    return (
        <div className="main-welcome">
            <div className="main-container">
                <img src={iconos.citadine}/>
                <h1>Administrador de contenido</h1>
                
                    <Link className="btn-welcome">
                        GO
                    </Link>
                
            </div>
        </div>
    )
}
