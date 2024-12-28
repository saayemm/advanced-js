// Json
// const user = { id: 3, name:"loki", adress: "Fomh"}
// const stringified = JSON.stringify(user)

// console.log(user);
// console.log(stringified);

// String to object => Json.parse
// Object to string => Json.Stringfy

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';


function loadData(){
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

}