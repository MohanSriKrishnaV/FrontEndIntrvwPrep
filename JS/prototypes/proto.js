class Car {
  constructor() {
    this.name = "car";
    this.model = "first car";
  }

  getDetails() {
    // method → goes to prototype
    return `${this.name} - ${this.model}`;
  }
}
let x = new Car();
// console.log(x,"x",x.__proto__)

// console.log(Object.getPrototypeOf(x)==Car.prototype);

function Car1() {
  this.name = "car";
  this.model = "first car";
}

// let y=new Car1();
// console.log(y,"y");
// console.log(Car.prototype)
// console.log(Object.getPrototypeOf(x))
// console.log(Object.getPrototypeOf(x)==Car.prototype)

// console.log(Object.prototype)
// console.log(Array.prototype===[1,2,3].__proto__)
function hello() {
  console.log("helo world");
}
let w = hello;
console.log(Function.prototype == w.__proto__);
