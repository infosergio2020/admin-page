import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../general/boton/boton';
import './Video.css'


//ICONOS
import iconos from '../../icons/iconos';

// FUNCION para los TABS viewMultimedia
export const Video = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

// comienzo del MAIN
    return (
        <>

        <div className="center flex">
      
            <div>hola</div>
            <div>hola2</div>
      
      
        </div>
    </>
  );
}


// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
Video.propTypes = { 
    setData: PropTypes.func.isRequired,
}