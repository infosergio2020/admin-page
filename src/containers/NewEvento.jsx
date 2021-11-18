import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../components/Boton';
import {PopWindow} from '../components/PopWindow';
// //ICONOS
import iconos from '../assets/img/iconos';
//CSS
import "../styles/NewEvento.css"

export const NewEvento = ({setData,evento}) => {
        const [eventos, setEventos] = useState([]);
        // SWITCH PARA LOS POPWINDOWS
        const [activeV, setactiveV] = useState(false);
        const [activeF, setactiveF] = useState(false);
        // FOTOS Y VIDEOS DEL EVENTO
        const [fotos, setFotos] = useState([]);
        const [videos, setVideos] = useState([]);        
        // FORMULARIO DEL EVENTO
        const [datos, setDatos] = useState({
            nombreEvento:"Nombre del evento",
            lugarEvento: "Lugar del evento",
            descripcionEvento:"Descripcion del evento",
            imagenes: " ",
            videos: " ",
        });

// crear funcion para ver los inputs
    const handleInputFocus = (e)=>{
        setDatos( {
            ...datos, 
            [e.target.name] : " "            
        });
    }
// crear funcion para ver los inputs
    const handleInputChange = (e)=>{
        setDatos( {
            ...datos, 
            [e.target.name] : e.target.value            
        });
    }
// funcion para simular el POPUP del video y la foto
    function popApV(e){
        e.preventDefault()
        setactiveV(!activeV);
    } 

    function popApF(e){
        e.preventDefault()
        setactiveF(!activeF);
    } 
// FUNCIONES DEL FORMULARIO
    const save = (e)=>{
        e.preventDefault();
        setEventos( eventos => [...eventos,datos]);
    };
    const reset = (e)=>{
        e.preventDefault();
        setDatos({
            nombreEvento:" ",
            lugarEvento: " ",
            descripcionEvento:" ",
            imagenes: " ",
            videos: " ",
        });
    };
// COMIENZO DEL MAIN()
    return (
        <>
        <div className="container-Switch">
            <div className="flex bg-gray">
                <form  className="form background-form">
                        <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
                        <div className="">
                            <div>
                                <div className="">
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            value={datos.nombreEvento}
                                            name="nombreEvento"
                                            placeholder="Nombre del evento"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            >
                                        </input>
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            value={datos.lugarEvento}
                                            name="lugarEvento"
                                            placeholder="Lugar del evento"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            >
                                        </input>  
                                </div>

                                <div className="">
                                    <Boton buttonStyle="azul" icono={iconos.video} onClick={(e) => {e.preventDefault(); setactiveV(!activeV); }}> <p>Añadir video</p> </Boton>
                                    <Boton buttonStyle="azul" icono={iconos.video} onClick={(e) => {e.preventDefault(); setactiveF(!activeF); }}> <p>Añadir foto</p> </Boton>
                                </div>
                            </div>
                            <div className="">
                                <textarea  
                                    className="input-textArea input-background" 
                                    type="text" 
                                    placeholder="Descripción" 
                                    name="descripcionEvento"
                                    value={datos.descripcionEvento}
                                    aria-multiline="true"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                >
                                </textarea>
                            </div>         
                        </div>           
                        <div className="center">
                            <Boton buttonStyle="verde" icono={iconos.check} onClick={save}> Guardar </Boton>
                            <Boton buttonStyle="rojo" icono={iconos.cancel} onClick={reset}> Cancelar </Boton>
                        </div>
                </form> 
            </div>
            {/* POPUP PARA IMAGENES */}
            <div className={activeV ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="video" icon={iconos.video} video={true} setArray={setFotos} > </PopWindow>
                </div>
            </div>
            {/* POPUP PARA VIDEOS */}
            <div className={activeF ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="imagen" icon={iconos.photo} video={false} setArray={setVideos} > </PopWindow>
                </div>
            </div>
        </div>
        </>
        
      
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
NewEvento.propTypes = { 
    setData: PropTypes.func.isRequired,
}