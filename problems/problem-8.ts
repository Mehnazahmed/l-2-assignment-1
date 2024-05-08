// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year.
//  Implement a method displayInfo that displays information about the car.


class Car{
    constructor(public brand:string,public model:string, public year:number){}

    displayInfo():void{
        console.log(`Your car model is: ${this.year} ${this.brand} ${this.model} `)
    }
}


const myCar =new Car("Toyota", "corolla", 2022)
myCar.displayInfo()