
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

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Funcion para mostrar el catalogo de productos en el index principal en forma de cards, crea un div y cards para cada producto del catalogo.

function mostrarProductos(){

  const tienda = document.getElementById('tienda');

// Filtro de  Productos por Precio


// creacion filtro Mayor Precio
const btnMayorPrecio = document.querySelector('.mayorFil');
btnMayorPrecio.addEventListener('click' , ()=>{

  const product = catalogoChocolates.sort((a,b)=>b.precio - a.precio)
 

  tienda.innerHTML ='';
  product.forEach((e)=>{


    const div = document.createElement('div');

    div.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5')

    div.innerHTML = `
    <div class="card text-dark colorCards" style="width: 18rem;">
    <img src="${e.img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body colorTextoCard">
      <h5 class="card-title">${e.nombre}</h5>
      <p class="card-text">${e.descripcion}</p>
      <p>$ ${e.precio}</p>
      <button  class="btn colorButonCards" id="${e.id}">Agregar al Carrito</a>
    </div>
   </div>`

   div.querySelector('button').addEventListener('click',()=>{
    agregarCarrito(e.id)
  
    })
  
    tienda.appendChild(div);
  })

})

  
// Fin filtro Mayor Precio

// Inicio Filtro menor Precio

const btnMenorPrecio = document.querySelector('.menorFil');

btnMenorPrecio.addEventListener('click' , ()=>{

  const productMenor = catalogoChocolates.sort((a,b)=>a.precio - b.precio)
  

  tienda.innerHTML ='';
  productMenor.forEach((ele)=>{


    const div = document.createElement('div');

    div.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5')

    div.innerHTML = `
    <div class="card text-dark colorCards" style="width: 18rem;">
    <img src="${ele.img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body colorTextoCard">
      <h5 class="card-title">${ele.nombre}</h5>
      <p class="card-text">${ele.descripcion}</p>
      <p>$ ${ele.precio}</p>
      <button  class="btn colorButonCards" id="${ele.id}">Agregar al Carrito</a>
    </div>
   </div>`

   div.querySelector('button').addEventListener('click',()=>{
    agregarCarrito(ele.id)
  
    })
  
    tienda.appendChild(div);
  })

})

// Fin Filtro Menor Precio

// Imprimir catalogo original
  catalogoChocolates.forEach((p)=>{

    let producto = document.createElement('div');
    producto.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5')
    producto.innerHTML = `
    <div class="card text-dark colorCards" style="width: 18rem;">
    <img src="${p.img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body colorTextoCard">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text">${p.descripcion}</p>
      <p>$ ${p.precio}</p>
      <button  class="btn colorButonCards" id="${p.id}">Agregar al Carrito</a>
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
    
    alert(`se agrego otra unidad de ${producto.nombre} a su carrito`)
  
  }
  else{
    producto.cantidad=1;
    carrito.push(producto);


    alert(`Se agrego ${producto.nombre} a su carrito de compras!`)

  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  
  calcularTotalProductos();
  mostrarCarrito();
}

// Funcion para mostrar los items que contiene el carrito

function mostrarCarrito (){
  const carri = document;
  let carritoInner =carri.querySelector('#carrito');

  carritoInner.innerHTML ="";
  
  carrito.forEach((p, index)=>{
    let producto = document.createElement('div');
    producto.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5' )
    producto.innerHTML = `
    <div class="card text-dark" style="width: 18rem;">
    <img src="${p.img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body colorCards colorTextoCard">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text">${p.descripcion}</p>
      <p>$ ${p.precio}</p>
      <p>Cantidad: ${p.cantidad}</p>
      <div class = 'd-flex  justify-content-center gap-3'>
      <button  class="btn colorButonCards agregarItemCarr" id="${p.id}">Agregar</a>
      <button  class="btn btn-danger eliminarItemCarr" id="${p.id}">Eliminar</a>
      </div>
    </div>
  </div>`

  producto.querySelector('.eliminarItemCarr').addEventListener('click', ()=>{
    eliminarProdCarrito(index);
  })
  producto.querySelector('.agregarItemCarr').addEventListener('click', ()=>{
    agregarCarrito(p.id);
  })

  carritoInner.appendChild(producto);

  })

  localStorage.setItem("carrito", JSON.stringify(carrito));

  let alertaCarrito = document.querySelector('.itemsCarrito');
  let itemsCarrito = carrito.reduce((acc,actual)=>acc+actual.cantidad,0)
  alertaCarrito.innerHTML = itemsCarrito ;
  

  calcularTotalProductos();
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
  

  const tota = document.getElementById('total');
  tota.innerHTML =` <h5>TOTAL $ ${total}</h5> `
}

// evento click para ver carrito
let imprimirBoton = document.getElementById("openCar");
imprimirBoton.addEventListener("click", mostrarCarrito)


// Cuando carga el contenido de la ventana , ejecuta la funcion

window.addEventListener("load", mostrarCarrito);