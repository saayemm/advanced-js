const number = "23";
if(typeof number === "number"){
    // console.log("is a number");
}else{
    // console.log("is not a number");
}

// ES6 => var, let, const

// default.js

function add(num1=4, num2=6){
    const result = num1+num2
    // console.log(num1, num2, result);
    
    return result;
}

// add(4,5)
add(4)
add()

// Template

// spread
const number5 = [5, 6, 6, 7, 8, 9, 32]
const max = Math.max(...number5)
// console.log(...number5);
// console.log(max);

const num2 = [1,3,4,5,6,7]
const num3  = num2;
num3.push(90)
// console.log(num2);
// console.log(num3);

// Arrow  function

const multiply = (first, second, third) => first * second * third
const getAge = (person) => person.age;
const student = { name: "samLi", age:45 };
const age = getAge(student)
// console.log(age);

const getThird = number => number[2]
const third = getThird([2,5,6,7,8,8])
// console.log(third);

// large arrow function

const math = (a,b,c)=>{
    const sum = a+b+c
    const multiplay = a*b*c
    const result1 = multiplay-sum
    return result1;
}
const res = math(5,2,3)
// console.log(res);

// Spread operators


const person = {
    name: "kamm",
    age: 34,
    car: "Honda"
}
const car = person.car
// console.log(car);
const {name} = person
// console.log(name);






