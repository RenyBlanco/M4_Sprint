function obtieneSucursal() {

    fetch('https://bsite.net/metalflap/td-sucursal')
    .then(response => response.json())
    .then(json => muestra(json))

}
function obtieneCategorias() {

    fetch('https://bsite.net/metalflap/td-categoria')
    .then(response => response.json())
    .then(json => muestra(json))

}
function obtieneProductos() {

    fetch('https://bsite.net/metalflap/td-producto')
    .then(response => response.json())
    .then(json => muestra(json))

}

function guardarSucursal() {
    fetch('https://bsite.net/metalflap/td-sucursal', {
        method: 'POST',
        body: JSON.stringify({
            name: "Taylor",
            surname: "Swift"
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))

}

function guardarCategoria() {
    fetch('https://bsite.net/metalflap/td-categoria', {
        method: 'POST',
        body: JSON.stringify({
            name: "Taylor",
            surname: "Swift"
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))

}
function guardarProducto() {
    fetch('https://bsite.net/metalflap/td-producto', {
        method: 'POST',
        body: JSON.stringify({
            name: "Taylor",
            surname: "Swift"
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))

}

function actualizarSucursal() {

    fetch('https://bsite.net/metalflap/td-sucursal', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: "Taylor",
            surname: "Swift"
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}
function actualizarCategoria() {

    fetch('https://bsite.net/metalflap/td-categoria', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: "Taylor",
            surname: "Swift"
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}
function actualizarProducto() {

    fetch('https://bsite.net/metalflap/td-producto', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: "Taylor",
            surname: "Swift"
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function eliminarSucursal() {

    fetch('https://bsite.net/metalflap/td-sucursal/{id}', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))
}
function eliminarCategoria() {

    fetch('https://bsite.net/metalflap/td-categoria/{id}', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))
}
function eliminarProducto() {

    fetch('https://bsite.net/metalflap/td-producto/{id}', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function muestra(valor) {
    console.log('JSON ', valor);
    
    const arr = valor.map(elemento => Object.entries(elemento));
    console.log(arr);
    
    var html = `<ul>`
    arr.forEach(element => {
        html += `
                    <li>${element.id} , ${element.nombre}</li>
               `
    });
    html += `</ul>`
    document.getElementById('valores').innerHTML = html; 
}