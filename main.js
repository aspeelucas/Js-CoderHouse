

// Formulario de validacion de ingreso para nuevo usuario

let preguntarNuevamente = true;

alert("Bienvenido , porfavor registrate para  continuar");
let nombreUsuario = prompt("Ingresa tu usuario");
do {
  let ingresaCorreo = prompt("Ingresa tu correo electronico :");
  let confirmaCorreo = prompt("Re ingresa tu correo para finalizar");

  if (ingresaCorreo === confirmaCorreo) {
    alert(nombreUsuario + " ! Tu registro se realizo de manera exitosa");
    preguntarNuevamente = false;
  } else {
    alert("Los correos no coinciden , por favor vuelva a intentarlo");
  }
} while (preguntarNuevamente);

