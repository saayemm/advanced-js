// closures
function kitchen(){
    let roast = 0;
    return function(){
        roast++
        return roast
    }
}
const firstServer = kitchen()
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());

// Callback
// function greeting(greetingHandler, name){
//     greetingHandler(name)
// }
// // const laptop = {name: "hp", price: 67666, memory: "512MB"}

// function greetingHandler(name){
//     console.log("good morning", name);
    
// }
// greeting(greetingHandler)

function sum(a,b,c){
    const result = a+b+c
    return result;
}
const total = sum(67,5,6)
console.log(total);
