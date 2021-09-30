import { useState,useEffect } from "react"
import { getEventos } from "../helpers/getEventos";

export const useFetchEventos = ( titulo ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getEventos(titulo)
            .then( eventos => {
                    setState({
                        data:eventos,
                        loading:false
                    });
            })
    }, [ titulo ]);

    return state;
}