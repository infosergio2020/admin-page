import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../components/Boton';
import {PopWindow} from '../components/PopWindow';
// //ICONOS
import iconos from '../assets/img/iconos';
//CSS
import "../styles/NewArea.css"

export const NewArea = ({setData,area}) => {
        const [activeV, setactiveV] = useState(false);
        
        const [activeF, setactiveF] = useState(false);

        const [arrayF, setarrayF] = useState( // para la foto
            []
        );
        
        useEffect(()=>{    }, [ arrayF ]);

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

    const [archivos, setArchivos] = useState(
        {url:" "}
    );
// crear funcion para almacenar las imagenes
 
    const subirArchivos = (l)=>{
        setArchivos( {
            ...archivos, 
            [l.target.name] : l.target.value
        });
    }
// me guardo los datos que se escribieron en el NewArea
function guardarDatos(e) {
    localStorage.setItem('datos', JSON.stringify(datos));// para el video
    //localStorage.setItem('datosF', JSON.stringify(datos)); // para la foto
    guardarFoto();
    guardarVideo();
    e.preventDefault(); // la pagina no se regargue
    console.log(e); // que evento nos tira
}

function guardarFoto(){
    localStorage.setItem('ListaFotos', JSON.stringify(arrayF));
    
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


// COMIENZO DEL MAIN()
    return (
        <>
        <div className="container-Switch">
            <div className="flex bg-gray">
            {/* aca estaba el form */}
                
                    {/* mostrar y esconder los campos del primer div de AREA */}
                    {area && 
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
                                            
                                    </div>
                                    <div className="">
                                        <div className="horizontalBotones">
                                        <Boton buttonStyle="azul" icono={iconos.coord}> Añadir Posicion </Boton>
                                        
                                        <Boton buttonStyle="azul" icono={iconos.play}> Añadir juego </Boton> 


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
                                                        multiple onChange={()=>subirArchivos} onClick={popApF}>
                                                    </input>
                
                                        </div>
                                            
                                    </div>                        
                                    
                                </div>
                                <textarea  className="input-textArea input-background" type="text" name="descripcionArea" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>

                            
                            </div>  
                            <div className="center">

                                <Boton buttonStyle="verde" icono={iconos.check} onClick={guardarDatos}> Guardar </Boton>
                                <Boton buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Boton>
                            </div>
                            
                </form>             
                
                    }       
            </div>
            <div className={activeV ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="video" icon={iconos.video} video={true} setarray={setarrayV} esconder={setactiveV}> </PopWindow>
                </div>
                
            </div>
            <div className={activeF ? 'pop-display pop-display-active' : 'pop-display'}>
                <div className="card-popup">
                    <PopWindow title="imagen" icon={iconos.photo} video={false} setarray={setarrayF} esconder={setactiveF}> </PopWindow>
                </div>
                
            </div>
        </div>
        </>
        
      
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
NewArea.propTypes = { 
    setData: PropTypes.func.isRequired,
}