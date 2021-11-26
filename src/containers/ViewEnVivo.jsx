import React, {useState} from 'react';
//COMPONENTES
import { Buscador } from "../components/Buscador";
import { TablaEnvivo } from "../components/tabla/TablaEnvivo";
import { Boton } from "../components/Boton";
//CSS
// Ori viendo
import '../styles/ViewEvento.css'
import iconos from '../assets/img/iconos';

export const ViewEnVivo = () => {
    const [titulo, setTitulo] = useState('')
    return (
        <>
            <div className="eventoContainer">
                <div className="tablaContainer">        
                    <Buscador setTitle={setTitulo}/>
                    {/* <h2>{titulo}</h2> */}
                    <TablaEnvivo item={titulo} />
                </div>
                <div className="boton-AddEvento">
                    <Boton buttonStyle={'btn-circle'} icono={iconos.add}/>
                </div>
            </div>
        </>
    )
}
