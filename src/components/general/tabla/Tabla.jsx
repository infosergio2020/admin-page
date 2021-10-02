import React from 'react'
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import "./tabla.css";


export const Tabla = ({item}) => {


    return (
        <div className="table-container">
            <TablaHeader columna={4}/>
            <TablaItem columna={4} data={{id:1,titulo:"hola123",tipo:"comedia"}} acciones={2} />

            <TablaHeader columna={3} titulo={'atraccion'}/>
            <TablaItem columna={3} data={{id:1,titulo:"hola456"}} acciones={3} espar={true} />
            
            <TablaHeader columna={3} titulo={'areas'}/>
            <TablaItem columna={3} data={{id:1,titulo:"chau123"}} acciones={1} />

            <TablaHeader columna={3} titulo={'titulo'}/>
            <TablaItem columna={3} data={{id:1,titulo:"chau456"}} acciones={2} />
        </div>
    )
}
