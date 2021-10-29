import React, {useState} from 'react';
//COMPONENTES
import { Buscador } from "../general/buscador/Buscador";
import { TablaEventos } from "../general/tabla/TablaEventos";
import { Boton } from "../general/boton/Boton";
import { Link,useHistory } from "react-router-dom";
//CSS
// Ori viendo
import './ViewEvento.css'
import add from "../../img/add.svg";
import { NewEvento } from '../crear_evento/NewEvento';

export const ViewEvento = () => {
    let history = useHistory();
    const changeDirection = () =>{ history.push('/NewEvento') }
    const [titulo, setTitulo] = useState('');
    return (
        <>
            <div className="eventoContainer">
                <div className="tablaContainer">        
                    <Buscador setTitle={setTitulo}/>
                    <TablaEventos item={titulo} />
                </div>
                <div className="boton-AddEvento">
                        <Boton buttonStyle={'btn-circle'} icono={add} onClick={changeDirection}/>
                </div>
              
            </div>
            {/* <Switch>
                <Route exact path={path}>
                    <h3>Elija al menos un link</h3>
                </Route>
                <Route exact path={`${path}/:linkId`}>
                    <NewEvento />
                </Route>
            </Switch> */}
        </>
    )
}
