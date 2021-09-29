import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../general/boton/boton';
import './NewArea.css'

// //ICONOS
import iconos from '../../../src/icons/iconos';


export const NewArea = ({setData,area,envivo,evento}) => {

// declaracion de un estado
   
        const [datos, setDatos] = useState({
            nombre:" ",
            descripcion: " "
        });
        // declaracion de un estado
   
        
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
   
    return (
        <>
        
        {/* <div className="popWindow__header">
            <h2 tabIndex="0" aria-label={title}> <img alt="imagen. icono de imagen." src={icon}/>  {title}</h2>
        </div> */}
        {/* <form  className="form background-form" onSubmit={handleSubmit}> */}
        <div className="flex">
        <form  className="form background-form">
            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
            <p>nombre: {datos.nombre} </p>
        
            <p>descripcion: {datos.descripcion} </p>
            
            <div className="center flex">
                

                {/* mostrar y esconder los campos del primer div de AREA */}
                {area && 
                <div className="tamaño">
                    <div className="input-group">
                        <div>
                            <input 
                                className="input input-background alargar" 
                                type="text"
                                // value={inputValue}
                                name="nombre"
                                placeholder="Nombre del area"
                                onChange={handleInputChange}>
                            </input>
                            
                                
                        </div>
                        <div>
                            <Button buttonStyle="azul" icono={iconos.check}> Tomar coordenadas </Button>

                            <Button buttonStyle="azul" icono={iconos.check}> Añadir imagen </Button>
                            
                            <Button buttonStyle="azul" icono={iconos.check}> Añadir video </Button>
                        
                            <Button buttonStyle="azul" icono={iconos.check}> Añadir juego </Button>
                    

                        </div>
                        
                        
                    </div>
                
                </div>               
                }

                {/* mostrar y esconder los campos del primer div de ENVIVO */}
                {envivo && 
                    <div className="tamaño flex">
                            <div className="input-group">
                                <div>
                                    <input 
                                        className="input input-background alargar" 
                                        type="text"
                                        // value={inputValue}
                                        name="nombre"
                                        placeholder="Nombre del en vivo"
                                        onChange={handleInputChange}>
                                    </input>
                                    <input 
                                        className="input input-background alargar" 
                                        type="text"
                                        // value={inputValue}
                                        name="url"
                                        placeholder="Url del en vivo"
                                        onChange={handleInputChange}>
                                    </input>
                                    
                                        
                                </div>
                                <div className="flex">
                                    <Button buttonStyle="azul" icono={iconos.check}> Fecha y hora </Button>
                                    {/* <Button buttonStyle="azul" icono={iconos.check} type="file" accept="image/gif, image/png, image/peg," multiple onChange={()=>subirArchivos}  name="url" placeholder="Subir archivo" > mm </Button> */}
                                    <label className="label center sesion icon" for="cambio"> Añadir imagen </label>
                                    <div className="center">
                
                                        <input 
                                            id="cambio"
                                             
                                            type="file"
                                            name="url"
                                            placeholder="Añadir imagen"   
                                                                                
                                        
                                            // value={inputValue}
                                            accept="image/gif, image/png, image/peg, "
                                            multiple onChange={()=>subirArchivos}>
                                        </input>
                                    </div>
            

                                </div>
                                
                                
                            </div>
                        
                </div>  
                
                
            
                }

             {/* mostrar y esconder los campos del primer div de EVENTO */}
             {evento && 
                    <div className="tamaño flex">
                            <div className="input-group">
                                <div>
                                    <input 
                                        className="input input-background alargar" 
                                        type="text"
                                        // value={inputValue}
                                        name="nombre"
                                        placeholder="Nombre del evento"
                                        onChange={handleInputChange}>
                                    </input>
                                    <input 
                                        className="input input-background alargar" 
                                        type="text"
                                        // value={inputValue}
                                        name="url"
                                        placeholder="Lugar del evento"
                                        onChange={handleInputChange}>
                                    </input>
                                    
                                        
                                </div>
                                <div className="flex">
                                    <Button buttonStyle="azul" icono={iconos.video}> Añadir video </Button>
                                    {/* <Button buttonStyle="azul" icono={iconos.check} type="file" accept="image/gif, image/png, image/peg," multiple onChange={()=>subirArchivos}  name="url" placeholder="Subir archivo" > mm </Button> */}
                                    <label className="label center sesion icon" for="cambio"> Añadir imagen </label>
                                    <div className="center">
                
                                        <input 
                                            id="cambio"
                                             
                                            type="file"
                                            name="url"
                                            placeholder="Añadir imagen"   
                                                                                
                                        
                                            // value={inputValue}
                                            accept="image/gif, image/png, image/peg, "
                                            multiple onChange={()=>subirArchivos}>
                                        </input>
                                    </div>
            

                                </div>
                                
                                
                            </div>
                        
                </div>  
                
                
            
                }
            </div>
            
            <div className="center">

            <Button buttonStyle="verde" icono={iconos.check}> Guardar </Button>
            <Button buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Button>
            </div>
        </form>
        <textarea className="input-textArea input-background" type="text" name="descripcion" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>


        </div>
        
        
        </>
        
      
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
NewArea.propTypes = { 
    setData: PropTypes.func.isRequired,
}