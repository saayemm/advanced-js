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
console.log(num2);
console.log(num3);

