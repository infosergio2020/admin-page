import React from 'react'
import { NewArea } from "../containers/NewArea";
import { ViewEnVivo } from "../containers/ViewEnVivo";

export const CrearEnvivo = () => {
    return (
        <>
            <NewArea area={false} evento={true} envivo={false} />
            {/* <ViewEnVivo /> */}
        </>
    )
}
