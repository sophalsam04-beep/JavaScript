console.log("Creating class in JS Programming !");
class Person{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    // using to method 
    greet(){
        console.log('Hello my name is ${this.name} and Im ${this.age} year old !');
    }

};

    const person1 = new Person("Daroth",20);
    person1.greet();

    class Animal{
        constructor(name,color){
            this.name=name;
            this.color=color;
        }

        test(){
            console.log("Hello My name is Phal ! I'm 20 Year old I Learn IT Programming ! year2 !");
        }
    };

    const animal1 = new Animal("Niroth",24);
    animal1.test();