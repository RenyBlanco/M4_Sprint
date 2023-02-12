import { pasaArregloSuc } from "./crudSuc.js";
import { pasaArregloCat } from "./crudCat.js";
import { Producto } from "./Producto.js";

const arregloCat = pasaArregloCat();
const arregloSuc = pasaArregloSuc();

function obtieneProductos() {
    fetch('https://bsite.net/metalflap/td-producto')
    .then(response => response.json())
    .then(json => muestraProd(json))
}

obtieneProductos();

function muestraProd(valor) {
    let html = '';
    let selecSuc = '';
    let selecCat = '';
    for(let i=0; i < valor.length; i++){
        const producto = new Producto;
        producto.pId = valor[i].id;
        producto.pCategoria = valor[i].idCategoria;
        producto.pSucursal = valor[i].idSucursal;
        producto.pNombre = valor[i].nombre;
        producto.pPrecio = valor[i].precio;
        producto.pStock = valor[i].stock;
        producto.pDescripcion = valor[i].descripcion;
        producto.pEtiquetas = valor[i].etiqueta;
        html += `<tr>
                <td>${producto.pId}</td>
                <td>${producto.pCategoria}</td>
                <td>${producto.pSucursal}</td>
                <td>${producto.pNombre}</td>
                <td>${producto.pDescripcion}</td>
                <td>${producto.pPrecio}</td>
                <td>${producto.pEtiquetas}</td>
                <td>${producto.pStock}</td>
                <td><a href="javascript:void(0)" onclick="editaProd(${i})">Editar</a>&nbsp;
                <a href="javascript:void(0)" onclick="eliminaProd(${producto.pId})">Eliminar</a></td>
            </tr> `
            arregloProd.push(producto);
    };
    document.getElementById('cuerpoProd').innerHTML = html;
    arregloCat.forEach(element => {
        selecCat += `<option value="${element.id}">${element.categoria}</option>`;
    });
    document.getElementById('idCat').innerHTML = selecCat;
    arregloSuc.forEach(element => {
        selecSuc += `<option value="${element.id}">${element.sucursal}</option>`;
    });
    document.getElementById('idSuc').innerHTML = selecSuc;
}