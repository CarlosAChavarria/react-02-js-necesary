
// GIPHY API

const apiKey = "dCfWt5TflNlhErLXiVuca4b6qXE1zlEg";

const apiFetch = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// promesas para acceder al cuerpo de la respuesta
// apiFetch.then(resolve => {
//     console.log(resolve, typeof(resolve));
//     resolve.json().then( resp => {
//         console.log(resp);
//     })
// }).catch(error => {
//     console.log('Error:', error);
// })

// promesas encadenadas

apiFetch.then( resp => resp.json() ).then(data => {
    console.log(data.data.images.original.url);
    const urlImage = data.data.images.original.url;
    const vista = document.createElement('img');
    vista.src = urlImage;
    document.body.appendChild(vista);
})
.catch(console.log);

