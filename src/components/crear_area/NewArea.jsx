import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../general/boton/boton';
import './NewArea.css'

// //ICONOS
import iconos from '../../../src/icons/iconos';


export const NewArea = ({setData,area}) => {

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

    
    return (
        <>
        
        {/* <div className="popWindow__header">
            <h2 tabIndex="0" aria-label={title}> <img alt="imagen. icono de imagen." src={icon}/>  {title}</h2>
        </div> */}
        {/* <form  className="form background-form" onSubmit={handleSubmit}> */}
        
        <form  className="form background-form">
            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
            <p>nombre: {datos.nombre} </p>
        
            <p>descripcion: {datos.descripcion} </p>
            
            <div className="center">
                

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
                {!area && 
                <div className="center">
                
                <input 
                    className="" 
                    type="file"
                    name="url"
                    placeholder="Subir archivo"
                    
                    
                
                    // value={inputValue}
                    accept="image/gif, image/png, image/peg, "
                    multiple onChange={()=>handleInputChange}>
                </input>
                </div>
            
           
                }


            </div>
            {/* <textarea className="input-textArea input-background" type="text" name="descripcion" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea> */}

            <div className="center">

            <Button buttonStyle="verde" icono={iconos.check}> Guardar </Button>
            <Button buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Button>
                </div>
        </form>
        
        </>
        
      
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
NewArea.propTypes = { 
    setData: PropTypes.func.isRequired,
}