import React, { useState } from 'react';
import PropTypes from 'prop-types';
//COMPONENTES
import {Boton} from '../components/Boton';
//CSS
import '../styles/popWindow.css'
//ICONOS
import iconos from '../../src/assets/img/iconos';

export const PopJuego = ({title,icon,setData,video, setarray , esconder}) => {
// declaracion de un estado
        const [datos, setDatos] = useState({
            titulo:" ",
            url:" ",
            urlImg:" ",
            descripcion: " "
        });
// crear funcion para ver los inputs
    const handleInputChange = (e)=>{
        //console.log(e.target.value);
        setDatos( {
            ...datos, 
            [e.target.name] : e.target.value
        });
    }
    // guardado del LocalStorage
        function guardar(e){
            e.preventDefault();            
            if(datos.titulo !==" " && datos.descripcion !==" " && datos.url !==" "){
                setarray(array=>
                    [...array,datos]  
                );    
            }
            else {
                alert("Usted debe completar todo los campos!!!");                
            }
            esconder(esconder=>!esconder);
        }

// MAIN()
    return (
        <>        
        <div className="popWindow__header">
            <h2 tabIndex="0" aria-label={title}> <img alt="imagen. icono de imagen." src={icon}/>  {title}</h2>
        </div>
        {/* <form  className="form background-form" onSubmit={handleSubmit}> */}
        <form  name="formularioUI" className="form background-form">
            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
            <div className="input-group">
                <input 
                    className="input input-background" 
                    type="text"
                    // value={inputValue}
                    name="titulo"
                    placeholder="Titulo"
                    onChange={handleInputChange}>
                </input>

                {/* mostrar y esconder el campo url de video */}
                 
                <input 
                    className="input input-background" 
                    type="text"
                    name="url"
                    placeholder="Url del juego"
                    // value={inputValue}
                    onChange={handleInputChange}>
                </input>
                <input 
                    className="input input-background" 
                    type="text"
                    name="urlImg"
                    placeholder="Url de la imagen"
                    // value={inputValue}
                    onChange={handleInputChange}>
                </input>
               <textarea className="input-textArea input-background" type="text" name="descripcion" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>
            </div>
            {/* si es un VIDEO muestra los botones de video */}
                <div className="center">
                    <Boton buttonStyle="verde" icono={iconos.check} onClick={guardar}> Guardar </Boton>
                    <Boton buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Boton>
                </div>
        </form>
        </>
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
PopJuego.propTypes = { 
    setData: PropTypes.func.isRequired,
}