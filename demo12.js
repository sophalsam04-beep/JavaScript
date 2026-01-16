console.log("JS ABOUT Polymorphism in js");
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    info(){
        console.log("The information of People !");
    }
}

// sub class 1
class Dara extends Person{
    info(){
        console.log("Here is DARA !");
    }
}

class Daroth extends People{
    info(){
        console.log("Here is Daroth !");
    }
}

class Phal extends People{
    info(){
        console.log("Here is PHAL !");
    }
}


// callling to main class --> polymorphism

// polymorphism --> behavior

const person =  [
    new Dara("You cutie !"),
    new Daroth("You handsome !"),
    new Phal("You clever !")
];

// using to forEach looping
person.forEach(person => {
    person.info();
});