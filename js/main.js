//🔽 ejecutamos un fetch con el json que contenga el arrays de productos, que cargue los productos directamente desde ahí.
 let productos = [];

    fetch("./js/productos.json")
       .then(response => response.json())
       .then(data => {
           productos = data;
           cargarProductos(productos);
     })

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
             <p class="producto-precio">$${producto.precio}</p>
             <button class="producto-agregar" id="${producto.id}">Agregar</button>
             </div>
       `;
       contenedorProductos.append(div); 
    })
    actualizarBotonesAgregar();
}


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

//🔽cambiamos la variable PEC, si PEC que traemos del storage contiene algo lo suma a lo que esta en PECLS si no se cumple es un array vacio. 
//🔽generamos lo mismo con el numerito para que quede freezado con lo que contiene del storage mas lo que se le agregue. 
    let productosEnCarrito;
    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
    if(productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarNumerito();
    }else {
        productosEnCarrito = [];
    } 


    function agregarAlCarrito(e) {
        //🔽 Se agrega desde la libreria la tarjetita de confirmacion al agregar al carrito.
        Toastify({
            text: "Agregado al Carrito",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #4686F0, #062557)",
              borderRadius: "2rem",
              textTransform: "uppercase",
              fontSize: ".75rem",
            },
            offset: {
                x: `1.5rem`, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: `1.5rem` // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
            onClick: function(){} // Callback after click
          }).showToast();


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

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
