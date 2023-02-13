export class Producto {
    id;
    idCategoria;
    idSucursal;
    nombre;
    precio;
    stock;
    descripcion;
    etiqueta ;
    link;
    constructor(_id,  _cat, _suc, _nom, _pre, _stk, _desc, _eti, _lnk) {
        this.id = _id;
        this.idCategoria = _cat;
        this.idSucursal = _suc;
        this.nombre = _nom;
        this.precio = _pre;
        this.stock = _stk;
        this.descripcion = _desc;
        this.etiqueta = _eti;
        this.link = _lnk;
    }
    set pId(id) {
        this.id = id;
    }
    get pId() { 
        return this.id; 
    }

    set pCategoria(categoria) {
        this.idCategoria = categoria;
    }
    
    get pCategoria() {
        return this.idCategoria;
    }

    set pSucursal(sucursal) {
        this.idSucursal = sucursal;
    }
    get pSucursal() {
        return this.idSucursal;
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
    set pEtiqueta(etiqueta) {
        this.etiqueta = etiqueta;
    }
    get pEtiqueta() {
        return this.etiqueta;
    }
    set pLink(link) {
        this.link = link;
    }
    get pLink() {
        return this.link;
    }
    
}
