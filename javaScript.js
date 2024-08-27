/*const nombre = document.querySelector(".nombre");
const edad = prompt("Ingrese su edad");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Tú nombre es: ${nombre}, tienes ${edad} años, y estas estudiando ${lenguaje}`);

document.getElementById('capturar').addEventListener('click', function(){
    //Capturamos el valor en el input
    let nombre = document.getElementById('nombre').value;
    //Mostramos el valor en el párrafo
    document.getElementById('resultado').textContent = `El nombre ingresado es: ${nombre}`;
    console.log(nombre);
});*/

document.addEventListener('DOMContentLoaded', function () {
    //Seleccionamos el botón usando la clase
    const btnCapturar = document.querySelector('.btn-capturar');

    //Agregamos un evento clic al botón
    btnCapturar.addEventListener('click', function() {
        //Capturamos el valor del input usando la clase
        let nombre = document.querySelector('.nombre').value;
        let edad = document.querySelector('.edad').value;
        let lenguaje = document.querySelector('.lenguaje').value;

        //Mostramos el valor en el párrafo usando la clase
        document.querySelector('.resultado').textContent = `El nombre ingresado es ${nombre} tienes ${edad} años, y el lenguaje de programación es: ${lenguaje}`;
    });
});
