import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './popWindow.css'

export const PopWindow = ({title, setData}) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue( e.target.value );
        console.log('handleInputChange llamado');
    }

    const handleSubmit = (e)=>{
        console.log('hadleSubmit',inputValue);
        e.preventDefault();
        
        if(inputValue.trim().length > 2 ){
            setData( cats => [inputValue,...cats]);
            setInputValue('');
        }else {
            // alert('Debe tener mas de 2 caracteres');
            setInputValue('');
        }
        
    }

    return (
        <>
        <div className="popWindow__header">
            <h2>{title}</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <p> {inputValue} </p>
            <input className="input input-background" 
                   type="text"
                   value={inputValue}
                   onChange={handleInputChange}>
            </input>
        </form>
        </>
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
PopWindow.propTypes = { 
    setData: PropTypes.func.isRequired,
}