/*const nombre = document.querySelector(".nombre");
const edad = prompt("Ingrese su edad");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Tú nombre es: ${nombre}, tienes ${edad} años, y estas estudiando ${lenguaje}`);*/

document.getElementById('capturar').addEventListener('click', function(){
    //Capturamos el valor en el input
    let nombre = document.getElementById('nombre').value;
    //Mostramos el valor en el párrafo
    document.getElementById('resultado').textContent = `El nombre ingresado es: ${nombre}`;
    console.log(nombre);
});
