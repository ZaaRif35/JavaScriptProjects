let person = {
    firstName: "Zaa",
    lastName: "Rif",
    age: 30,
    color_pants: "Blue",

    seyHi: function(){
        console.log("Hi, my name is "+ this.firstName + this.lastName)
    }
}

person.seyHi()