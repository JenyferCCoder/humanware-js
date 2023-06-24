//productos
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

const btn_subcatego = document.querySelector(".btn_subcatego")


function cargarProductos() {
    const contenedorProductos = document.querySelector("#contenedor_productos");
    const productoTarjeta = document.querySelector(".tarjeta_produc");

    productos.forEach(producto => {
        const nuevaTarjeta = productoTarjeta.cloneNode(true);
        nuevaTarjeta.querySelector(".producto_img").src = producto.imagen;
        nuevaTarjeta.querySelector(".producto_img").alt = producto.titulo;
        nuevaTarjeta.querySelector(".tarjeta_titulo_produc").textContent = producto.titulo;
        nuevaTarjeta.querySelector(".tarjeta_precio").textContent = `S/. ${producto.precio}`;
        nuevaTarjeta.querySelector(".producto_agregar").id = producto.id;

        contenedorProductos.appendChild(nuevaTarjeta);
    });
}

cargarProductos();

btn_subcatego.forEach(boton => {
    boton.addEventListener("click", (e) =>{

    })
})

/*

//productos
const productos = [
    //Cámaras
    {
        id: "webcam-ha-w04",
        titulo: "Webcam HA W04",
        imagen: "./recursos/imagenes/productos/camaras/WEBCAM-HA-W04-1.jpg",
        categoria: {
            nombre: "Cámaras",
            id: "camaras"
        },
        precio: 55
    },

    {
        id: "webcam-ha-w06",
        titulo: "Webcam HA W06",
        imagen: "./recursos/imagenes/productos/camaras/WEBCAM-HA-W06-4.jpg",
        categoria: {
            nombre: "Cámaras",
            id: "camaras"
        },
        precio: 57
    },

    {
        id: "webcam-hw-12",
        titulo: "Webcam HW12",
        imagen: "./recursos/imagenes/productos/camaras/WEBCAM-HW12-2.jpg",
        categoria: {
            nombre: "Cámaras",
            id: "camaras"
        },
        precio: 57
    },

    {
        id: "webcam-hw-15",
        titulo: "Webcam HW15",
        imagen: "./recursos/imagenes/productos/camaras/WEBCAM-HW15-2.jpg",
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
            imagen: "./recursos/imagenes/productos/case/APOLO-318-BK-2-copia.jpg",
            categoria: {
                nombre: "Case",
                id: "case"
            },
            precio: 87
        },
    
        {
            id: "case_apolo_601bsng",
            titulo: "APOLO-601BS-NG",
            imagen: "./recursos/imagenes/productos/case/APOLO-601BS-NG-PLATA-2-copia.jpg",
            categoria: {
                nombre: "Case",
                id: "case"
            },
            precio: 85
        },
    
        {
            id: "case_scorpio_5506",
            titulo: "SCORPIO 5506",
            imagen: "./recursos/imagenes/productos/case/halion scorpio 5506 con fuente.jpg",
            categoria: {
                nombre: "Case",
                id: "case"
            },
            precio: 74
        },
    
        {
            id: "case_orion_851",
            titulo: "ORION-851",
            imagen: "./recursos/imagenes/productos/case/ORION-851-3-copia.jpg",
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
            imagen: "./recursos/imagenes/productos/monitores/image-7a3947230c9541a5923c555028010c10.jpg",
            categoria: {
                nombre: "Monitores",
                id: "monitores"
            },
            precio: 670
        },
    
        {
            id: "monitor_hg_2702",
            titulo: "HG-2702",
            imagen: "./recursos/imagenes/productos/monitores/MONITOR-HG-2702-2.jpg",
            categoria: {
                nombre: "Monitores",
                id: "monitores"
            },
            precio: 756
        },
    
        {
            id: "monitor_gaming_24201",
            titulo: "GAMING-24201",
            imagen: "./recursos/imagenes/productos/monitores/Monitor-Gaming-24201-1.jpg",
            categoria: {
                nombre: "Monitores",
                id: "monitores"
            },
            precio: 958
        }
];


function cargarProductos() {
    const productoTarjeta = document.querySelector(".tarjeta_produc");

    productos.forEach(producto => {
        const imagen = productoTarjeta.querySelector(".producto_img");
        const titulo = productoTarjeta.querySelector(".tarjeta_titulo_produc");
        const precio = productoTarjeta.querySelector(".tarjeta_precio");
        const boton = productoTarjeta.querySelector(".producto_agregar");

        imagen.src = producto.imagen;
        titulo.textContent = producto.titulo;
        precio.textContent = `S/. ${producto.precio}`;
        boton.id = producto.id;
    });
}

cargarProductos();

*/





/*
const contenedorProductos = document.querySelector("#contenedor_productos");

function cargarProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto_img" src="${producto.imagen}">
            <div>
                <h4 class="tarjeta_titulo_produc">${producto.titulo}</h4>
                <p class="tarjeta_precio"> S/.${producto.precio} </p>
                <button class="producto_agregar" id="${producto.id}" >Agregar</button>
            </div>    
            
        `;

        contenedorProductos.append(div);

    })
}

cargarProductos();
*/
/*

<div class="tarjeta_produc">
<img class="producto_img" src="../recursos/imagenes/productos/camaras/WEBCAM-HA-W04-1.jpg" alt="camara-web HA-W04">
<div>
    <h4 class="tarjeta_titulo_produc">HA-W04</h4>
    <p class="tarjeta_precio"> S/. 55 </p>
    <button class="producto_agregar">Agregar</button>
</div>

</div> */