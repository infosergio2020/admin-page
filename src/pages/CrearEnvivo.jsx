import React from 'react'
import { NewEnvivo } from "../containers/NewEnvivo";
import { ViewEnVivo } from "../containers/ViewEnVivo";

export const CrearEnvivo = () => {
    return (
        <>
            <NewEnvivo envivo={true} />
            {/* <ViewEnVivo /> */}
        </>
    )
}
