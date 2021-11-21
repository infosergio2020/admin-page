export const getArchivos = async ( titulo ) => {
        const archivos = [
            {   "id":1,
                "titulo":"entrevistas realizadas",
                "tipo":"video",
                "acciones":1
            },
            {   "id":2,
                "titulo":"soy una imagen piola",
                "tipo":"imagen",
                "acciones":1
            },
            {   "id":3,
                "titulo":"ubicaciones en el mapa",
                "tipo":"imagen",
                "acciones":1
            },
            {   "id":4,
                "titulo":"como prevenir inundaciones",
                "tipo":"video",
                "acciones":1
            }
        ]
        if(titulo){
            const result = archivos.filter(archivo => archivo['titulo'] === titulo);
            
            if(result.length===0){
                console.log(result);
                return archivos;
            }
            return result;
        } else {
            return archivos;
        }
        return archivos;
}