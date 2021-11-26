import React, {useState} from 'react';
//COMPONENTES
import { Buscador } from "../components/Buscador";
import { TablaEventos } from "../components/tabla/TablaEventos";
import { Boton } from "../components/Boton";
import { Link,useHistory } from "react-router-dom";
//CSS
// Ori viendo
import '../styles/ViewEvento.css'
import add from "../../src/assets/img/iconos";
import { NewEvento } from './NewEvento';
// import { NewArea } from "../containers/NewArea";

export const ViewEvento = () => {
    let history = useHistory();
    const changeDirection = () =>{ history.push('/NewEvento') }
    const [titulo, setTitulo] = useState('');
    return (
        <>
            <div className="eventoContainer">
                <div className="tablaContainer">        
                    <Buscador setTitle={setTitulo}/>
                    <TablaEventos  titulo={'Lista de eventos'} />
                </div>
                <div className="boton-AddEvento">
                        <Boton buttonStyle={'btn-circle'} icono={add} onClick={changeDirection}/>
                </div>
              
            </div>
        </>
    )
}
