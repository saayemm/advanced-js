function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=> displayUser(data)
    )
}

const ul = document.querySelector(".container")

function displayUser(data){
   
   for(const user of data){
    const li = document.createElement("li")
    li.innerText = user.email
    ul.appendChild(li)
   }
   }
    


function displayPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=> displayData(data))
}
const postElem = document.getElementById("post-container")

function displayData(posts){
    
    for(const post of posts){
        console.log(post);
        
        const div = document.createElement("div")
        div.classList.add("post")
        div.innerHTML = `
        <h3>User: ${post.id} </h3>
        <h4>Title: ${post.title}</h4>
        <p>Drscription: ${post.body}<p/>
        `
        postElem.appendChild(div)
    }
}
displayPost()