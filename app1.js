console.log("We studying about Arithmetic Operation in JS");
let a=50;
let b=40;
let c=33;

console.log("The result :"+(a+b));
console.log("The result :"+(a-b));
console.log("The result :"+(a*b));
console.log("The result :"+(a/b));
console.log("The result :"+(a**b/c));
console.log("The result :"+(a+b/c));
console.log("The result :"+(a-b/c));
console.log("The result "+(a*2/c));

// String operation in js
let firstname="sam";
let lastname="sophal";

console.log(firstname+" "+lastname);
// Template literal
console.log('Hello , ${firstname}');
console.log('Hello , ${lastname}');

// Comparision operation in js
// Comparision operation --> using to compare two value if true and false

console.log("\n\n");
console.log(a==b);
console.log(a!=b);
console.log(a>b && a<b);
console.log(a!=b || a<b);
console.log(a>=b && b<=a);
console.log(a=b || b<a);

// Logical condition compare true and false condition
console.log("\n\n");
let x=true;
let y=false;
console.log(x&&y);
console.log(y&&x);
console.log(x!=y);

// Assignment Operator -- > using to assign value to variable
console.log("The result :"+(a+=5)); // a = a+5 -->45
console.log("The result :"+(b-=3));   // b = b -> -> 37
console.log("The result :"+(a*=2));  // a=a*2 -> 90
console.log("The result :"+(a/=2));  // a = a /2 -> 45

// condition have 2 type --> simple condition | ternary condition

const age=20;
let status;

if(status>=18){
    console.log("You are a very clever!");
}else{
    console.log("You are not clever !");
}

// step 2 : ternary operation
let ages = 20;
let s = (ages>=18)?"PHAL":"Naroth";
console.log(s);





