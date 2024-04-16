const cargarApibtn = document.querySelector('#cargarAPI')
cargarApibtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url).then(respuesta=>respuesta.json())
     .then(resultado=>mostraHTML(resultado))
}

function mostraHTML(datos){
    const contenido = document.querySelector('.contenido');
     let html = '';

     datos.forEach(perfil => {

        const {author, post_url} = perfil;
        html +=  ` 
        <p>Autor: ${author}</p>
        <a href= "${post_url}" target = "_blank"> ver imagen </a>
        `
        
     });

     contenido.innerHTML = html;
}
