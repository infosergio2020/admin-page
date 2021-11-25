import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../components/Boton';
import {PopWindow} from '../components/PopWindow';
import {PopJuego} from '../components/PopJuego';
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
function guardarDatos(e) {
    e.preventDefault(); // la pagina no se regargue
    setAreas(areas => [...areas,datos]);
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
            {/* LISTADO DE ELEMENTOS DE UN ARRAY */}
            {/* <ul>
                { arrayV.map( unVideo => { <li>{unVideo}</li> }) }
            </ul> */}

        <div className="container-Switch">
            <div className="flex bg-gray">
            {/* aca estaba el form */}
                    {/* mostrar y esconder los campos del primer div de AREA */}
                    <form  className="form background-form">
                            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
                            {/* <p>nombre: {datos.nombre} </p>
                            <p>descripcion: {datos.descripcion}  </p> */}

                            <div className="container-evento">
                                <div className="container-input-evento">
                                    <div className="tamañoInputDes">
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            // value={inputValue}
                                            name="nombreArea"
                                        
                                            placeholder="Nombre del area"
                                            onChange={handleInputChange}>
                                                
                                        </input>  
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            // value={inputValue}
                                            name="longitud"
                                            placeholder="Longitud del area"
                                            onChange={handleInputChange}>      
                                        </input>
                                        <input 
                                            className="input input-background" 
                                            type="text"
                                            // value={inputValue}
                                            name="latitud"
                                            placeholder="Latitud del area"
                                            onChange={handleInputChange}>
                                        </input>                   
                                            
                                    </div>
                                    <div className="">
                                        <div className="horizontalBotones">

                                            <Boton buttonStyle="azul" icono={iconos.play} onClick={popApJ}> Añadir juego </Boton> 
                                        </div>

                                        <div className="horizontalBotones">
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
                                    </div>                        
                                </div>
                                <textarea  className="input-textArea input-background" type="text" name="descripcionArea" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>
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
