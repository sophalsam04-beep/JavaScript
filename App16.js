console.log("Multi Dimensional Array in JS");
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[2][2]);
let num=[1,2,3];
let double = num.map(x => x*2);
console.log(double);
let result = num.map(f => f**2);
console.log(result);
let r = num.forEach(a=>a*2);
console.log(r);

let ages = [10,25,30,50];
let phal = ages.filter(ages=>ages>=18);
console.log(phal);
let address = [100,200,300,400,500];
let results = address.filter(address>=address>=100);
console.log(results);