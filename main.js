// El trabajo que hice va realizado a un e-comerse de una tienda de chocolates. La idea es simular un proceso de login y compra en la tienda.


// Variables globales 

let nombreUsuario = "";
let contrasena = "";
let opcion = 0;

const productos = [
  { id: 1, nombre: "Barras de chocolate", precio: 10 },
  { id: 2, nombre: "Chocolate en rama", precio: 20 },
  { id: 3, nombre: "Bombones", precio: 50 },
];

let carrito = [];

// funcion para agregar carrito

const agregarCarrito = (id) => {
  let cantidad = parseInt(
    prompt("Ingresa la cantidades que desees de este producto :")
  );
  while (isNaN(cantidad)){
    cantidad = parseInt(
        prompt("Ingrese una cantidad valida\n\n Ingresa la cantidades que desees de este producto :"))
  }
  const indice = carrito.findIndex((item) => item.id === id);
  if (indice != -1) {
    carrito[indice].cantidad += cantidad;
  } else {
    const nuevoItem = productos.find((item) => item.id === id);
    nuevoItem.cantidad = cantidad;
    carrito.push(nuevoItem);
  }
  console.log(carrito);
};

// Funcion obtener subtotal

const obtenerSubTotal = () => {
  const subtotal = carrito.reduce(
    (acc, elemento) => acc + elemento.precio * elemento.cantidad,
    0
  );
  return subtotal;
};

const obtenerTotal = () => {
  return (obtenerSubTotal() * 1.21).toFixed(2);
};
//  Funcion para ver carrito

const obtenerCarritoTexto = () => {

  const mostrarCarrito  =  carrito.map((itemCar,indice)=>indice+ 1 + " . Nombre : "+  itemCar.nombre +"."+ "  Precio : " +" $ "+ (itemCar.precio * itemCar.cantidad)+ "." + " Cantidad : "+ itemCar.cantidad +" unidades. ").join("\n");
  return (mostrarCarrito);
};

// funcion eliminar item del carrito

const eliminarItem = ()=>{
    if (carrito.length == 0) return alert ("El carrito esta vacio");
    const indice = Number( prompt ("Seleccione por numero el item  que quiere eliminar : \n " + obtenerCarritoTexto()  ) )-1;
    const carritoTemporal = carrito.filter( (item,i) => i != indice);
    if (carritoTemporal.length == carrito.length){alert( "No se encontro el producto en el carrito") }
    else{
        carrito= carritoTemporal
        alert("Se ha eliminado el producto correctamente");
    };
}
// FIN DE FUNCIONES 


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

do {
  let todoLosProductos = productos.map(
    (prod) => prod.id + "-" + prod.nombre + " " + " $ " + prod.precio + " c/u \n"
  );
  opcion = Number(
    prompt(
      "Selecciona el numero del producto que deseas comprar : \n\n" +
        todoLosProductos.join("") +
        "4-Ver carrito" +
        "\n5-Eliminar item" +
        "\n6-Finalizar"
    )
  );

  switch (opcion) {
    case 1:
    case 2:
    case 3:
      agregarCarrito(opcion);
      break;
    case 4:
        alert (obtenerCarritoTexto() || "El carrito esta vacio");
        break;
    case 5: 
    eliminarItem();
    break;
    case 6:
      if (carrito.length !== 0) {
        alert(
          "Detalle de su compra : \nSubtotal : " +
            obtenerSubTotal() +
            "$" +
            "\nIva : 21% \nTotal : " +
            obtenerTotal() +
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
} while (opcion !== 6);
