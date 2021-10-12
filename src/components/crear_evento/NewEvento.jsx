import React from 'react';
//COMPONENTES
import { NavBar } from "../navBar/NavBar";
//CSS
import "./NewEvento.css"

export const NewEvento = () => {
    return (
        <>
            <NavBar titulo={'Nuevo Evento'} saludo={false}/>
        </>
    )
}
