const showImage = async () => {
    try {
        const apiKey = "dCfWt5TflNlhErLXiVuca4b6qXE1zlEg";
        const fetchApi = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await fetchApi.json();
        console.log('data', data);
        const randomUrl = data.images.original.url;
        const vista = document.createElement('img');
        vista.src = randomUrl;
        document.body.appendChild(vista);
    } catch (error) {
        const errorMessage = document.createElement('h2');
        errorMessage.innerText = 'Ha ocurrido un error con el servicio'
        document.body.appendChild(errorMessage);
    }
    
}

showImage();