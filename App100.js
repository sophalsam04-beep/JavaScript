console.log("The Methods alittle to js");
let fruit = ["Apple","Banana","Cherry","Long"];
console.log(fruit.indexOf("Apple"));
console.log(fruit.indexOf("Banana"));
console.log(fruit.includes("Apple"));
console.log(fruit.includes("Banana"));
console.log(fruit.includes("Carrot"));
console.log("The sorting of Array :"+fruit.sort());

let num = [100,4,30,50,90,20];
console.log("The result of Number sorting :"+num.sort());
// Acesding -->sorting is small to big
console.log(num.sort((a,b) => a-b));
// Descending sorting is big to small
console.log(num.sort((a,b) => b-a));
