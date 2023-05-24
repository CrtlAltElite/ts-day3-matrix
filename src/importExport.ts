//ES6 syntax
import MyStar from './shapes'//default export -  name can change
import {Circle, Square} from './shapes' // named export - names have to be the same

let myStar = new MyStar(5)
console.log(myStar)

let myCircle = new Circle(5)
console.log(myCircle)

let mySquare = new Square(5)
console.log(mySquare)