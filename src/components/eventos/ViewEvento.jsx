import React from 'react'
import { Header } from "../general/header/Header";
import { Buscador } from "../general/buscador/Buscador";
import { Tabla } from "../general/tabla/Tabla";

export const ViewEvento = ({}) => {
    return (
        <>
            <Header />
            <br></br>
            <Buscador />
            <Tabla />
        </>
    )
}
