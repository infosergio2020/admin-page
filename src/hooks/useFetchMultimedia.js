import { useState,useEffect } from "react"
import { getArchivos } from "../helpers/getArchivos";

export const useFetchArchivos = ( item) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getArchivos(item)
            .then( archivos => {
                    setState({
                        data:archivos,
                        loading:false
                    });
            })
    }, [item ]);

    return state;
}