// Funcion para agregar items al carrito si no estan o sumarlos si ya se encuentran en el mismo

function agregarCarrito(id){
    let producto = catalogoChocolates.find(producto=> producto.id === id);
    let productoEnCarrito = carrito.find(producto=>producto.id ===id);
  
    if(productoEnCarrito){
      productoEnCarrito.cantidad++;
    }
    else{
      producto.cantidad=1;
  
      // SPREAD ARRAY CARRITO
  
      carrito=[...carrito, producto];
    }
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    calcularTotalProductos();
    mostrarCarrito();
  }
  