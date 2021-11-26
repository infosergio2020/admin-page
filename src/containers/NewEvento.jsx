import React, { useState,useEffect } from 'react';
import { Boton } from '../components/Boton';
import { TablaFotosVideos } from "../components/tabla/TablaFotosVideos";
import {PopWindow} from '../components/PopWindow';
import { useHistory } from 'react-router-dom';

import { useEvento } from "../context/globalContext";
// //ICONOS
import iconos from '../assets/img/iconos';
//CSS
import "../styles/NewEvento.css"


export const NewEvento = ({setData,evento}) => {
    const { eventos,fotos,videos,redes,formulario,nombreRed,
            setFotos,setVideos,setnombreRed,
            addRed,delFoto,delVideo,delRed,handleInputChange,save,reset } = useEvento();


    // SWITCH PARA LOS POPWINDOWS
    const [activeV, setactiveV] = useState(false);
    const [activeF, setactiveF] = useState(false);
 
// funcion para simular el POPUP del video y la foto
    const popApV= (e) =>{       
        e.preventDefault()
        setactiveV(!activeV);
    }
    
    function popApF(e){
        e.preventDefault()
        setactiveF(!activeF);
    } 

const _handleKeyPress = (e)=>{
    if (e.key === 'Enter') {
        console.log('do validate');
        setactiveV(!activeV);
        }
}

const history = useHistory();
  //Funciones para redireccionar
const redireccionar_to_AñadirArea =(e) =>{
    history.push('/CrearArea')  //Me dice a que lugar direcciono
}
const redireccionar_to_AñadirEnVivo=() =>{
    history.push('/CrearEnvivo')  //Me dice a que lugar direcciono
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
                                            id={"nombreEvento"}
                                            className="input input-background" 
                                            type="text"
                                            name="nombreEvento"
                                            placeholder="Nombre del evento"
                                            onChange={handleInputChange}
                                            onKeyPress={_handleKeyPress}
                                            >
                                        </input>
                                        <input 
                                            id={"lugarEvento"}
                                            className="input input-background" 
                                            type="text"
                                            name="lugarEvento"
                                            placeholder="Lugar del evento"
                                            onChange={handleInputChange}
                                            onKeyPress={_handleKeyPress}
                                            >
                                        </input>  
                                        <input 
                                            id={"fecha"}
                                            className="input input-background" 
                                            type="date"
                                            name="fechaEvento"
                                            placeholder="Fecha del evento"
                                            onChange={handleInputChange}
                                            onKeyPress={_handleKeyPress}
                                            >
                                        </input>  
                                        <input 
                                            id={"hora"}
                                            className="input input-background" 
                                            type="time"
                                            name="horaEvento"
                                            placeholder="Hora del evento"
                                            onChange={handleInputChange}
                                            onKeyPress={_handleKeyPress}
                                            >
                                        </input>  
                                </div>

                                <div className="group-buttons-evento">
                                    <Boton buttonStyle="azul" icono={iconos.video} onClick={popApV}> <p>Añadir video</p> </Boton>
                                    <Boton buttonStyle="azul" icono={iconos.photo} onClick={popApF}> <p>Añadir foto</p> </Boton>
                                </div>
                                <div>
                                    <TablaFotosVideos arrayFoto={fotos} arrayVideo={videos} eliminarFoto={delFoto} eliminarVideo={delVideo} />
                                </div>
                            </div>
                            <div className="group-evento-rightSide">
                                <div className="group-textarea-evento">
                                    <textarea  
                                        id={"descripcionEvento"}
                                        className="input-textArea input-background" 
                                        type="text" 
                                        placeholder="Descripción" 
                                        name="descripcionEvento"
                                        aria-multiline="true"
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="group-inputRedes-evento">
                                    <input
                                        id={"redesSociales"} 
                                        className="input input-background" 
                                        type="text"
                                        name="redesSociales"
                                        placeholder="Red Social"
                                        onChange={(e)=>{setnombreRed(e.target.value)}}
                                        onKeyPress={_handleKeyPress}
                                        >
                                        </input>
                                        <Boton className="btn-small-circle" icono={iconos.add} onClick={(e)=> {addRed(e,nombreRed)}}>Agregar</Boton>
                                </div>

                                <ul className="list-redesSociales">
                                    { redes.map( (red,indice) => {
                                        return (
                                            <>
                                                <li className="list-item-redesSociales">{red} 
                                                <Boton key={indice} buttonStyle="btn-small-circle rojo" icono={iconos.erase_white} onClick={(e)=>{delRed(e,red)} }></Boton>
                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>     
                        </div>
                        <div className="container-groups-evento">
                            <div className="groups-evento">
                            <div className="group-buttons-evento">
                                    <Boton buttonStyle="azul" icono={iconos.add} onClick={redireccionar_to_AñadirArea}> <p>Añadir Area</p> </Boton>
                                    <Boton buttonStyle="azul" icono={iconos.add} onClick={redireccionar_to_AñadirEnVivo}> <p>Añadir en vivo</p> </Boton>
                            </div>
                            </div>
                        </div>
                        Inserte la tabla de area aqui (:
                        <div className="center">
                            <Boton buttonStyle="verde" icono={iconos.check} onClick={save}> Guardar </Boton>
                            <Boton buttonStyle="rojo" icono={iconos.cancel} onClick={reset}> Cancelar </Boton>
                        </div>  
                </form>  {/*Fin del formulario*/}
            </div> 
            {/* POPUP PARA VIDEOS */}
            <div className={activeV ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="video" icon={iconos.video} video={true} setarray={setVideos} esconder={setactiveV}> </PopWindow>
                </div>
            </div>
            {/* POPUP PARA IMAGENES */}
            <div className={activeF ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="imagen" icon={iconos.photo} video={false} setarray={setFotos} esconder={setactiveF}> </PopWindow>
                </div>
            </div>
        </div>
        </>
    )
}