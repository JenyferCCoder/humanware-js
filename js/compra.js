const productosCarrito = JSON.parse(localStorage.getItem("productos-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito_vacio");
const contenedorCarritoProductos = document.querySelector("#carrito_productos");
const contenedorCarritoFunciones = document.querySelector("#carrito_funciones");
const contenedorCarritoComprado = document.querySelector("#carrito_comprado");

if (productosCarrito){
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

}