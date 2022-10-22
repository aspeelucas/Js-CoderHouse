// array de carrito donde se van a ir acumulando los productos que se van seleccionando

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let vaciarCarts = document.getElementById("vaciarCarrito");
let finalizarCompra = document.getElementById("finalizarC");
// evento click para ver carrito
let imprimirBoton = document.getElementById("openCar");
imprimirBoton.addEventListener("click", mostrarCarrito());
let formulario = document.getElementById("formularioPrincipal");
let purchaseModal;

mostrarProductos();

// Funcion para renderizar los items que contiene el carrito

function mostrarCarrito() {
  const carri = document;
  let carritoInner = carri.querySelector("#carrito");

  carritoInner.innerHTML = "";

  carrito.forEach(
    ({ img, nombre, descripcion, precio, cantidad, id }, index) => {
      let producto = document.createElement("div");
      producto.classList.add(
        "col-12",
        "col-md-4",
        "mb-5",
        "mt-5",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "gap-5"
      );
      producto.innerHTML = `
    <div class="card text-dark" style="width: 18rem;">
    <img src="${img}" class="card-img-top w-100" alt="imagen producto">
    <div class="card-body colorCards colorTextoCard">
      <h5 class="card-title tituloProductoCard">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
      <p>$ ${precio}</p>
      <p class="tituloProductoCard">Cantidad: ${cantidad}</p>
      <div class = 'd-flex  justify-content-center gap-3'>
      <button  class="btn colorButonCards agregarItemCarr" id="${id}">Agregar</a>
      <button  class="btn btn-danger eliminarItemCarr tituloProductoCard" id="${id}">Eliminar</a>
      </div>
    </div>
  </div>
    `;

      producto
        .querySelector(".eliminarItemCarr")
        .addEventListener("click", () => {
          eliminarProdCarrito(index);
          Toastify({
            text: "PRODUCTO ELIMINADO",
            duration: 2000,
            style: {
              color: "#F3E1E1",
              background: "#FA7070",
            },
          }).showToast();
        });
      producto
        .querySelector(".agregarItemCarr")
        .addEventListener("click", () => {
          agregarCarrito(id);
          Toastify({
            text: "SE AÑADIO EL PRODUCTO",
            duration: 2000,
            style: {
              color: "#0F0F0F",
              background: "#C0EDA6",
            },
          }).showToast();
        });

      carritoInner.appendChild(producto);
    }
  );

  localStorage.setItem("carrito", JSON.stringify(carrito));

  // contador de unidades icono carrito de compras en la navBar

  let alertaCarrito = document.querySelector(".itemsCarrito");
  let itemsCarrito = carrito.reduce((acc, actual) => acc + actual.cantidad, 0);
  alertaCarrito.innerHTML = itemsCarrito;

  // contador de unidades icono carrito de compras botonFixed

  let alertaCarritoo = document.querySelector(".itemsCarritoo");
  let itemsCarritoo = carrito.reduce((acc, actual) => acc + actual.cantidad, 0);
  alertaCarritoo.innerHTML = itemsCarritoo;

  calcularTotalProductos();

  bloqueoButtonVaciar();

  bloqueoButtonFinalizar();
}

// -----------------FUNCIONES VARIAS --------------------------

// Funcion para calcular precio total de mis productos en el carrito
function calcularTotalProductos() {
  let total = 0;

  carrito.forEach((p) => {
    total += p.precio * p.cantidad;
  });

  const tota = document.getElementById("total");
  tota.innerHTML = ` <h5 class ="textoVaciar">TOTAL $ ${total}</h5> `;
}

// Cuando carga el contenido de la ventana , ejecuta la funcion

window.addEventListener("load", mostrarCarrito);

// Funcion que vacia el carrito de compra y envia una alerta para confirmar dicha accion

vaciarCarts.addEventListener("click", () => {
  Swal.fire({
    title: "Seguro desea vaciar el carrito ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#7D5A5A",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, vaciar",
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarTodo();
      Swal.fire("Carrito Eliminado", "Su carrito esta vacio", "success");
    }
  });
});

// Funcio para vaciar y renderizar el carrito de compras
function vaciarTodo() {
  carrito = [];
  mostrarCarrito();
  calcularTotalProductos();
}

// Finalizar compra

finalizarCompra.addEventListener("click", () => {
  guardarModalYMostrar();
});

// Funciones para bloquear los botones de "Finalizar compra" y "Vaciar carrito" si no hay productos en el carrito de compras

function bloqueoButtonVaciar() {
  if (!Boolean(carrito.length)) {
    vaciarCarts.setAttribute("disabled", "true");
  } else vaciarCarts.removeAttribute("disabled");
}

function bloqueoButtonFinalizar() {
  if (!Boolean(carrito.length)) {
    finalizarCompra.setAttribute("disabled", "true");
  } else finalizarCompra.removeAttribute("disabled");
}

// Funciones del Form de pago, renderiza , requiere rellenar campos y una vez q se preciona el boton "PAGAR" vacia el carrito de compras, resetea el formulario, arroja una alerta y cierra el modal

//Renderiza el modal del formulario de Pago

const guardarModalYMostrar = () => {
  purchaseModal = new bootstrap.Modal("#modalFinalizaCompra", { focus: true });
  purchaseModal.show();
};

// Funcion que muestra el cartel de compra exitosa , vacia el carrito , oculta el modal y lo borra
const mostrarSwalYOcultarModal = () => {
  Swal.fire({
    icon: "success",
    title: "Compra Exitosa",
    text: "Gracias por elegirnos!",
    timer: 4000,
  });
  vaciarTodo();
  purchaseModal.hide();
  delete purchaseModal;
};
// Evento submit sobre el boton "Pagar" del form de pago , resetea el formulario, evitar el comportamiento por default del html y ejecuta la funcion anterior
formulario.addEventListener("submit", (e) => {
  formulario.reset();
  e.preventDefault();
  mostrarSwalYOcultarModal();
});
