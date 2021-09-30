export const getEventos = async ( titulo ) => {
    if(titulo){
        console.log(titulo);
        return []
    } else {
        eventos = [
            {   "id":1,
                "titulo":"documental",
                "tipo":"juego",
                "acciones":"read"
            },
            {   "id":2,
                "titulo":"entrevista",
                "tipo":"video",
                "acciones":"read"
            },
            {   "id":3,
                "titulo":"informe",
                "tipo":"notas",
                "acciones":"read"
            }
        ]
    }
    
    // CONVERTIR A JSON FORMAT
    // const {data} = await resp.json();
    
    // FORMATEAR EVENTOS
    // const eventos = data.map(img => {
    //     return {
    //         id: img.id,
    //         title: img.title,
    //         url: img.images.downsized_medium.url
    //     }
    // })

    return eventos;
}