const cargarPeliculas = async()=>{

    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=a3670ef14842882c0c3767d14027f98c&language=es-MX');
        
        console.log(respuesta);

        if(respuesta.status === 200){

            const datos = await respuesta.json();
            console.log(datos.results);

        }else if(respuesta.status === 401){
            console.log('llave mal ');
        }else if(respuesta.status=== 404){
            console.log('La pelicula no existe');
        }else{
            console.log('no sabemos que paso');
        }

    }catch(error){
        console.log(error);
    }
}
cargarPeliculas();