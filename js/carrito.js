let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

//🔽si hay productos en en carrito, "carritoVacio" tenga la clase disabled.
//🔽si hay producto en el carrito, en producto y acciones se pueda accionar remove.
//🔽Generamos add para que la funcion ingrese al carrito.
function cargarProductosCarrito() {

    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        
        contenedorCarritoProductos.innerHTML = "";
    
        //🔽Creamos un Foreach para para darle la funcion al "div" 
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="fa-solid fa-trash-can"></i></button>
            `
            contenedorCarritoProductos.append(div);
        })
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

//🔽Generamos la funcion para que funcionen los botenes borrar productos.
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {

        //🔽Con la libreria generamos el cartelito para cuando se elimina algo dentro del carrito.
        Toastify({
            text: "se elimino del carrito",
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
    const index = productosEnCarrito.findIndex (producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

//🔽Generamos la funcion del boton vaciar carrito todo de una sola vez.
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    //🔽Con la libreria generamos el cartelito para cuando se vacie el carrito pregunte si o no y el reduce aporta la cantidad exacta de lo que se elimina.
    Swal.fire({
        title: 'Estas seguro/a?',
        icon:'question',
        html: 
        `se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos!`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
            cargarProductosCarrito();
        }
      })
}


//🔽llamamos a la funcion para que me de el monto total especifico y si de lo contrario borramos actualice el precio.
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

//🔽Queremos que suceda lo mismo que vaciar para simular una compra real, seteamos la array del localstorage
botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){

    const Toast = Swal.mixin({
        toast: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        showConfirmButton: false,
        timer: 2700,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Su compra se genero con exito!"
      });
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}