import React from 'react'
import PropTypes from 'prop-types';
import "./tablaHeader.css";

export const TablaHeader = ({ columna, titulo }) => {
    if(columna === 4){
        return (
            <div className="table-header">
               <h2>id</h2>
               <h2>titulo</h2>
               <h2>tipo</h2>
               <h2>acciones</h2>
            </div>
        )    
    } else if(columna === 3) {
        return (
            <div className="table-header">
               <h2>id</h2>
               <h2>{titulo}</h2>
               <h2>acciones</h2>
            </div>
        )
    } else {
        return (
            <>
                No hay cantidad de columnas especificada en el encabezado
            </>
        )
    }
}

TablaHeader.propTypes = { 
    columna: PropTypes.number.isRequired
}