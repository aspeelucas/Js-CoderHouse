
// array de carrito donde se van a ir acumulando los productos que se van seleccionando

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


mostrarProductos();


// Funcion para mostrar los items que contiene el carrito

function mostrarCarrito (){
  const carri = document;
  let carritoInner =carri.querySelector('#carrito');

  carritoInner.innerHTML ="";

  carrito.forEach(({img,nombre,descripcion,precio,cantidad,id }, index)=>{
    let producto = document.createElement('div');
    producto.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5' )
    producto.innerHTML = `
    <div class="card text-dark" style="width: 18rem;">
    <img src="${img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body colorCards colorTextoCard">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
      <p>$ ${precio}</p>
      <p>Cantidad: ${cantidad}</p>
      <div class = 'd-flex  justify-content-center gap-3'>
      <button  class="btn colorButonCards agregarItemCarr" id="${id}">Agregar</a>
      <button  class="btn btn-danger eliminarItemCarr" id="${id}">Eliminar</a>
      </div>
    </div>
  </div>`

  producto.querySelector('.eliminarItemCarr').addEventListener('click', ()=>{
    eliminarProdCarrito(index);
    Toastify({
      text : 'PRODUCTO ELIMINADO',
      duration : 2000,
      style :{
        color:"#F3E1E1",
        background :"#FA7070"
      }
    }).showToast();
  })
  producto.querySelector('.agregarItemCarr').addEventListener('click', ()=>{
    agregarCarrito(id);
    Toastify({
      text : 'SE AÑADIO EL PRODUCTO',
      duration : 2000,
      style :{
        color:"#0F0F0F",
        background :"#C0EDA6"
      }
    }).showToast();
  })

  carritoInner.appendChild(producto);

  })

  localStorage.setItem("carrito", JSON.stringify(carrito));
// contador de unidades icono carrito de compras

  let alertaCarrito = document.querySelector('.itemsCarrito');
  let itemsCarrito = carrito.reduce((acc,actual)=>acc+actual.cantidad,0)
  alertaCarrito.innerHTML = itemsCarrito ;
  

  calcularTotalProductos();
}

// Funcion para calcular precio total de mis productos en el carrito
function calcularTotalProductos(){
  let total = 0;

  carrito.forEach((p)=>{

  total += p.precio * p.cantidad;
  })
  

  const tota = document.getElementById('total');
  tota.innerHTML =` <h5>TOTAL $ ${total}</h5> `
}

// evento click para ver carrito
let imprimirBoton = document.getElementById("openCar");
imprimirBoton.addEventListener("click", mostrarCarrito)


// Cuando carga el contenido de la ventana , ejecuta la funcion

window.addEventListener("load", mostrarCarrito);