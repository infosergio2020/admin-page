import React from 'react'
import { NewArea } from "../containers/NewArea";
import { ViewEvento } from "../containers/ViewEvento";

export const CrearEvento = () => {
    return (
        <>
            <NewArea area={false} evento={true} envivo={false} />
            {/* <ViewEvento /> */}
        </>
    )
}
