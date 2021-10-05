import { useState,useEffect } from "react"
import { getAreas } from "../helpers/getAreas";

export const useFetchAreas = ( ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getAreas()
            .then( areas => {
                    setState({
                        data:areas,
                        loading:false
                    });
            })
    }, [ ]);

    return state;
}