// Simulador interactivo de tienda de chocolates

// Variables globales
let nombreUsuario = "";
let contrasena = "";
let opcion = 0;
let precio = 0;
let subtotal = 0;
let total = 0;
let cantidad = 0;

alert("Bienvenido a La Chocolateria");

do {
  nombreUsuario = prompt("Ingresa tu nombre de usuario");
  contrasena = prompt("Ingresa tu contraseña");
  if (nombreUsuario != 0 && contrasena != 0)
    alert("Bienvenido ! " + nombreUsuario);
  else {
    alert("Los datos ingresados no son validos");
  }
} while (nombreUsuario.length === 0 || contrasena.length === 0);

// Funcion para calcular precio
const precioCalculado = (precio) => {
    cantidad = Number(
      prompt("Ingresa la cantidades que desees de este producto :")
    );
    subtotal += precio * cantidad;
    total = (subtotal * 1.21).toFixed(2);
    return total;
  };
// Finaliza funcion para calcular precio

do {
  opcion = Number(
    prompt(
      "Selecciona el producto que desees : \n1. Bombones\n2. Rama de chocolate\n3. Chocolate en barra\n4. FINALIZAR"
    )
  );
  switch (opcion) {
    case 1:
      precio = 10;
      precioCalculado(precio);
      break;
    case 2:
      precio = 20;
      precioCalculado(precio);
      break;
    case 3:
      precio = 15;
      precioCalculado(precio);
      break;
    case 4:
      if (total !== 0) {
        alert(
          "Detalle de su compra : \nSubtotal : " +
            subtotal +
            "$" +
            "\nIva : 21% \nTotal : " +
            total +
            "$"
        );
        alert("Gracias por tu compra " + nombreUsuario);
      } else {
        alert("Carrito de compras vacio");
        alert("Nos vemos luego");
      }
      break;
    default:
      alert("Ingresa una opcion valida");
      break;
  }
} while (opcion !== 4);

