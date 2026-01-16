console.log("Using to Prototype in Object Methods of Constructor in JS");
function Animal(name, age){
    this.name=name;
    this.age=age;

};
Animal.prototype.greet = function(){
        console.log("Name :"+this.name);
        console.log("Age :"+age);
    };

    const animal = new Animal("DANA",50);
    animal.greet();



function People(say,eat){
    this.say=say;
    this.eat=eat;

};

People.prototype.col = function(){
    console.log("Say :"+this.say);
    console.log("Eaten :"+this.eat);
};

const people = new People("Lin",22);
people.col();
