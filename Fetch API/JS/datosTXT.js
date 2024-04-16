const cargarTXTbtn = document.querySelector('#cargarTxt');
cargarTXTbtn.addEventListener('click',obtenerDatos)

function obtenerDatos(){
    //consulta
    const url = 'data/datos.txt'
    fetch(url)
    .then(respuesta=>{
        console.log(respuesta)
        return respuesta.text();
    })
    .then(datos=>{
        console.log(datos)
    })
    .catch(error=>{
        console.log(error);
    })
}