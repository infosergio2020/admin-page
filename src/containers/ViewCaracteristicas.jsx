import React, { useState } from 'react';
// COMPONENTES
import PropTypes from 'prop-types';
import "../components/tabla/tablaItem.css"
import {Boton, Button} from "../components/Boton";
// CSS
import '../styles/ViewArea.css'
import '../styles/ViewCaracteristicas.css'

//ICONOS
import iconos from '../../src/assets/img/iconos';
// FUNCION para los TABS view
export const ViewCaracteristicas = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };

// LocalStorage
function getDatos() {
  var evento = JSON.parse( localStorage.getItem('datos'));
  let resultado=evento;
  console.log(resultado)
  if (evento === null){
    resultado="Sin informacion";
  }
  return resultado;
}

// comienzo del MAIN
    return (
        <>   
<div className="container">
                        
      {/* 1 pestaña */}
      {/* <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Descripcion del Evento1
        </button>
      </div> */}

      
{/* la conexion con la parte de la pestaña */}
      <div className="content-tabs">
        
        {/* <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        > */}
        <div className="content  active-content">
          <h2 className="izquierda">  Caracteristicas del Evento</h2>
          <hr />
          <div className="valor-latitud">
                {/* TABLA  */}
                <table>
                    <tr className="th-verde">
                        <th>Lugar</th>
                        <th>Hora</th>
                        <th>Fecha</th>
                    </tr>
                    
                    <tr className="td-gris">
                        <td>{getDatos().lugar}</td>
                        <td>{getDatos().hora}</td>
                        <td>lol</td>
                        {/* <td>{getDatos().fecha}</td> */}
                    </tr>
                </table>
          </div>
                    <div class="tamaño center flex">     
                    
                    {/* DESCRIPCION */}
                        <div className="apariencia paddingArea">
                            <textarea className="input-textAreaV input-backgroundV" type="text" value={getDatos().descripcionArea} name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                        </div>                   
          </div>         
    </div>
    
        {/* fin de las pestañas de la descripcion del evento */}

    </div>
</div>
    </>
  )
}
// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
ViewCaracteristicas.propTypes = { 
    setData: PropTypes.func.isRequired,
}