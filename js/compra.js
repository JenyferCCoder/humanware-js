let productosCarrito = localStorage.getItem("productos_carrito");
productosCarrito = JSON.parse(productosCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito_vacio");
const contenedorCarritoProductos = document.querySelector("#carrito_productos");
const contenedorCarritoFunciones = document.querySelector("#carrito_funciones");
const contenedorCarritoComprado = document.querySelector("#carrito_comprado");
const contenedorCarritoDescuento = document.querySelector("#descuento");
let botonEliminar = document.querySelectorAll(".carrito_producto_eliminar");
const botonVaciar = document.querySelector(".carrito_funciones_vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector(".carrito_funciones_comprar");

const inputCodigoDescuento = document.querySelector("#codigo_descuento");
const btnAplicarDescuento = document.querySelector("#btn_aplicar_descuento");
const mensajeDescuentoAplicado = document.querySelector("#mensaje_descuento_aplicado");

function cargarProductosCarrito(){
    if (productosCarrito && productosCarrito.length > 0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoFunciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        contenedorCarritoDescuento.classList.remove("disabled");
        
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosCarrito.forEach(producto => {
    
            const div = document.createElement ("div");
            div.classList.add("carrito_producto");
            div.innerHTML = `
            <img class="carrito_producto_img" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito_producto_nombre">
                <small>Nombre</small>
                <h5>${producto.titulo}</h5>
            </div>
            <div class="carrito_producto_cantidad">
                <small>Cantidad</small>
                <h5>${producto.cantidad}</h5>
            </div>
            <div class="carrito_producto_precio">
                <small>Precio</small>
                <h5>S/.${producto.precio}</h5>
            </div>
            <div class="carrito_producto_subtotal">
                <small>Sub-Total</small>
                <h5>S/.${producto.precio * producto.cantidad}</h5>
            </div>
            <button class="carrito_producto_eliminar" id="${producto.id}"> <i class="bi bi-trash-fill"></i> </button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoFunciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        contenedorCarritoDescuento.classList.add("disabled");
    }

    actualizarBotonEliminar();
    actualizarTotal();
}
cargarProductosCarrito();

function actualizarBotonEliminar(){
    botonEliminar = document.querySelectorAll(".carrito_producto_eliminar");

    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarCarrito);
    });
}

function eliminarCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosCarrito.findIndex(producto => producto.id === idBoton);

    productosCarrito.splice(index,1);
    cargarProductosCarrito();

    localStorage.setItem("productos_carrito", JSON.stringify(productosCarrito));
    
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){
    productosCarrito.length = 0;
    localStorage.setItem("productos_carrito", JSON.stringify(productosCarrito));
    cargarProductosCarrito();
}


function actualizarTotal(){
    const totalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerHTML = `S/. ${totalCalculado}`;
}


btnAplicarDescuento.addEventListener("click", aplicarDescuento);

function aplicarDescuento() {
  const codigoDescuento = inputCodigoDescuento.value;
  const totalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  
  if (codigoDescuento === "nuevoHL") {
    const descuento = totalCalculado * 0.1; // 10% de descuento
    const totalConDescuento = totalCalculado - descuento;
    total.innerHTML = `S/. ${totalConDescuento}`;
    mensajeDescuentoAplicado.style.display = "inline"; // Mostrar mensaje de descuento aplicado
  } else {
    mensajeDescuentoAplicado.style.display = "none"; // Ocultar mensaje de descuento aplicado
  }
}



botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito(){
    productosCarrito.length = 0;
    localStorage.setItem("productos_carrito", JSON.stringify(productosCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoFunciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
    contenedorCarritoDescuento.classList.add("disabled");
}



