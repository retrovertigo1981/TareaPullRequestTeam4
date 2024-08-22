document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const comentario = document.getElementById("inputComentario").value;

  // Insertar los valores en la tarjeta
  document.getElementById("cardName").textContent = name;
  document.getElementById("cardEmail").textContent = email;
  document.getElementById("cardComentario").textContent = comentario;

  // Mostrar la tarjeta
  document.getElementById("cardContainer").classList.remove("d-none");
});
