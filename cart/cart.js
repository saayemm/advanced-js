const addProduct = () => {
    const productName = document.getElementById("item")
    const productQuantity  = document.getElementById("item-quantity")

    const product = productName.value;
    const quantity = productQuantity.value;

    productName.value = "";
    productQuantity.value = "";

    console.log(product, quantity);
    
}