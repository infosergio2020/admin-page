import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../components/Boton';
import {PopWindow} from '../components/PopWindow';
import { Redirect, useHistory } from 'react-router-dom';

// //ICONOS
import iconos from '../assets/img/iconos';
//CSS
import "../styles/NewEvento.css"
import { NewArea } from './NewArea';
import { CrearArea } from '../pages/CrearArea';
import { ViewEvento } from './ViewEvento';
import { render } from '@testing-library/react';

export const NewEvento = ({setData,evento}) => {
        const [nombreRed, setnombreRed] = useState("ingrese una red social")
        const [eventos, setEventos] = useState([]);
        // SWITCH PARA LOS POPWINDOWS
        const [activeV, setactiveV] = useState(false);
        const [activeF, setactiveF] = useState(false);
        // FOTOS Y VIDEOS DEL EVENTO
        const [fotos, setFotos] = useState([]);
        const [videos, setVideos] = useState([]);
        // REDES SOCIALES
        const [redes, setRedes] = useState([]);           
        useEffect(() => {
            setDatos( {
                ...datos, 
                ['fotos'] : fotos,          
                ['videos'] : videos,
                ['redesSociales'] : redes,
            });
        }, [fotos,videos,redes])
     
        // FORMULARIO DEL EVENTO
        const [datos, setDatos] = useState({
            nombreEvento:"Nombre del evento",
            lugarEvento: "Lugar del evento",
            descripcionEvento:"Descripcion del evento",
            redesSociales: "Ingrese una red social",
            fotos: [],
            videos: [],
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
        console.log(e.target.type);
        let valor;
        switch(e.target.type) {
            case 'date':
                valor = e.target.value.toString();
                break;
            case 'time':
                valor = e.target.value.toString();
                break;
            default:
                valor = e.target.value
                break;
          }
        console.log(`se esta por asignar ${valor} a ${e.target.name}`);
        setDatos( {
            ...datos, 
            [e.target.name]:valor
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
        setTimeout(()=>{localStorage.setItem('Listaeventos', JSON.stringify(eventos));},5000)
    };

    const reset = (e)=>{
        e.preventDefault();
        setDatos({
            nombreEvento:"",
            lugarEvento: "",
            descripcionEvento:"",
            redesSociales: "",
            imagenes: "",
            videos: "",
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
                                        <input 
                                            className="input input-background" 
                                            type="date"
                                            // value={datos.fechaEvento}
                                            name="fechaEvento"
                                            placeholder="Fecha del evento"
                                            onChange={handleInputChange}
                                            onKeyPress={_handleKeyPress}
                                            >
                                        </input>  
                                        <input 
                                            className="input input-background" 
                                            type="time"
                                            // value={datos.horaEvento}
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
                                        value={nombreRed}
                                        name="redesSociales"
                                        placeholder="Red Social"
                                        onChange={(e)=>{setnombreRed(e.target.value)}}
                                        onFocus={handleInputFocus}
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