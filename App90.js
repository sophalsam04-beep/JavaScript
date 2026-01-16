console.log("Array sorting is object key");
let user = [
    {name:"Phal",age:20},
    {name:"Chea",age:30},
    {name:"kong",age:24},
];
console.log(user.sort((a,b) => a.age - b.age));

let t = [
    {color :"Pink", qty :5},
    {color :"blue", qty : 100},
    {color :"orange", qty : 30},
];
// sorting by qty
console.log(t.sort((x , y) => x.qty - y.qty));

let now = new Date();
console.log("The time of the Day ! :"+now);
let date = new Date("2025-07-11");
console.log("The time of the Day you input (1->n-1) :"+date);