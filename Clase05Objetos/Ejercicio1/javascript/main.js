/* cree una función que le permita construir un objeto
    para modelar un empleado con: 
      Nombre
      Apellido
      
      
      Pida al usuario del sistema que ingrese los datos 
      para un empleado e imprima la información ingresada en consola, 
      usando el objeto creado.
  */

function Empleado(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

const nombre = prompt("Ingrese su Nombre:");
const apellido = prompt("Ingrese su Apellido:");

const empleado = new Empleado(nombre, apellido);
console.log(empleado);
