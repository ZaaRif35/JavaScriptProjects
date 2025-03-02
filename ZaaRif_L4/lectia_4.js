let person = {
    firstName: "Zaa",
    lastName: "Rif",
    age: 30,
    color_pants: "Blue"
};
console.log(person.firstName); // Zaa
console.log(person["lastName"]); // Rif
console.log(person.age); //Age
console.log(person.color_pants); //Color

person.hairColor = "Brown"
delete person.color_pants;
console.log(person.color_pants); //Brown
console.log(person.hairColor)
