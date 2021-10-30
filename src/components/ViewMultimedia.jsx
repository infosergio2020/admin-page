import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../general/boton/Boton';
import './ViewMultimedia.css'
import  {VideoApp}  from './VideoApp';


//ICONOS
import iconos from '../../img/iconos';

// FUNCION para los TABS viewMultimedia
export const ViewMultimedia = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

// comienzo del MAIN
    return (
        <>

<div className="container">
      {/* las 3 pestañas de arriba */}
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
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          En vivo
        </button>
      </div>

      

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
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
          className={toggleState === 2 ? "content  active-content" : "content"}
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
          className={toggleState === 3 ? "content  active-content" : "content"}
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