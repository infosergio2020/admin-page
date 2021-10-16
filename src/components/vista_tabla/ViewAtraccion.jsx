import React, {useState} from 'react';
//COMPONENTES
import { Buscador } from "../general/buscador/Buscador";
import { TablaAtraccion } from "../general/tabla/TablaAtraccion";
import { Boton } from "../general/boton/Boton";
//CSS
// Ori viendo
import './ViewEvento.css'
import add from "../../img/add.svg";

export const ViewAtraccion = () => {
    const [titulo, setTitulo] = useState('')
    return (
        <>
            <div className="eventoContainer">
                <div className="tablaContainer">        
                    <Buscador setTitle={setTitulo}/>
                    {/* <h2>{titulo}</h2> */}
                    <TablaAtraccion item={titulo} />
                </div>
                <div className="boton-AddEvento">
                    <Boton buttonStyle={'btn-circle'} icono={add}/>
                </div>
            </div>
        </>
    )
}
