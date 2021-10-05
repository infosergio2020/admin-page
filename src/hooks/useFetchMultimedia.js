import { useState,useEffect } from "react"
import { getArchivos } from "../helpers/getArchivos";

export const useFetchArchivos = ( ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getArchivos()
            .then( archivos => {
                    setState({
                        data:archivos,
                        loading:false
                    });
            })
    }, [ ]);

    return state;
}