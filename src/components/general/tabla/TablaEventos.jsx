import React from 'react'
// COMPONENTE
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import { useFetchEventos } from '../../../hooks/useFetchEventos';
// CSS
import "./tabla.css";

export const TablaEventos = ({item}) => {
    const {data:eventos,loading} = useFetchEventos(item);
    return (
        <div className="table-container">
            <TablaHeader columna={3} titulo={'Titulo'}/>
            {
                eventos.map((evento,i=0) => ( 
                    <TablaItem key={evento.id} columna={3} data={evento} acciones={3} index={i} />
                    ))
            }
        </div>
    )
}