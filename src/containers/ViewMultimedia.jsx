import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../components/Boton';
import '../styles/ViewMultimedia.css'
import  {VideoApp}  from '../components/VideoApp';


//ICONOS
import iconos from '../../src/assets/img/iconos';

// FUNCION para los TABS viewMultimedia
export const ViewMultimedia = () => {

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
      {/* las 4 pestañas de arriba */}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Caracteristicas
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Video
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
           Imagen
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          En vivo
        </button>
      </div>

      

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <div>
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
        </div>
        {/* FIN DE LAS CARACTERISTICASS */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div>

              <h2> Video</h2>
              <hr />
                  <div class="tamaño center flex">      
                      <div className="apariencia">
                          <VideoApp url={"https://youtu.be/or8QfmradNM"} video={true} />
                          <VideoApp url={"https://youtu.be/or8QfmradNM"} video={true} />
                      </div> 
                      <div className="apariencia paddingArea">
                          <textarea className="input-textAreaV input-backgroundV" type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                          <textarea className="input-textAreaV input-backgroundV" type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                     
                      </div>             
                </div>

              </div>
              
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Imagen</h2>
          <hr />
          <div class="tamaño center flex">      
                      <div className="apariencia">
                          <VideoApp url={iconos.img} video={false} />
                          <VideoApp url={iconos.lol} video={false} />
                      </div> 
                      <div className="apariencia paddingArea">
                          <textarea className="input-textAreaV input-backgroundV" type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                          <textarea className="input-textAreaV input-backgroundV" type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                      
                      </div>
                                   
          </div>  
          
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2> En vivo</h2>
          <hr />
        {/* aca hiriann las pestañas del en vivo */}
        {/* descripcion
        titulo
        fecha
        url como label
        imagen */}

        <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Video
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
           Imagen
        </button>
      </div>
        {/* fin de las pestañas del envivo */}
        </div>
      </div>
    </div>
    </>
  );
}


// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
ViewMultimedia.propTypes = { 
    setData: PropTypes.func.isRequired,
}