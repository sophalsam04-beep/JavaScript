// can be resignd
// block scope
let PI = 3.14;
console.log(PI);

// cannot be resigned
// block scope
const age = 22;

console.log(age);

// functions

function greeting(name){
        return "Hello\t" + name;
}

const result = greeting("Un virak");
console.log(result);

// Arrow functions
const Hello = (id, name, age) => {
        return id+"\t"+name+"\t"+age;
}

const check = Hello(101, "Un virak",22);
console.log(check);



// traditional
function adding(a,b){
        
    return a+b;
}

console.log(adding(5,3));


// Arrow functions

const caculate = (x,y) => {
        return x+y;
}

const recovery = caculate(4,5);
console.log(recovery);


const mul = (x,y)=> x*y;
console.log(mul(4,8));


// Destructuring
const students = {
    id: 101,
    name: "Un virak",
};

    const { id,name } = students;

console.log(id);
console.log(name);

// Array Destructurings
const colors = ["Banana","Cherry","Mango","Orange"];

const [first, second, three, four] = colors;

console.log(first);
console.log(second);
console.log(three);
console.log(four);


// Spread Operator
// array as copy
const vegetable = ["Lettuce","Watermelon","Orange"];
const copy = [...vegetable];
console.log(copy);

const validate = ["Backup", "Recovery","Table"];
const copy1 = [...validate];

console.log(copy1);



// Merge Arrays
const api_1 = [1,5];
const api_2 = [4,5];

const checked = [...api_1, ...api_2];
console.log(checked);

const framework = ["Java","Python"];
const backend = ["Django","FAST API","Mongo DB"];

const tracks = [...framework, ...backend];
console.log(tracks);


const laptop = ["RAM","CPU","STORAGE"];
const desktop = ["Mouse","PC","Monitor"];

const merge = [...laptop, ...desktop];
console.log(merge);



// Rest Operator
// Collections Multiple Argunemnt an arrays

function sum(...number){
    console.log(number);
}

sum(1,2,3,4,5);

// REST Operator with ( + )
    
    
    function sum(...v){
        return v.reduce((x,y,z,a)=> x+y+z+a);
    }

    console.log(sum(5,104,55,64));


        // Object Shorthands
    // modern new syntax
    // store data
    const firstname = "Un";
    const lastname = "Virak";

    const teacher = {
        // call data to store
        firstname,
        lastname,
    };

console.log(teacher);
console.log(teacher.firstname);
console.log(teacher.lastname);


const old_address = "KD";
const cur_address = "PP";

const combines = {
    old_address: old_address,
    cur_address: cur_address,
};

console.log(combines);
console.log(combines.old_address);
console.log(combines.cur_address);


// Enchanded Object Methods
const p = {

    sayHello(){
        console.log("Hello");
    }
};

p.sayHello();

