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
        // REDES SOCIALES
        const [redes, setRedes] = useState([]);        
        // FORMULARIO DEL EVENTO
        const [datos, setDatos] = useState({
            nombreEvento:"Nombre del evento",
            lugarEvento: "Lugar del evento",
            descripcionEvento:"Descripcion del evento",
            redesSociales: "Ingrese una red social",
            imagenes: " ",
            videos: " ",
        });
// crear funcion para ver los inputs
    const handleInputFocus = (e)=>{
        setDatos( {
            ...datos, 
            [e.target.name] : ""            
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
    const popApV= (e) =>{       
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
            redesSociales: "",
            imagenes: " ",
            videos: " ",
        });
    };
// FUNCIONES PARA AGREGAR O ELIMINAR REDES SOCIALES
const addRed = (e,item)=>{
    e.preventDefault();
    console.log(item);
    if(item == "" || item == " "){
        alert("debe completar el campo")
    } else{
        setRedes([item,...redes]);
    }
    
}
const delRed = (e,item)=>{
    e.preventDefault();
    let newRedes = redes.filter(red => red !== item);
    setRedes(newRedes);
}
    // class Input extends React.Component {
    //     _handleKeyPress(e) {
    //       if (e.key === 'Enter') {
    //         console.log('do validate');
    //       }
    //     }
    // }
    const _handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            console.log('do validate');
            setactiveV(!activeV);
          }
    }
// COMIENZO DEL MAIN()
    return (
        <>
        <div className="container-Switch">
            <div className="flex bg-gray">
                <form  className="form background-form">
                        <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
                        <div className="container-groups-evento">
                            <div className="groups-evento">
                                <div className="group-inputs-evento">
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            value={datos.nombreEvento}
                                            name="nombreEvento"
                                            placeholder="Nombre del evento"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            onKeyPress={_handleKeyPress}
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
                                            onKeyPress={_handleKeyPress}
                                            >
                                        </input>  
                                </div>

                                <div className="group-buttons-evento">
                                    <Boton buttonStyle="azul" icono={iconos.video} onClick={popApV}> <p>Añadir video</p> </Boton>
                                    <Boton buttonStyle="azul" icono={iconos.photo} onClick={popApF}> <p>Añadir foto</p> </Boton>
                                </div>
                                <div>
                                    aca va la tabla para fotos y videos...
                                </div>
                            </div>
                            <div className="group-evento-rightSide">
                                <div className="group-textarea-evento">
                                    <textarea  
                                        className="input-textArea input-background" 
                                        type="text" 
                                        placeholder="Descripción" 
                                        name="descripcionEvento"
                                        value={datos.descripcionEvento}
                                        aria-multiline="true"
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    ></textarea>
                                </div>
                                <div className="group-inputRedes-evento">
                                    <input 
                                        className="input input-background" 
                                        type="text"
                                        value={datos.redesSociales}
                                        name="redesSociales"
                                        placeholder="Red Social"
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onKeyPress={_handleKeyPress}
                                        >
                                        </input>
                                        <Boton className="btn-small-circle" icono={iconos.add} onClick={(e)=> {addRed(e,datos.redesSociales)}}>Agregar</Boton>
                                </div>

                                <ul className="list-redesSociales">
                                    { redes.map( red => {
                                        return (
                                            <>
                                                <li className="list-item-redesSociales">{red} 
                                                <Boton buttonStyle="btn-small-circle rojo" icono={iconos.erase_white} onClick={(e)=>{delRed(e,red)} }></Boton>
                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>         
                        </div>           
                        <div className="center">
                            <Boton buttonStyle="verde" icono={iconos.check} onClick={save}> Guardar </Boton>
                            <Boton buttonStyle="rojo" icono={iconos.cancel} onClick={reset}> Cancelar </Boton>
                        </div>
                </form> 
            </div>
            {/* POPUP PARA VIDEOS */}
            <div className={activeV ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="video" icon={iconos.video} video={true} setArray={setVideos} esconder={popApV}> </PopWindow>
                </div>
            </div>
            {/* POPUP PARA IMAGENES */}
            <div className={activeF ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="imagen" icon={iconos.photo} video={false} setArray={setFotos} esconder={popApF}> </PopWindow>
                </div>
            </div>
        </div>
        </>
    )
}