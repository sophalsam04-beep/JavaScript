let users = [{ages : 20},{ages : 30}];
let user = users.find(u => u.ages == 20);
console.log("The result :"+user);

let u = [{age : 20}, {age:30}];
let us = u.find(u => u.age ==30);
console.log(us);

let name = "Sokcheata";
let n = [{name : "CHEA"},{name : "Naroth"}];
let p = n.find(n => n.toString(2));
console.log(p);

const monkey = "Kika";
let a = [{monkey:"Kika"},{monkey :"Jim"}];
let w = a.find(a=>a.monkey="Kika");
console.log(w);
let num = [1,2,3,4,5];
let sum = num.reduce((total , current) => total+current);
console.log(sum);
let h = [10,20,30,40,50];
let sub = h.reduce((total , current) => total-current);
console.log(sub);

let f = [10,20,30,40,50];
let mul = f.reduce((total , current) => total * current);
console.log(mul);

let k = [10,20,30,40,50];
let div = k.reduce((total, current)=> total / current);
console.log(div);

let temperature = 38;
if(temperature>=35){
    console.log("The temperature is :"+temperature);
}else{
    console.log("The temperature is :"+temperature);
}

let value = [100,200,300,400,500];
let re = value.some(n >2);
let oo = value.every(k>=3);
console.log("The result of Some value :"+re);
console.log("The result of Every value :"+oo);

// Search value to store the value
let numbers = [10,20,30,40,50];
let test = numbers.find(num >=num >20);
console.log(test);

