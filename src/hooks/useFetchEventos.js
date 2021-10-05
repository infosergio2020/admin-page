import { useState,useEffect } from "react"
import { getEventos } from "../helpers/getEventos";

export const useFetchEventos = ( ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getEventos()
            .then( eventos => {
                    setState({
                        data:eventos,
                        loading:false
                    });
            })
    }, [ ]);

    return state;
}