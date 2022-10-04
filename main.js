
// Array de objetos , que contiene todos los productos con sus respectivos elementos

const catalogoChocolates = [
  {
    id: 1,
    nombre: "Piezas de Chocolate",
    img: "./assets/productos/piezasdechocolate.jpg",
    precio: 100,
    descripcion : "Caja que incluye 21 unidades variadas de chocolates",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Castagna de Coco",
    img: "./assets/productos/castagnadecoco.jpg",
    precio: 200,
    descripcion : "Bolsa de castagnas de Coco de 500grs",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Chocolate Sin Azucar",
    img: "./assets/productos/chocolatesinazucar.jpg",
    precio: 150,
    descripcion : "Caja de 400grs de Chocolate Sin Azucar",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Gatito De Chocolate",
    img: "./assets/productos/gatochocolate.png",
    precio: 330,
    descripcion : "Gatito de Chocolate relleno de dulce de leche",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Marroc",
    img: "./assets/productos/marroc.jpg",
    precio: 120,
    descripcion : "Barra de chocolate marroc de 200grs",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Ositos de Chocolate",
    img: "./assets/productos/osito_blanco.jpg",
    precio: 220,
    descripcion : "Caja de Ositos de Chocolate Blanco 150grs",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Tableta de Pistacho",
    img: "./assets/productos/tablet_pistacho.jpg",
    precio: 400,
    descripcion : "Tableta de chocolate Negro con Pistacho",
    cantidad : 1,
  },
  {
    id: 8,
    nombre: "Chocolate Amargo",
    img: "./assets/productos/tabletaamargo.jpg",
    precio: 350,
    descripcion : "Tableta de chocolate amargo 300grs",
    cantidad : 1,
  },
  {
    
    id: 9,
    nombre: "Chocolate Blanco",
    img: "./assets/productos/tabletablanco.jpg",
    precio: 260,
    descripcion : "Barra de chocolate blanco de 300grs",
    cantidad : 1,
  },
];

// array de carrito donde se van a ir acumulando los productos que se van seleccionando

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


mostrarProductos();


// Funcion para mostrar los items que contiene el carrito

function mostrarCarrito (){
  const carri = document;
  let carritoInner =carri.querySelector('#carrito');

  carritoInner.innerHTML ="";

  // ( AQUI AGREGUE DESTRUCTURACION EN PARAMETROS)
  
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
  })
  producto.querySelector('.agregarItemCarr').addEventListener('click', ()=>{
    agregarCarrito(id);
  })

  carritoInner.appendChild(producto);

  })

  localStorage.setItem("carrito", JSON.stringify(carrito));

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