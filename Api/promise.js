const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if(success){
            resolve("Data resolved")
        }else{
            reject("Your data is rejected")
        }
    })
}
myLoader()