import { useState,useEffect } from "react"
import { getAtracciones } from "../helpers/getAtracciones";

export const useFetchAtracciones = ( ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getAtracciones()
            .then( atracciones => {
                    setState({
                        data:atracciones,
                        loading:false
                    });
            })
    }, [ ]);

    return state;
}