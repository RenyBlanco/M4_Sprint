
    function obtieneSucursal() {

        fetch('https://bsite.net/metalflap/td-sucursal')
        .then(response => response.json())
        .then(json => muestraSucursal(json))

    }
    function obtieneCategorias() {

        fetch('https://bsite.net/metalflap/td-categoria')
        .then(response => response.json())
        .then(json => muestraCategoria(json))

    }
    function obtieneProductos() {

        fetch('https://bsite.net/metalflap/td-producto')
        .then(response => response.json())
        .then(json => muestraProd(json))

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

    function muestraCategoria(valor) {
        var html = '';
        html = `<ul>`
        for(let i=0; i < valor.length; i++){
            html += `<li>${valor[i].nombre}
            </li>
            `
        };
        html += `</ul>`
        document.getElementById('items').innerHTML = html;
    }

    function muestraSucursal(valor) {
        var html = '';
        html = `<ul>`
        for(let i=0; i < valor.length; i++){
            html += `<li>${valor[i].nombre}
            </li>
            `
        };
        html += `</ul>`
        document.getElementById('items').innerHTML = html;
    }

    function muestraProd(valor) {
        var html = '';
        html = `<ul>`
        for(let i=0; i < valor.length; i++){
            html += `<li>${valor[i].idSucursal}, ${valor[i].idCategoria}, ${valor[i].nombre}, ${valor[i].stock}, ${valor[i].precio}, ${valor[i].etiqueta}, ${valor[i].descripcion}, ${valor[i].link}
            </li>
            `
        };
        html += `</ul>`
        document.getElementById('items').innerHTML = html;
    }
