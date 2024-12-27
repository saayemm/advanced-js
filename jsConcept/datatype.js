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
function greeting(greetingHandler, name){
    greetingHandler(name)
}
// const laptop = {name: "hp", price: 67666, memory: "512MB"}

function greetingHandler(name){
    console.log("good morning", name);
    
}
greeting(greetingHandler)