// Chain
const data = [{name: "lok", id:123, adress: "Demra"}]
// console.log(data[0].adress);

const product = {
    count: 600,
    data: [
        {name: "lenovo", price: 6000, model: "99jh"},
        {name: "apple", price: 66000, model: "uoi9jh"},
    ]
}
// console.log(product.data[1].price);

// map
const number = [3,4,5,6,7,8,9,1]
// const doubleIt = num => num*2
// const result = number.map(doubleIt)
// console.log(result);
const result = number.map(num=>num*2)
// console.log(result);

const friends = ["rony",  "prithy", "nazim", "sakib"]
const length = friends.map(friend=>friend.length)
// console.log(length);
const firstLetter = friends.map(friend=>friend[0])
// console.log(firstLetter);




