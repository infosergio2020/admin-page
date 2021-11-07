import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../components/Boton';
// //ICONOS
import iconos from '../assets/img/iconos';
//CSS
import "../styles/NewArea.css"

export const NewArea = ({setData,area,envivo,evento}) => {
// declaracion de un estado
        const [datos, setDatos] = useState({
            nombre:" ",
            descripcion: " ",
            urlEvento: " ",
            eventoNom: " "
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
   
    return (
        <>
        <div className="container-Switch">
        <div className="flex bg-gray">
        <form  className="form background-form">
            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
            <p>nombre: {datos.nombre} </p>
            <p>descripcion: {datos.descripcion} </p>

                {/* mostrar y esconder los campos del primer div de AREA */}
                {area && 
                <div className="container-evento">
                    <div className="container-input-evento">
                        <div>
                            <input 
                                className="input input-background" 
                                type="text"
                                // value={inputValue}
                                name="nombre"
                                placeholder="Nombre del area"
                                onChange={handleInputChange}>
                            </input>                   
                                
                        </div>
                        <div className="flex-botones">
                            <div className="horizontalBotones">
                            <Boton buttonStyle="azul" icono={iconos.coord}> Añadir Posicion </Boton>
                            
                            <Boton buttonStyle="azul" icono={iconos.play}> Añadir juego </Boton> 


                            </div>
                            <div className="horizontalBotones">
                            <Boton buttonStyle="azul" icono={iconos.video}> Añadir video </Boton>
                            
                            <Boton buttonStyle="azul" icono={iconos.photo}> Añadir imagen </Boton>
                                 
                            </div>
                                 
                        </div>                        
                        
                    </div>
                
                </div>               
                }

                {/* mostrar y esconder los campos del primer div de ENVIVO */}
                {envivo && 
                    <div className="container-evento">
                            <div className="container-input-evento">
                                
                                    <input 
                                        className="input input-background" 
                                        type="text"
                                        // value={inputValue}
                                        name="nombre"
                                        placeholder="Nombre del en vivo"
                                        onChange={handleInputChange}>
                                    </input>
                                    <input 
                                        className="input input-background" 
                                        type="text"
                                        // value={inputValue}
                                        name="url"
                                        placeholder="Url del en vivo"
                                        onChange={handleInputChange}>
                                    </input>                                  
                                 {/* nombre y URL */}

                                <div className="container-addBtn-evento">
                                    {/* boton de fecha y hora  */}
                                    <Boton buttonStyle="azul" icono={iconos.calendar}> Fecha y hora </Boton>
                                    {/* boton añadir imagen */}
                                    
                                    <label className="label" for="cambio">
                                        <p>Añadir imagen</p> 
                                        <img src={iconos.photo} />
                                    </label>                                   
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
                }

             {/* mostrar y esconder los campos del primer div de EVENTO */}
             {evento && 
                    <div className="container-evento">
                            <div className="container-input-evento">
                                    <input 
                                        className="input input-background" 
                                        type="text"
                                        // value={inputValue}
                                        name="eventoNom"
                                        placeholder="Nombre del evento"
                                        onChange={handleInputChange}>
                                    </input>
                                    <input 
                                        className="input input-background" 
                                        type="text"
                                        // value={inputValue}
                                        name="url"
                                        placeholder="Lugar del evento"
                                        onChange={handleInputChange}>
                                    </input>  
                            </div>

                            <div className="container-addBtn-evento">
                                    <Boton buttonStyle="azul" icono={iconos.video}> <p>Añadir video</p> </Boton>
                                    {/* <Button buttonStyle="azul" icono={iconos.check} type="file" accept="image/gif, image/png, image/peg," multiple onChange={()=>subirArchivos}  name="url" placeholder="Subir archivo" > mm </Button> */}
                                    <label className="label" for="cambio"> 
                                        <p>Añadir imagen</p> 
                                        <img src={iconos.photo} />
                                    </label>
                                    
                                        <input 
                                            id="cambio"
                                             
                                            type="file"
                                            name="urlEvento"
                                            placeholder="Añadir imagen"                       
                                            // value={inputValue}
                                            accept="image/gif, image/png, image/peg, "
                                            multiple onChange={()=>subirArchivos}>
                                        </input>
            
                                </div>
                        
                </div>  
                      
                }

            
            <div className="center">

            <Boton buttonStyle="verde" icono={iconos.check}> Guardar </Boton>
            <Boton buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Boton>
            </div>
        </form>
        
        <textarea  className="input-textArea input-background" type="text" name="descripcion" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>

        
        

        </div>
        
        </div>
        </>
        
      
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
NewArea.propTypes = { 
    setData: PropTypes.func.isRequired,
}