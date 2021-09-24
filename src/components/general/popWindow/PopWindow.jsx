import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../boton/boton';
import './popWindow.css'

// //ICONOS
import iconos from '../../../icons/iconos';

// import iconos from '../../../icons/check.svg';

export const PopWindow = ({title,icon,setData,video}) => {

// declaracion de un estado
   
        const [datos, setDatos] = useState({
            titulo:" ",
            url:" ",
            descripcion: " "
        });
   
    
    const handleInputChange = (e)=>{
        setDatos( {
            ...datos, 
            [e.target.name] : e.target.value
        });
    }

    // const handleSubmit = (e)=>{
    //     console.log('hadleSubmit',inputValue);
    //     e.preventDefault();        
    //     if(inputValue.trim().length > 2 ){
    //         setData( cats => [inputValue,...cats]);
    //         setInputValue('');
    //     }else {
    //         setInputValue('');
    //     }
    // }

    return (
        <>
        
        <div className="popWindow__header">
            <h2 tabIndex="0" aria-label={title}> <img alt="imagen. icono de imagen." src={icon}/>  {title}</h2>
        </div>
        {/* <form  className="form background-form" onSubmit={handleSubmit}> */}
        <form  className="form background-form">
            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
            <p>titulo: {datos.titulo} </p>
            <p>url: {datos.url} </p>
            <p>descripcion: {datos.descripcion} </p>
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
                {video && 
                <input 
                    className="input input-background" 
                    type="text"
                    name="url"
                    placeholder="Url"
                    // value={inputValue}
                    onChange={handleInputChange}>
                </input>
                
                }

                {/* mostrar y esconder el campo cargar imagen */}
                {!video && 
                <div>
                {/* <input 
                    className="input input-background" 
                    type="text"
                    name="url"
                    placeholder="otra cosa que le corresponde a la imagen"
                    // value={inputValue}
                    onChange={handleInputChange}>
                </input> */}
                <input 
                    className="input input-background" 
                    type="file"
                    name="url"
                
                    // value={inputValue}
                    accept="image/gif, image/png, image/peg, "
                    onChange={handleInputChange}>
                </input>
                </div>
            
                
                }

                <textarea className="input-textArea input-background" type="text" name="descripcion" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>

            </div>
            <div className="center">

            <Button buttonStyle="verde" icono={iconos.check}> Guardar </Button>
            <Button buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Button>
                </div>
        </form>
        </>
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
PopWindow.propTypes = { 
    setData: PropTypes.func.isRequired,
}