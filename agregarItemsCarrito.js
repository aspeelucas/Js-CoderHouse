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
  
    // TERNARIO EN ALERT
    alert(productoEnCarrito ?`se agrego otra unidad de ${producto.nombre} a su carrito`: `Se agrego ${producto.nombre} a su carrito de compras!`)
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    calcularTotalProductos();
    mostrarCarrito();
  }
  