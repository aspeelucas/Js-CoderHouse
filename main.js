
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
const carrito =[]

// Funcion para mostrar el catalogo de productos en el index principal en forma de cards, crea un div y cards para cada producto del catalogo.

function mostrarProductos(){

  const tienda = document.getElementById('tienda');
  catalogoChocolates.forEach((p)=>{

    let producto = document.createElement('div');
    producto.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5')
    producto.innerHTML = `
    <div class="card text-dark" style="width: 18rem;">
    <img src="${p.img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text">${p.descripcion}</p>
      <p>$ ${p.precio}</p>
      <button  class="btn btn-primary" id="${p.id}">Agregar al Carrito</a>
    </div>
  </div>`

    tienda.appendChild(producto);

    producto.querySelector('button').addEventListener('click',()=>
    agregarCarrito(p.id)
    
    )
  }
  )
 
}

mostrarProductos();

// Funcion para agregar items al carrito si no estan o sumarlos si ya se encuentran en el mismo

function agregarCarrito(id){
  let producto = catalogoChocolates.find(producto=> producto.id === id);
  let productoEnCarrito = carrito.find(producto=>producto.id ===id);
  if(productoEnCarrito){
    productoEnCarrito.cantidad++;
    console.log(carrito);
    alert(`se agrego otra unidad de ${producto.nombre} a su carrito`)
    
  }
  else{
    producto.cantidad=1;
    carrito.push(producto);

    console.log(carrito);

    alert(`Se agrego ${producto.nombre} a su carrito de compras!`)


  }
  
  mostrarCarrito();
  calcularTotalProductos();
}

// Funcion para mostrar los items que contiene el carrito

function mostrarCarrito (){
  const carri = document;
  let carritoInner =carri.querySelector('#carrito');

  carritoInner.innerHTML ="";
  carrito.forEach((p, index)=>{
    let producto = document.createElement('div');
    producto.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5')
    producto.innerHTML = `
    <div class="card text-dark" style="width: 18rem;">
    <img src="${p.img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text">${p.descripcion}</p>
      <p>$ ${p.precio}</p>
      <p>Cantidad: ${p.cantidad}</p>
      <button  class="btn btn-danger" id="${p.id}">Eliminar</a>
    </div>
  </div>`

  producto.querySelector('button').addEventListener('click', ()=>{
    eliminarProdCarrito(index)
  })
  carritoInner.appendChild(producto);

  })

}

// Funcion  para eliminar productos del array de carritos

function eliminarProdCarrito(indice){
  carrito[indice].cantidad--;
  
  alert(`Se elimino una unid de ${carrito[indice].nombre}`);

  if(carrito[indice].cantidad ===0){
    carrito.splice(indice,1);
  }
  mostrarCarrito();
  calcularTotalProductos();
}

// Funcion para calcular precio total de mis productos en el carrito
function calcularTotalProductos(){
  let total = 0;

  carrito.forEach((p)=>{

  total += p.precio * p.cantidad;
  })
  console.log(total);

  const tota = document.getElementById('total');
  tota.innerHTML =` <h5>$ ${total}</h5> `
}