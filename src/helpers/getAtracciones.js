export const getAtracciones = async ( titulo ) => {
    const atracciones = [
        {   "id":1,
            "titulo":"Juego 1",
            "acciones":2
        },
        {   "id":2,
            "titulo":"4 casos",
            "acciones":2
        },
        {   "id":3,
            "titulo":"Poster",
            "acciones":2
        }
    ]

    if(titulo){
        const result = atracciones.filter(atraccion => atraccion['titulo'] === titulo);
        
        if(result.length===0){
            console.log(result);
            return atracciones;
        }
        return result;
    } else {
        return atracciones;
    }
    
}