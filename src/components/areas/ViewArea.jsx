import React, { useState } from 'react';
// COMPONENTES
import PropTypes from 'prop-types';
import {Button} from '../general/boton/Boton';
import  {VideoApp}  from '../video/VideoApp';
// CSS
import './ViewArea.css'

//ICONOS
import iconos from '../../img/iconos';
// FUNCION para los TABS view
export const ViewArea = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

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
          Descripcion de Area
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Juegos
        </button>

      </div>

      
{/* la conexion con la parte de arriba de la 3 pestañas de arriba */}
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div>

              <h2 className="izquierda"> Video</h2>
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
          <h2 className="izquierda">Imagen</h2>
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
          <h2 className="izquierda">  Descripcion de Area</h2>
          <hr />
          <div className="valor-latitud">
                <label>
                        {/* Latitud:{title} */}
                        Latitud:-32423543
                    
                </label>
                <label>
                        Longitud:-334234
                    
                </label>


          </div>
                    <div class="tamaño center flex">      
                      
                      <div className="apariencia paddingArea">
                          <textarea className="input-textAreaV input-backgroundV" type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                         
                      </div>
                                   
          </div>


                 
    </div>
    <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2 className="izquierda"> Juegos</h2>
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
        {/* fin de las pestañas del envivo */}

      </div>
</div>
    </>
  )
}
// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
ViewArea.propTypes = { 
    setData: PropTypes.func.isRequired,
}