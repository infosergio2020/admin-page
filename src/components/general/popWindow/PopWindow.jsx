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
        // declaracion de un estado
   
        
// crear funcion para ver los inputs
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
    // const insertarArchivos= async()=>{
    //     const f=new FormData();

    //     for(let i=0; i<archivos.lenght;i++){
    //         f.append("files",archivos[i]);
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
            <p>archivos: {archivos.url} </p>
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
                <div className="center">
                
                <input 
                    className="" 
                    type="file"
                    name="url"
                    placeholder="Subir archivo"
                    
                    
                
                    // value={inputValue}
                    accept="image/gif, image/png, image/peg, "
                    multiple onChange={()=>subirArchivos}>
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