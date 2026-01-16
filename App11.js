console.log("Object Constructor in JS");
function Person(){
    name:"PHAL";
    age:20;

    function Person(name, age){
        this.name=name;
        this.age=age;
    }

    const Person1 = new Person("PHAL",20);
    const Person2 = new Person("PHEA",29);

    console.log(Person1.name);
    console.log(Person1.age);

    console.log(Person2.name);
    console.log(Person2.age);
}

function People(name, age){
    this.name=name;
    this.age=age;
    this.greet = function(){
        console.log("Hi ! I'm "+this.name);
    };
}

const people = new People("Cheata",20);
people.greet();

function Animal(color, eat){
    this.color=color;
    this.eat=eat;

    this.eat = function(){
        console.log("Color :"+color);
        console.log("Eat :"+eat);
    };
}

const animal = new Animal("Blue","ZZZ");
animal.eat();