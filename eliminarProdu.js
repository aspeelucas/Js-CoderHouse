// Funcion para eliminar Productos del array carrito

function eliminarProdCarrito(indice){
    carrito[indice].cantidad--;
    
    alert(`Se elimino una unid de ${carrito[indice].nombre}`);
  
    if(carrito[indice].cantidad ===0){
      carrito.splice(indice,1);
    }
    mostrarCarrito();
    calcularTotalProductos();
  }