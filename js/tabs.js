//Este ejercicio tiene que hacer lo siguiente: 
//Al pinchar en cada boton, solo se tiene que mostrar la seccion correspondiente.


var botones = document.querySelectorAll('#menu li a');

for(boton of botones){
    boton.addEventListener('click', capturarBoton);

}

function capturarBoton(event){
    event.preventDefault();
    // console.log(event);

    let seccion = event.target.innerText.toLowerCase();
    //capturo la seccion.
    // console.log(seccion);
    
    //para ocultar secciones. oculto todas
    let secciones = document.querySelectorAll('.contenedor section');

    //recorro todas las secciones. pongo display none
    secciones.forEach( seccion => seccion.style.display = 'none');

    //y cuando pulses la que quieres, lo pongo en display block.
    document.getElementById(seccion).style.display = 'block';
}