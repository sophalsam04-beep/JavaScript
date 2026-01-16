console.log("Object Propertie in JS");
console.log("object Propertie have 2 type --> Dot Propertie | Braket Notation Propertie !");
const people = {
    id:101,
    name:"PHAL",
    gender:"Male",
    Address:"Kandal",
    isStudent:false
};

// acessing element to main
// Dot Notraiton
console.log(people.name);
console.log(people.gender);
console.log(people.Address);
console.log(people.id);

// Breaket Notaion used to dynamic propertie
console.log(people["\n\n"+"id"]);
console.log(people["gender"]);
console.log(people["Address"]);
console.log(people["id"]);

const pro = "isStudent";
console.log(people[pro]);

// adding and modifying the propertie
people.city="Phnom Penh"; // Add New Propertie
people.age=31;  // Updating age exits
delete people.Address;
delete people.id;
delete people.isStudent;
delete people.name;

// using to Looping through propertie
for(let key in people){
    console.log(key, people[key]);
}

Object.defineProperty(people, "ssn",{
    value:"123-456-678",
    writable: false,   // can not change 
    enumerable: false,  // can not appear the value
    configurable: false,  // can not delete
});
