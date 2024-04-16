const cargarJsonBTN = document.querySelector('#cargarJSON');
cargarJsonBTN.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';

    fetch(url).then(respuesta =>{
      //  console.log(respuesta)
        return respuesta.json();
    }).then(resultado =>{
        //console.log(resultado)
        mostraHTML(resultado);
    })
    
}


function mostraHTML({empresa, id, nombre, trabajo}){
   
const contenido = document.querySelector('.contenido');
contenido.innerHTML = `
    <p>Empresa: ${empresa}</p>
    <p>Id: ${id}</p>
    <p>Nombre: ${nombre}</p>
    <p>Trabajo: ${trabajo}</p>
 `;
  
}