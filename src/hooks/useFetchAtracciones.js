import { useState,useEffect } from "react"
import { getAtracciones } from "../helpers/getAtracciones";

export const useFetchAtracciones = (item ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getAtracciones(item)
            .then( atracciones => {
                    setState({
                        data:atracciones,
                        loading:false
                    });
            })
    }, [ item]);

    return {state,setState};
}