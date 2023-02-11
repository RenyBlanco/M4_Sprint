export class Sucursal{
    id;
    sucursal;
    constructor(_id, _suc) {
        this.id = _id;
        this.sucursal = _suc;
    }
    set sId(id) {
        this.id = id;
    }
    get sId() { 
        return this.id; 
    }
    set sSucursal(sucursal) {
        this.sucursal = sucursal;
    }
    get sSucursal() {
        return this.sucursal;
    }
}