
const productos = [
    //Cámaras
    {
        id: "webcam-ha-w04",
        titulo: "Webcam HA W04",
        imagen: "../recursos/imagenes/productos/camaras/WEBCAM-HA-W04-1.jpg",
        categoria: {
            nombre: "Cámaras",
            id: "camaras"
        },
        precio: 55
    },

    {
        id: "webcam-ha-w06",
        titulo: "Webcam HA W06",
        imagen: "../recursos/imagenes/productos/camaras/WEBCAM-HA-W06-4.jpg",
        categoria: {
            nombre: "Cámaras",
            id: "camaras"
        },
        precio: 57
    },

    {
        id: "webcam-hw-12",
        titulo: "Webcam HW12",
        imagen: "../recursos/imagenes/productos/camaras/WEBCAM-HW12-2.jpg",
        categoria: {
            nombre: "Cámaras",
            id: "camaras"
        },
        precio: 57
    },

    {
        id: "webcam-hw-15",
        titulo: "Webcam HW15",
        imagen: "../recursos/imagenes/productos/camaras/WEBCAM-HW15-2.jpg",
        categoria: {
            nombre: "Cámaras",
            id: "camaras"
        },
        precio: 65
    },

        //Case
        {
            id: "case_apolo_318bk",
            titulo: "APOLO-318-BK",
            imagen: "../recursos/imagenes/productos/case/APOLO-318-BK-2-copia.jpg",
            categoria: {
                nombre: "Case",
                id: "case"
            },
            precio: 87
        },
    
        {
            id: "case_apolo_601bsng",
            titulo: "APOLO-601BS-NG",
            imagen: "../recursos/imagenes/productos/case/APOLO-601BS-NG-PLATA-2-copia.jpg",
            categoria: {
                nombre: "Case",
                id: "case"
            },
            precio: 85
        },
    
        {
            id: "case_scorpio_5506",
            titulo: "SCORPIO 5506",
            imagen: "../recursos/imagenes/productos/case/halion scorpio 5506 con fuente.jpg",
            categoria: {
                nombre: "Case",
                id: "case"
            },
            precio: 74
        },
    
        {
            id: "case_orion_851",
            titulo: "ORION-851",
            imagen: "../recursos/imagenes/productos/case/ORION-851-3-copia.jpg",
            categoria: {
                nombre: "Case",
                id: "case"
            },
            precio: 115
        },

        //Monitores
        {
            id: "monitor_samsung_curvo",
            titulo: "SAMSUNG CURVO",
            imagen: "../recursos/imagenes/productos/monitores/image-7a3947230c9541a5923c555028010c10.jpg",
            categoria: {
                nombre: "Monitores",
                id: "monitores"
            },
            precio: 670
        },
    
        {
            id: "monitor_hg_2702",
            titulo: "HG-2702",
            imagen: "../recursos/imagenes/productos/monitores/MONITOR-HG-2702-2.jpg",
            categoria: {
                nombre: "Monitores",
                id: "monitores"
            },
            precio: 756
        },
    
        {
            id: "monitor_gaming_24201",
            titulo: "GAMING-24201",
            imagen: "../recursos/imagenes/productos/monitores/Monitor-Gaming-24201-1.jpg",
            categoria: {
                nombre: "Monitores",
                id: "monitores"
            },
            precio: 958
        }
];

const btn_subcatego = document.querySelectorAll(".btn_subcatego");
const contenedorProductos = document.querySelector("#contenedor_productos");
const productoTarjeta = document.querySelector(".tarjeta_produc");
const tituloProductos = document.querySelector("#titulo_productos");
let botonAgregar = document.querySelectorAll(".producto_agregar");
const numero = document.querySelector("#numero");

function cargarProductos(productosSeleccionados) {
    contenedorProductos.innerHTML = "";

    productosSeleccionados.forEach(producto => {
        const nuevaTarjeta = productoTarjeta.cloneNode(true);
        nuevaTarjeta.querySelector(".producto_img").src = producto.imagen;
        nuevaTarjeta.querySelector(".producto_img").alt = producto.titulo;
        nuevaTarjeta.querySelector(".tarjeta_titulo_produc").textContent = producto.titulo;
        nuevaTarjeta.querySelector(".tarjeta_precio").textContent = `S/. ${producto.precio}`;
        nuevaTarjeta.querySelector(".producto_agregar").id = producto.id;

        contenedorProductos.appendChild(nuevaTarjeta);
    });

    actualizarBotonAgregar();
    console.log(botonAgregar);
}

cargarProductos(productos);


btn_subcatego.forEach(boton => {
    boton.addEventListener("click", (e) => {
      btn_subcatego.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");
  
      if (e.currentTarget.id != "todos"){
        const productosSubcategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        
        tituloProductos.innerHTML = productosSubcategoria.categoria.nombre;
        
        const categoriaSeleccionada = e.currentTarget.id;
        const productosFiltrados = productos.filter(producto => producto.categoria.id === categoriaSeleccionada);
        cargarProductos(productosFiltrados);
      } else{
        tituloProductos.innerHTML = "Todos los Productos";
        cargarProductos(productos);
      }

    });
  });

function actualizarBotonAgregar(){
    botonAgregar = document.querySelectorAll(".producto_agregar");

    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    });
}

let productosCarrito;


const productosCarritoLS = JSON.parse(localStorage.getItem("productos-carrito"));
if(productosCarritoLS){
    productosCarrito = productosCarritoLS;
    actualizarNumero();
}else{
    productosCarrito = [];
}


function agregarCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosCarrito.some(producto => producto.id === idBoton)){
        const index = productosCarrito.findIndex(producto => producto.id === idBoton);
        productosCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }

    actualizarNumero();

    localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
}

function actualizarNumero(){
    let nuevoNumero = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerHTML = nuevoNumero;
}