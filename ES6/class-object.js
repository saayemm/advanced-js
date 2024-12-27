const product2 = [
    {name: "lenovo", price: 6000, model: "99jh"},
    {name: "apple", price: 66000, model: "uoi9jh"},
    {name: "xiomy", price: 56550, model: "cxii9jh"},
    {name: "hp", price: 19000, model: "hppuoi9jh"}
]

class product {
    id = "sam";
    constructor(name){
        this.name = name
    }
   speak(talk){
    console.log(`talk in ${talk}`);
   }
}

const lp = new product("sayem")
// console.log(lp);
lp.speak("bangla")


class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log("math");
        
    }
}

const Shanaz = new Teacher("shanaz", "chemistry")
console.log(Shanaz);
