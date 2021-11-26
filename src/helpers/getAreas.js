export const getAreas = async (titulo ) => {
    const areas = [
        {   "id":1,
            "titulo":"area 1",
            "tipo":"video",
            "acciones":2
        },
        {   "id":2,
            "titulo":"area 2",
            "tipo":"juego",
            "acciones":2
        },
        {   "id":3,
            "titulo":"area 3",
            "tipo":"imagen",
            "acciones":2
        },
        {   "id":4,
            "titulo":"area 4",
            "tipo":"juego",
            "acciones":2
        }
    ]
    if(titulo){
        const result = areas.filter(area => area['titulo'] === titulo);
        
        if(result.length===0){
            console.log(result);
            return areas;
        }
        return result;
    } else {
        return areas;
    }


}