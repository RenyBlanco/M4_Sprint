import { Categoria } from "./Categoria.js";

function obtieneCategorias() {
    fetch('https://bsite.net/metalflap/td-categoria')
    .then(response => response.json())
    .then(json => muestraCategoria(json))
}

obtieneCategorias();

function muestraCategoria(valor) {
    var htmlCat = '';
    for(let i=0; i < valor.length; i++){
        const categoria = new Categoria();
        categoria.cId = valor[i].id;
        categoria.cCat = valor[i].nombre;
        htmlCat += `<tr>
            <td>${categoria.cId}</td>
            <td>${categoria.cCat}</td>
            <td><a href="javascript:void(0)" onclick="editaCat(${i})">Editar</a>&nbsp;
            <a href="javascript:void(0)" onclick="eliminaCat(${categoria.cId})">Eliminar</a></td>
        </tr> `
        arregloCat.push(categoria);
    };
    document.getElementById('cuerpoCat').innerHTML = htmlCat;
}

export function pasaArregloCat() {
    return arregloCat;
}
