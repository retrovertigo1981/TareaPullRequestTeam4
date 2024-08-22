// Obtener los valores del formulario
const name = document.getElementById("inputName").value;
const email = document.getElementById("inputEmail").value;
const nickname = document.getElementById("inputNickname").value;

// Insertar los valores en la tarjeta

// Mostrar la tarjeta
document.getElementById("btnSubmit").addEventListener("click", function () {
  console.log(name, email, nickname);
});

// Agregar datos a la tabla
let tabla = document.getElementById("myTable");

// funcionalidad para limpiar el form al enviar
