import React from 'react'
// COMPONENTE
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import { useFetchAtracciones } from '../../../hooks/useFetchAtracciones';
import { eliminarAtraccion } from "../../../helpers/getAtracciones";
// CSS
import "./tabla.css";

export const TablaAtraccion = ({item}) => {
    // const {data:atracciones,loading} = useFetchAtracciones(item);
    const {state,setState} = useFetchAtracciones(item);
    const { data:atracciones, loading } = state;
    // ori: posiblemente para todos los otros componentes no recibirian item
    // ori: Si quiero agrego el buscador en los otros componentes (pero en el prototipo no esta reflejado esto, asique lo pienso)
    //ori: cambiar data:eventos   por data:areas

    const eliminar = (item)=>{
        let contador=0
        let lista = atracciones
        lista.map((atraccion) => {
            if (atraccion.id == item){
                lista.splice(contador,1);
            }
            ++contador;
        });

        setState({
                data:lista,
                loading:false
            })
        //llamar al servicio para eliminarlo de la BD
        eliminarAtraccion(item);
    }

    return (
        <>
            {loading && <p>Cargando...</p>}
            <div className="table-container">
                {/* <h2>{item}</h2> */}
                <TablaHeader columna={3} titulo={'Titulo'}/>
                {//ori: cambiar eventos.map por areas.map
                //ori: cambiar eventos,i=0 por areas,i=0
                // ori: por lo tanto, en TablaItem cambio evento por area obviamente
                // ori: en acciones me fijo cuantos botones usa cada tabla.
                // ori: me fijo por otro lado, cuantas columnas tiene si son 3 o 4
                atracciones.map((atraccion,i=0) => ( 
                        <TablaItem key={atraccion.id} columna={3} data={atraccion} acciones={2} index={i} eliminar={eliminar}/>
                        ))
                }
            </div>
        </>
    )
}