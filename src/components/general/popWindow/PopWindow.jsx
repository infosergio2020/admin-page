import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './popWindow.css'

export const PopWindow = ({title,icon,setData}) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue( e.target.value );
    }

    const handleSubmit = (e)=>{
        console.log('hadleSubmit',inputValue);
        e.preventDefault();        
        if(inputValue.trim().length > 2 ){
            setData( cats => [inputValue,...cats]);
            setInputValue('');
        }else {
            setInputValue('');
        }
    }

    return (
        <>
        <div className="popWindow__header">
            <h2> <img src={icon}/>  {title}</h2>
        </div>
        <form  className="form background-form" onSubmit={handleSubmit}>
            <h3>Complete los campos a continuación</h3>
            <p> {inputValue} </p>
            <div className="input-group">
                <input 
                    className="input input-background" 
                    type="text"
                    value={inputValue}
                    placeholder="Titulo"
                    onChange={handleInputChange}>
                </input>

                <input 
                    className="input input-background" 
                    type="text"
                    placeholder="Url"
                    value={inputValue}
                    onChange={handleInputChange}>
                </input>
                
                <textarea className="input-textArea input-background" >Descripción</textarea>

            </div>
        </form>
        </>
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
PopWindow.propTypes = { 
    setData: PropTypes.func.isRequired,
}