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
  
  // Imprimir catalogo original( AQUI AGREGUE DESTRUCTURACION EN PARAMETROS)
    catalogoChocolates.forEach(({img, nombre ,descripcion ,precio ,id })=>{
  
      let producto = document.createElement('div');
      producto.classList.add('col-12','col-md-4','mb-5','mt-5','d-flex','justify-content-center','align-items-center','gap-5')
      producto.innerHTML = `
      <div class="card text-dark colorCards" style="width: 18rem;">
      <img src="${img}" class="card-img-top w-100" alt="imagen producto">
      <div class="card-body colorTextoCard">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${descripcion}</p>
        <p>$ ${precio}</p>
        <button  class="btn colorButonCards" id="${id}">Agregar al Carrito</a>
      </div>
    </div>`
  
      tienda.appendChild(producto);
  
      producto.querySelector('button').addEventListener('click',()=>
      agregarCarrito(id)
      
      )
    }
    )
   
  }