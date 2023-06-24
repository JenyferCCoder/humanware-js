let productosCarrito = localStorage.getItem("productos_carrito");
productosCarrito = JSON.parse(productosCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito_vacio");
const contenedorCarritoProductos = document.querySelector("#carrito_productos");
const contenedorCarritoFunciones = document.querySelector("#carrito_funciones");
const contenedorCarritoComprado = document.querySelector("#carrito_comprado");
let botonEliminar = document.querySelectorAll(".carrito_producto_eliminar")

function cargarProductosCarrito(){
    if (productosCarrito && productosCarrito.length > 0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoFunciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosCarrito.forEach(producto => {
    
            const div = document.createElement ("div");
            div.classList.add("carrito_producto");
            div.innerHTML = `
            <img class="carrito_producto_img" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito_producto_nombre">
                <small>Nombre</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito_producto_cantidad">
                <small>Cantidad</small>
                <h3>${producto.cantidad}</h3>
            </div>
            <div class="carrito_producto_precio">
                <small>Precio</small>
                <h3>S/.${producto.precio}</h3>
            </div>
            <div class="carrito_producto_subtotal">
                <small>Sub-Total</small>
                <h3>S/.${producto.precio * producto.cantidad}</h3>
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
    }

    actualizarBotonEliminar();
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
