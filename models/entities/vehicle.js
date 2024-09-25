class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }      
    getDetails() {
        console.log(`MARCA DE VEHICULO: ${this.brand}, MODELO DEL VEHICULO: ${this.model}`);
    }
}
module.exports = Vehicle;