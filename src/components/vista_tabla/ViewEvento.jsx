import React, {useState} from 'react';
//COMPONENTES
import { Buscador } from "../general/buscador/Buscador";
import { TablaEventos } from "../general/tabla/TablaEventos";
import { Boton } from "../general/boton/Boton";
//CSS
// Ori viendo
import './ViewEvento.css'
import add from "../../img/add.svg";

export const ViewEvento = () => {
    const [titulo, setTitulo] = useState('')
    return (
        <>
            <div className="eventoContainer">
                <div className="tablaContainer">        
                    <Buscador setTitle={setTitulo}/>
                    {/* <h2>{titulo}</h2> */}
                    <TablaEventos item={titulo} />
                </div>
                <div className="boton-AddEvento">
                    <Boton buttonStyle={'btn-circle'} icono={add}/>
                </div>
            </div>
        </>
    )
}
