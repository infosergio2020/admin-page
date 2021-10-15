import React from 'react';
//COMPONENTES
import { Header } from "../general/header/Header";
import { Buscador } from "../general/buscador/Buscador";
import { TablaEventos } from "../general/tabla/TablaEventos";
import { Boton } from "../general/boton/Boton";
//CSS
import './ViewEvento.css'
import add from "../../img/add.svg";

export const ViewEvento = ({item=''}) => {
    return (
        <>
            <div className="eventoContainer">
                <div className="tablaContainer">        
                    <Buscador />
                    <TablaEventos item={item} />
                </div>
                <div className="boton-AddEvento">
                    <Boton buttonStyle={'btn-circle'} icono={add}/>
                </div>
            </div>
        </>
    )
}
