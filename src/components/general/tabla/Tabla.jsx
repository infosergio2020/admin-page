import React from 'react'
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import "./tabla.css";
import { useFetchEventos } from '../../../hooks/useFetchEventos';


export const Tabla = ({item,tipo}) => {

    const {data:eventos,loading} = useFetchEventos(item);
    
    return (
        <div className="table-container">
            <TablaHeader columna={4}/>
            {
                eventos.map(evento => ( 
                    <TablaItem key={evento.id} columna={4} data={evento} acciones={2} />
                 ))
            }

            {/* <TablaHeader columna={3} titulo={'atraccion'}/>
                <TablaItem columna={3} data={{id:1,titulo:"hola456"}} acciones={3} espar={true} /> */}
        </div>
    )
}
