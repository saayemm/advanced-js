const addProduct = () => {
    const productName = document.getElementById("item")
    const productQuantity  = document.getElementById("item-quantity")

    const product = productName.value;
    const quantity = productQuantity.value;

    productName.value = "";
    productQuantity.value = "";

    console.log(product, quantity);

    displayProduct(product, quantity)

    saveProductLocalStroage(product, quantity)
    
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById("product-container")
    const li = document.createElement("li")
    li.innerHTML = `${product}: ${quantity}`

    ul.appendChild(li)
}

const getItemShoppingCart = () => {
  
    const storeCart = localStorage.getItem("cart")
    let cart = {}
    if(storeCart){
        cart = JSON.parse(storeCart)
    }
    return cart;
}

const saveProductLocalStroage = (product, quantity) => {
    const cart = getItemShoppingCart()
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringified)
}

const displayProductFromLocalStroage = () => {
    const savedCart = getItemShoppingCart()
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}
displayProductFromLocalStroage()