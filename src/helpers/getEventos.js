export const getEventos = async ( titulo ) => {
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

    if(titulo){
        const result = eventos.filter(evento => evento['titulo'] === titulo);
        return result;
    } else {
        return eventos;
    }
}