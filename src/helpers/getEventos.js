export const getEventos = async ( titulo ) => {
    if(titulo){
        console.log(titulo);
        return []
    } else {
        const eventos = [
            {   "id":1,
                "titulo":"documental",
                "tipo":"juego",
                "acciones":1
            },
            {   "id":2,
                "titulo":"entrevista",
                "tipo":"video",
                "acciones":1
            },
            {   "id":3,
                "titulo":"informe",
                "tipo":"notas",
                "acciones":1
            }
        ]
        return eventos;
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
}