const loadComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(error=> console.error("error found boss", error))
}

const loadComments2 = async() => {
    try{
        const res = await tch("https://jsonplaceholder.typicode.com/albums")
    const data = await res.json()
    console.log(data);
    }
    catch{
        console.log("error is here");
        
    }
    
}