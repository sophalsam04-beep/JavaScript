  // Optional Changings
        /*.====== ?. ======*/

        // object?.propertie
        // object?.[expression] as list
        // object?.methods()

    // 1. Without Optional Chainging
const students = {
    name: "Un virak",
    address:{
        city: "Phnom Penh",
    }
};

// acessing
console.log(students.address.city);

const person = {
    name: "Sam sophal",
    address:{
        live: "==========\nPhnom Penh",
    }
};

    // acessing to with optional chainging
            console.log(person.address?.live);

    // Nested Optional Chainging
        const users = {
            id: 101,
            name: "Un virak",
            age: 22,
        };

        console.log(users?.id);
        console.log(users?.name);
        console.log(users?.age);


    
    // Optional Chainging with Arrays
        const validated = [
            { name: " : Un virak"}, 
            {address: ": Kandal Provinces"},
        ];


    // acessing with optinal chainings
    console.log("Name : "+validated[0]?.name);
    console.log("Current Address"+validated[1]?.address);



            // Optional chaining with Functions Calls
    const data = {
        greet(){
            return "Hello Javascripts...!";
        }
    }

        console.log(data.greet?.());
