import React, { useState } from 'react';
// COMPONENTES
import PropTypes from 'prop-types';
import {Boton, Button} from "../components/Boton";
import  {VideoApp}  from "../components/VideoApp";
// CSS
import '../styles/ViewArea.css'

//ICONOS
import iconos from '../../src/assets/img/iconos';
// FUNCION para los TABS view
export const ViewArea = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };

// LocalStorage
function getDatos() {
  const area = JSON.parse( localStorage.getItem('datos'));
  let resultado=area;
  console.log(resultado)
  if (area === null){
    resultado="Sin informacion";
  }
  return resultado;
}

function getDatosF() {
  const area = JSON.parse( localStorage.getItem('datosF'));
  let resultado=area;
  console.log(resultado)
  if (area === null){
    resultado="Sin informacion";
  }
  return resultado;
}

function getDatosV() {
  const area = JSON.parse( localStorage.getItem('ListaVideos'));
  let resultado=area;
  console.log(resultado)
  if (area === null){
    resultado="Sin informacion";
  }
  return resultado;
}


function VideoList(props) {
  const area = JSON.parse( localStorage.getItem('ListaVideos'));
  let resultado=area;  
  console.log(resultado)
  if (area === null){
    resultado="Sin informacion";
  }
  const listItems = resultado.map((video) =>
 <li className="tamaño center flex">     
      <div className="apariencia">
          <VideoApp url={video.url} title={video.titulo} video={true} /> 
      </div>
      <div className="apariencia paddingArea">
          <textarea className="input-textAreaV" value={video.descripcion} type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true" disabled={false}></textarea>
      </div>
  </li>
  );

    if(area.length === 0){
      return (    <h3 className={"center color-blanco"}> No hay videos :C </h3> );
    }else{
      return (    <ul>{listItems}</ul> );
    }
}
//const numbers = [1, 2, 3, 4, 5];
// comienzo del MAIN
    return (
        <>
<h3  className="nombreArea" tabIndex="0">Complete los campos a continuación.</h3>
      
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
                  {/* LISTADO DE ELEMENTOS DE UN ARRAY */}
                  <VideoList  />
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
                          <textarea className="input-textAreaV input-backgroundV" value={getDatosF().descripcion} type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
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
                          <textarea className="input-textAreaV input-backgroundV" type="text" value={getDatos().descripcionArea} name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                         
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