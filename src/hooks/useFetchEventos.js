import { useState,useEffect } from "react"
import { getEventos } from "../helpers/getEventos";

export const useFetchEventos = ( item ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        // console.log('HOLAAAAAA');
        // console.log(item);
        getEventos(item)
            .then( eventos => {
                    setState({
                        data:eventos,
                        loading:false
                    });
            })
    }, [ item ]);

    return state;
}