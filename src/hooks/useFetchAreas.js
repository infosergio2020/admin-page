import { useState,useEffect } from "react"
import { getAreas } from "../helpers/getAreas";

export const useFetchAreas = (item ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getAreas(item)
            .then( areas => {
                    setState({
                        data:areas,
                        loading:false
                    });
            })
    }, [ item]);

    return state;
}