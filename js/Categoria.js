export class Categoria{
    id;
    categoria;
    constructor(_id, _cat) {
        this.id = _id;
        this.categoria = _cat;
    }
    set cId(id) {
        this.id = id;
    }
    get cId() { 
        return this.id; 
    }
    set cCat(categoria) {
        this.categoria = categoria;
    }
    get cCat() {
        return this.categoria;
    }
}