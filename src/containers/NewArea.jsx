import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../components/Boton';
import {PopWindow} from '../components/PopWindow';
import {PopJuego} from '../components/PopJuego';
import { Redirect, useHistory } from 'react-router-dom';
// //ICONOS
import iconos from '../assets/img/iconos';
//CSS
import "../styles/NewArea.css"

export const NewArea = ({setData}) => {
        const [areas,setAreas] = useState([]);
        const [activeV, setactiveV] = useState(false);
        const [activeF, setactiveF] = useState(false);
        const [activeJ, setactiveJ] = useState(false);
        const [arrayF, setarrayF] = useState( // para las FOTOS
            []
        );
        const [arrayV, setarrayV] = useState( // para los VIDEOS
            []
        );
        const [arrayJ, setarrayJ] = useState( // para los JUEGOS
            []
        );
        // Nota: Tuve que crear 2 estados separados para no eliminar 
        // o cambiar la estrucutra del POPWindow que en ese
        // mismo componente estan video y foto---> es una mierda
        // declaracion de un estado area para video

        useEffect(() => {
            setDatos( {
                ...datos, 
                ['urlImagenArea'] : arrayF,          
                ['urlVideoArea'] : arrayV,
                ['juegos'] : arrayJ,
            });
        }, [arrayF,arrayV,arrayJ])

        useEffect(() => {
            console.log("se ha cambiado areas");
            localStorage.setItem('Listaeventos', JSON.stringify(areas));
        }, [areas]);

        //formulario del area
        const [datos, setDatos] = useState({
            nombreArea:" ",
            descripcionArea: " ",
            latitud:" ",
            longitud:" ",
            urlArea: " ", 
            urlVideoArea:[],
            urlImagenArea:[], 
            juegos:[],
        });
   
// crear funcion para ver los inputs
    const handleInputChange = (e)=>{
        setDatos( {
            ...datos, 
            [e.target.name] : e.target.value
        });
    }
// me guardo los datos que se escribieron en el NewArea - ME GUARDO EL AREA

const history = useHistory();
  //Funciones para redireccionar
function guardarDatos(e) {
    e.preventDefault(); // la pagina no se regargue
    setAreas(areas => [...areas,datos]);
    history.push('/CrearEvento')  //Me dice a que lugar direcciono
}
/*Esto se usaba cuando se tenia un arreglo por separado*/
function guardarFoto(){
    localStorage.setItem('ListaFotos', JSON.stringify(arrayF));
}

function guardarVideo(){
    localStorage.setItem('ListaVideos', JSON.stringify(arrayV));
}

// funcion para simular el POPUP del video, la foto y juego
function popApV(e){
    e.preventDefault()
    setactiveV(!activeV);
} 
function popApF(e){
    e.preventDefault()
    setactiveF(!activeF);
}
function popApJ(e){
    e.preventDefault()
    setactiveJ(!activeJ);
} 


// COMIENZO DEL MAIN()
    return (
        <>
        <div className="container-Switch">
            <div className="flex bg-gray">
                <div className="form-container-area">
                    <form  className="form background-form">
                            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
                            <div className="container-area">
                                <div className="side-input-area">
                                    <div className="input-area">
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            name="nombreArea"
                                            placeholder="Nombre del area"
                                            onChange={handleInputChange}>
                                        </input>  
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            name="longitud"
                                            placeholder="Longitud del area"
                                            onChange={handleInputChange}>      
                                        </input>
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            name="latitud"
                                            placeholder="Latitud del area"
                                            onChange={handleInputChange}>
                                        </input>                   
                                    </div>
                                </div>
                                <div className="side-area-textArea">
                                    <textarea className="input-textArea input-background" type="text" name="descripcionArea" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>
                                </div>
                            </div>  
                            <div className="group-btn-area">
                                        <Boton buttonStyle="azul" icono={iconos.play} onClick={popApJ}> Añadir juego </Boton> 
                                        <Boton buttonStyle="azul" icono={iconos.video} onClick={popApV}> Añadir video </Boton>
                                        <Boton buttonStyle="azul" icono={iconos.photo} onClick={popApF}> Añadir imagen </Boton>                                        
                            </div>   
                            <div className="btn-submit-area">
                                <Boton buttonStyle="verde" icono={iconos.check} onClick={guardarDatos}> Guardar </Boton>
                                <Boton buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Boton>
                                {/* <br></br>
                                <img src="" id="hola" height="200" alt="Image preview..."></img> */}
                            </div> 
                    </form>             
                </div>
            </div>
            {/* ACA SE ESCONDEN O VISUALIZAN POPUPS */}
            {/* VIDEO */}
            <div className={activeV ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="video" icon={iconos.video} video={true} setarray={setarrayV} esconder={setactiveV}> </PopWindow>
                </div>
            </div>
            {/* FOTO */}
            <div className={activeF ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="imagen" icon={iconos.photo} video={false} setarray={setarrayF} esconder={setactiveF}> </PopWindow>
                </div>
            </div>
            {/* JUEGO */}
            <div className={activeJ ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopJuego title="Juego" icon={iconos.play} video={false} setarray={setarrayJ} esconder={setactiveJ}> </PopJuego>
                </div>
            </div>
        </div>
        </> 
    )
}
