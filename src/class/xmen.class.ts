function imprimirConsola( constructorClase:Function) {
        console.log(constructorClase);
}

@imprimirConsola
export class Xmen {

    constructor(
        public nombre:string,
        
        
        public clave :string

    ){}

    imprimir(){
        console.log(`el xmen ${this.nombre} con la clave ${this.clave}`);
    }
}

