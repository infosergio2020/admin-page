import React from 'react';
import './tabla.css';
import { TablaItem } from "./tablaItem/TablaItem";

export const Tabla = ({}) => {
    return (
        <div className='tabla'>
           <ul className='tabla-background'>
               <div className="table-header">
                    <div className="table-header-container">
                        <h2>id</h2>
                    </div>
                    <div className="table-header-container">
                        <h2>titulo</h2>
                    </div>
                    <div className="table-header-container">
                        <h2>tipo</h2>
                    </div>
                    <div className="table-header-container">
                        <h2>acciones</h2>
                    </div>
               </div>
               <TablaItem item = { 
                                {"id":1,
                                 "titulo":"documental",
                                 "tipo":"juego",
                                 "acciones":"read"}
                                 }/>
               <TablaItem item = { 
                                {"id":2,
                                 "titulo":"entrevista",
                                 "tipo":"video",
                                 "acciones":"read"}
                                 } espar={false} />
               <TablaItem item = { 
                                {"id":3,
                                 "titulo":"mas cosas",
                                 "tipo":"otros",
                                 "acciones":"write"}
                                 } />
           </ul>
        </div>
    )
}
