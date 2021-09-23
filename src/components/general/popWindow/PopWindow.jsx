import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './popWindow.css'

export const PopWindow = ({title,icon,setData}) => {

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
            <h2> <img src={icon}/>  {title}</h2>
        </div>
        {/* <form  className="form background-form" onSubmit={handleSubmit}> */}
        <form  className="form background-form">
            <h3>Complete los campos a continuación</h3>
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

                <input 
                    className="input input-background" 
                    type="text"
                    name="url"
                    placeholder="Url"
                    // value={inputValue}
                    onChange={handleInputChange}>
                </input>
                
                <textarea className="input-textArea input-background" type="text" name="descripcion" onChange={handleInputChange} placeholder="Descripción"></textarea>

            </div>
        </form>
        </>
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
PopWindow.propTypes = { 
    setData: PropTypes.func.isRequired,
}