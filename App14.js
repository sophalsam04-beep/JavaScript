console.log("=====Javascript about Array =====");
let fruits = ["Apple","Cherry","Banana","Long","Carrot"];  // declare array
// array to constructor
let number = new Array(1,2,3,4,5);
// acessing by index
console.log("The acessing element :"+fruits[0]);
console.log("The acessing Element :"+fruits[1]);
console.log("The acessing element :"+fruits[2]);

// using to Array methods in js 
// pop --> add element
let numbers = [10,20,30,40,50];
numbers.push(100);
console.log(numbers);
//pop methods to removing element
console.log(numbers);
// foreach loopinp using to iterating over looping
numbers.forEach(num => console.log(num));
fruits.forEach(f => console.log(f));

// map --> using to tranfrom element it mean that multiple value one by one
let double = numbers.map(num => num * 2);
console.log(double);
let n = [1,2,3,4,5,6,7,8,9,10];
n.forEach(a=>console.log(a));
n.map(a=>a*2);
console.log(n);

