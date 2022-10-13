// Funcion para eliminar Productos del array carrito

function eliminarProdCarrito(indice){
    carrito[indice].cantidad--;
    
    if(carrito[indice].cantidad ===0){
      carrito.splice(indice,1);
    }
    mostrarCarrito();
    calcularTotalProductos();
  }