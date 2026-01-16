console.log("JS About Inheritence in js");
class Fruit{
    constructor(taste){
        this.taste=taste;
    }

    result(){
        console.log("The fruit was very sweet !");
    }
}

class Durian extends Fruit{
    constructor(price, qty){
        super(taste);
        this.price=price;
        this.qty=qty;
    }

    greet(){
        console.log("The Durian is very delecious ! Do you want to Buy Now (Y/N) !");
    }

}

const myDurian1 = new Durian("2","3");

myDurian1.greet();
myDurian1.result();