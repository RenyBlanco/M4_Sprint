export class Producto {
    id;
    idcategoria;
    idsucursal;
    nombre;
    precio;
    stock;
    descripcion;
    etiquetas ;
    link;
    constructor(_id,  _cat, _suc, _nom, _pre, _stk, _desc, _eti, _lnk) {
        this.id = _id;
        this.idcategoria = _cat;
        this.idsucursal = _suc;
        this.nombre = _nom;
        this.precio = _pre;
        this.stock = _stk;
        this.descripcion = _desc;
        this.etiquetas = _eti;
        this.link = _lnk;
    }
    set pId(id) {
        this.id = id;
    }
    get pId() { 
        return this.id; 
    }

    set pCategoria(categoria) {
        this.categoria = categoria;
    }
    
    get pCategoria() {
        return this.categoria;
    }

    set pSucursal(sucursal) {
        this.sucursal = sucursal;
    }
    get pSucursal() {
        return this.sucursal;
    }
    set pNombre(nombre) {
        this.nombre = nombre;
    }
    get pNombre() {
        return this.nombre;
    }
    set pPrecio(precio) {
        this.precio = precio;
    }
    get pPrecio() {
        return this.precio;
    }
    set pStock(stock) {
        this.stock = stock;
    }
    get pStock() {
        return this.stock;
    }
    set pDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    get pDescripcion() {
        return this.descripcion;
    }
    set pEtiquetas(etiquetas) {
        this.etiquetas = etiquetas;
    }
    get pEtiquetas() {
        return this.etiquetas;
    }
    set pLink(link) {
        this.link = link;
    }
    get pLink() {
        return this.link;
    }
    
}
