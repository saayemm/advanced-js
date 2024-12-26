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
    console.log(num1, num2, result);
    
    return result;
}

// add(4,5)
add(4)
add()