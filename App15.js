console.log("Constructor in JS About object");
class People{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }


    greet(){
        console.log("Hi ! Im SOPHAL");
    }
}

const people = new People("PHAL",40);
people.greet();