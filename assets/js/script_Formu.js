// escuchador del envento de carga de la pagina, lo que hace que
// siempre se cargue la lista por defecto

window.addEventListener("load", function () {
  actualizarLista();
});

// llamamos a la tabla desde aca

const cuerpoTabla = document.getElementById("cuerpo-tabla");

// Array de invitados por defecto

const invitados = [
  { nombre: "Caroline", apellido: "Soldan", nickname: "@caroline" },
  { nombre: "Dayanna", apellido: "Nuñez", nickname: "@dayanna" },
  { nombre: "Sebastián", apellido: "Peña", nickname: "@seba" },
  { nombre: "Claudio", apellido: "Melin", nickname: "@ElMago" },
  { nombre: "Cristobal", apellido: "Varas", nickname: "@Tob41" },
];

// funcion que actualiza la lista

function actualizarLista() {
  cuerpoTabla.innerHTML = "";
  for (let i = 0; i < invitados.length; i++) {
    const invitado = invitados[i];
    const fila = document.createElement("tr");
    fila.innerHTML = `
       <th scope="row">${i + 1}</th>
       <td>${invitado.nombre}</td>
       <td>${invitado.apellido}</td>
       <td>${invitado.nickname}</td>    
    `;
    cuerpoTabla.appendChild(fila);
  }
}

// agregar nuevo nombre a la lista

function agregarInvitado(nombre, apellido, nickname) {
  if (nombre === "" || apellido === "" || nickname === "") {
    alert("Complete el formulario por favor, no deje informacion en blanco");
  } else {
    invitados.push({ nombre, apellido, nickname });
    actualizarLista();
  }
}

// boton agregar invitados

document.getElementById("btnSubmit").addEventListener("click", function () {
  const nombre = document.getElementById("inputName").value;
  const apellido = document.getElementById("inputEmail").value;
  const nickname = document.getElementById("inputNickname").value;
  agregarInvitado(nombre, apellido, nickname);
  document.getElementById("inputName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputNickname").value = "";
});
