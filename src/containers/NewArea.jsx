import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../components/Boton';
import {PopWindow} from '../components/PopWindow';
// //ICONOS
import iconos from '../assets/img/iconos';
//CSS
import "../styles/NewArea.css"

export const NewArea = ({setData}) => {
        const [activeV, setactiveV] = useState(false);
        const [activeF, setactiveF] = useState(false);
        const [arrayF, setarrayF] = useState( // para la foto
            []
        );
        const [arrayV, setarrayV] = useState( // para el video
            []
        );
        useEffect(()=>{    }, [ arrayV ]);
        // Nota: Tuve que crear 2 estados separados para no eliminar 
        // o cambiar la estrucutra del POPWindow que en ese
        // mismo componente estan video y foto---> es una mierda
        // declaracion de un estado area para video
        const [datos, setDatos] = useState({
            nombreArea:" ",
            descripcionArea: " ",
            urlArea: " ",
            urlEnvivo:" ",
            urlVideoArea:" ",
            urlImagenArea:" ", 
        });

   
// crear funcion para ver los inputs
    const handleInputChange = (e)=>{
        setDatos( {
            ...datos, 
            [e.target.name] : e.target.value
        });
    }
// me guardo los datos que se escribieron en el NewArea
function guardarDatos(e) {
    e.preventDefault(); // la pagina no se regargue
    localStorage.setItem('datos', JSON.stringify(datos));// para el video
    //localStorage.setItem('datosF', JSON.stringify(datos)); // para la foto
    guardarFoto();
    guardarVideo();
    console.log(e); // que evento nos tira
}

function guardarFoto(){
    localStorage.setItem('ListaFotos', JSON.stringify(arrayF));
    console.log("guardar")
    // verImagen()
}

function guardarVideo(){
    localStorage.setItem('ListaVideos', JSON.stringify(arrayV));
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

// function verImagen(){
//     console.log("hola")
//     const area = JSON.parse( localStorage.getItem('ListaFotos'));
//     let resultado=area;
//     console.log(resultado[0].src)
//     var preview = document.getElementById('hola');
//         preview.url = resultado[0].url
//     if (area === null){
//         resultado="Sin informacion";
//     }
//     //return resultado;
// }

// COMIENZO DEL MAIN()
    return (
        <>
            {/* LISTADO DE ELEMENTOS DE UN ARRAY */}
            {/* <ul>
                { arrayV.map( unVideo => { <li>{unVideo}</li> }) }
            </ul> */}

        <div className="container-Switch">
            <div className="flex bg-gray">
                    <form  className="form background-form">
                            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
                            <div className="container-groups-area">
                                <div className="groups-area">
                                    <div className="group-inputs-area">
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            // value={inputValue}
                                            name="nombreArea"
                                        
                                            placeholder="Nombre del area"
                                            onChange={handleInputChange}>               
                                        </input>                   
                                    </div>
                                    <div className="group-buttons-area">
                                        
                                            <Boton buttonStyle="azul" icono={iconos.coord}> Añadir Posicion </Boton>
                                            <Boton buttonStyle="azul" icono={iconos.play}> Añadir juego </Boton> 
                                            <Boton buttonStyle="azul" icono={iconos.video} onClick={popApV}> Añadir video </Boton>
                                            {/* boton añadir imagen */}
                                            <label className="label" for="cambio">
                                                        <p>Añadir imagen</p> 
                                                        <img src={iconos.photo} />
                                            </label>                                   
                                            <input 
                                                id="cambio"                                    
                                                type="file"
                                                name="urlArea"
                                                placeholder="Añadir imagen"                                                                                                              
                                                // value={inputValue}
                                                accept="image/gif, image/png, image/peg, "
                                                onClick={popApF}>
                                            </input>                            
                                    </div>  
                                    <div>
                                        aca va la tabla para fotos y videos
                                    </div>                      
                                </div>
                                <div className="group-textarea-area">
                                    <textarea  className="input-textArea input-background" type="text" name="descripcionArea" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>
                                </div>
                                
                            </div>  
                            <div className="center">
                                <Boton buttonStyle="verde" icono={iconos.check} onClick={guardarDatos}> Guardar </Boton>
                                <Boton buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Boton>
                                {/* <br></br>
                                <img src="" id="hola" height="200" alt="Image preview..."></img> */}
                            </div> 
                </form>             
            </div>
            {/* ACA SE ESCONDEN O VISUALIZAN POPUPS */}
            {/* VIDEO */}
            <div className={activeV ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="video" icon={iconos.video} video={true} setarray={setarrayV} hidePop={popApF}> </PopWindow>
                </div>
            </div>
            {/* FOTO */}
            <div className={activeF ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="imagen" icon={iconos.photo} video={false} setarray={setarrayF} hidePop={popApF}> </PopWindow>
                </div>
            </div>
        </div>
        </> 
    )
}
