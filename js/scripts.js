import { Sucursal } from "./Sucursal.js";
import { Categoria } from "./Categoria.js";
import { Producto } from "./Producto.js";
document.addEventListener('DOMContentLoaded', () => {

    let formato = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
    
    const DOMitems = document.querySelector('#items');
    let productos = [];
    // Funciones
   
    /**
    * Dibuja todos los productos a partir de la API.
    */

    var tabla;
    //let arreglo = getCrudData();
    
    // if(arreglo==null){
    //     $.getJSON('js/listado.json', function(data) {
    //         tabla = data.basedeDatos;
    //         llenaListado()
    //     });
    // }else{
    //     productos = arreglo;
    //     renderizarProductos();
    // }


    function llenaListado() {
        
        jQuery.each(tabla.Productos, function(i, fila) {
            const nuevoProducto = new Producto();
            nuevoProducto.pId = i+1;
            nuevoProducto.pNombre = fila.nombre;
            nuevoProducto.pPrecio = fila.precio;
            nuevoProducto.pStock = fila.stock;
            nuevoProducto.pDescripcion = fila.descripcion;
            nuevoProducto.pEtiquetas = fila.etiquetas;
            nuevoProducto.pImagen = fila.imagen;
            nuevoProducto.pCategoria = fila.categoria;
            productos.push(nuevoProducto);
        });
        // setCrud();
        // renderizarProductos();
    }

    function renderizarProductos() {
        productos.forEach(element => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('col-md-12');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('product',element.categoria);
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('product-title');
            miNodoTitle.textContent = element.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('product__image');
            miNodoImagen.setAttribute('src', './img/'+element.imagen);
            // Stock
            const miNodoStock = document.createElement('p');
            miNodoStock.classList.add('product__stock');
            miNodoStock.textContent = `disponible: ${element.stock}`;
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('product__price');
            miNodoPrecio.textContent = `${formato.format(element.precio)}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-outline-success','AGREGA');
            miNodoBoton.textContent = 'Añadir al carro';
            miNodoBoton.setAttribute('marcador', element.id);
            miNodoBoton.addEventListener('click', addToCartClicked);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoStock);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    function setCrud() {
        localStorage.setItem('crud', JSON.stringify(productos));
    }

    function getCrudData(){
        let arreglo = JSON.parse(localStorage.getItem('crud'));
        return arreglo;
    }
    
});