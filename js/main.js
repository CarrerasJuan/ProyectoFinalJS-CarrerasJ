//Productos
const productos = [
    //Perfumes hombres
    {
        id: "perfume-01",
        titulo: "Perfume01",
        imagen: "./img/hombres/perfume01.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-02",
        titulo: "Perfume02",
        imagen: "./img/hombres/perfume02.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-03",
        titulo: "Perfume03",
        imagen: "./img/hombres/perfume04.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-04",
        titulo: "Perfume04",
        imagen: "./img/hombres/perfume05.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-05",
        titulo: "Perfume05",
        imagen: "./img/hombres/perfume06.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-06",
        titulo: "Perfume06",
        imagen: "./img/hombres/perfume08.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-07",
        titulo: "Perfume07",
        imagen: "./img/hombres/perfume09.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-08",
        titulo: "Perfume08",
        imagen: "./img/hombres/perfume10.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-09",
        titulo: "Perfume09",
        imagen: "./img/hombres/perfume11.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-10",
        titulo: "Perfume10",
        imagen: "./img/hombres/perfume13.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-11",
        titulo: "Perfume11",
        imagen: "./img/hombres/perfume15.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-12",
        titulo: "Perfume12",
        imagen: "./img/hombres/perfume18.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-13",
        titulo: "Perfume13",
        imagen: "./img/hombres/perfume19.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-14",
        titulo: "Perfume14",
        imagen: "./img/hombres/perfume20.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-15",
        titulo: "Perfume15",
        imagen: "./img/hombres/perfume24.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
    {
        id: "perfume-16",
        titulo: "Perfume16",
        imagen: "./img/hombres/perfume25.jpg",
        categoria: {
            nombre:"Hombres",
            id:"hombres",
        },
        precio: 1000
    },
//Perfumes Mujeres
    {
        id: "perfume-17",
        titulo: "Perfume17",
        imagen: "./img/mujeres/perfume07.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
    {
        id: "perfume-18",
        titulo: "Perfume18",
        imagen: "./img/mujeres/perfume12.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
    {
        id: "perfume-19",
        titulo: "Perfume19",
        imagen: "./img/mujeres/perfume16.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
    {
        id: "perfume-20",
        titulo: "Perfume20",
        imagen: "./img/mujeres/perfume17.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
    {
        id: "perfume-21",
        titulo: "Perfume21",
        imagen: "./img/mujeres/perfume21.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
    {
        id: "perfume-22",
        titulo: "Perfume22",
        imagen: "./img/mujeres/perfume22.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
    {
        id: "perfume-23",
        titulo: "Perfume23",
        imagen: "./img/mujeres/perfume23.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
    {
        id: "perfume-24",
        titulo: "Perfume24",
        imagen: "./img/mujeres/perfume26.jpg",
        categoria: {
            nombre:"Mujeres",
            id:"mujeres",
        },
        precio: 1000
    },
];

//🔽Aqui metemere cada uno de los productos.
const contenedorProductos = document.querySelector("#contenedor-productos");

//🔽generamos solapas y asi poder jugar con el dom en categorias.
const botonesCategorias = document.querySelectorAll(".boton-categoria");

//🔽cambiamos el titulo principal cada vez que seleccionamos las diferentes categorias que no sea siempre "todoslosproductos".
const tituloPrincipal = document.querySelector("#titulo-principal");

//🔽Varibale para generar "agregar" en los botones del carrito para luego cambiarlo lo ejecutamos con let.
let botonesAgregar = document.querySelectorAll(".producto-agregar");

//🔽ejecutamos una constante para que al agregar un objeto al carrito cuente el numero del carrito.
const numerito = document.querySelector("#numerito");

//🔽Aqui podra recorrer el arrays y los podra cargar directo 1 x 1 en el html.
function cargarProductos(productosElegidos) {
             //🔽luego de recorrer el foreach vamos a vaciar el contenedor para que no se autocomplete cuando cargamos los enlaces.
             contenedorProductos.innerHTML="";


    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
             <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
             <div class="producto-detalles">
             <h3 class="producto-titulo">${producto.titulo}</h3>
             <p class="producto-precio">${producto.precio}</p>
             <button class="producto-agregar" id="${producto.id}">Agregar</button>
             </div>
       `;
       contenedorProductos.append(div); 
    })
    actualizarBotonesAgregar();
}
  //🔽LLamamos la funcion para que se cargue en el html.
  cargarProductos(productos);


//🔽llamamos al botonesCategorias para ejecutarle el evento y que se puedan abrir al hacer click.
//🔽utilizo currentTarget para que sea objetivo en el "boton" y no en el icono.
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});   


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    

    //🔽Si some me devuelve true quiero que me aumente la cantidad sino que me pushee el producto al carrito.
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

    console.log(nuevoNumerito);
}
