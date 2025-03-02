class person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName - lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let Gabriel = new person("Gabriel" , "Caraman");

console.log(Gabriel.firstName)
console.log(Gabriel.getFullName())