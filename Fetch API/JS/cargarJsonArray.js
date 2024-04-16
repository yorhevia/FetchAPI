const cargarJsonArraybtn = document.querySelector('#cargarJSONArray');
cargarJsonArraybtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';

    fetch(url).then(respuesta => respuesta.json())
     .then(resultado => mostraHTML(resultado))

}

function mostraHTML(empleados){
    
    const contenido = document.querySelector('.contenido');
    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;
        html  += `
        <p>Empresa: ${empresa}</p>
        <p>Id: ${id}</p>
        <p>Nombre: ${nombre}</p>
        <p>Trabajo: ${trabajo}</p>
     `;
      
    });
    contenido.innerHTML = html;
}