import { Sucursal } from "./Sucursal.js";

function obtieneSucursal() {
    fetch('https://bsite.net/metalflap/td-sucursal')
    .then(response => response.json())
    .then(json => muestraSucursal(json))
}

obtieneSucursal();

function muestraSucursal(valor) {
    var htmlSuc = '';
    for(let i=0; i < valor.length; i++){
        const sucursal = new Sucursal();
        sucursal.sId = valor[i].id;
        sucursal.sSucursal = valor[i].nombre;
        htmlSuc += `<tr>
            <td>${sucursal.sId}</td>
            <td>${sucursal.sSucursal}</td>
            <td><a href="javascript:void(0)" onclick="editaSuc(${i})">Editar</a></td>
        </tr> `
        arregloSuc.push(sucursal);
    };
    document.getElementById('cuerpoSuc').innerHTML = htmlSuc;
}

export function pasaArregloSuc() {
    return arregloSuc;
}