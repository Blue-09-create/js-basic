console.log("hello");
let age = 29
console.log(age)
let name = "abes"
console.log(name)
console.log("my name is", name, "and i am", age, "years old")
console.log(`hello i am ${age} years old`)
let salary
console.log(salary)

let num = 5
console.log(typeof num)
num = "abes"
console.log(typeof num)

// data types
/*
1. number
2. string 
3. boolean 
4. null 
5. undefined 
6. symbol 
7. bigint
*/

// let a
// console.log(typeof a)

xyz = null
console.log(typeof xyz);

// symbo; always returns unique value

let a = Symbol(10)
console.log(a)
let b = Symbol(10)
console.log(b);


console.log(a === b)
console.log(a == b)

console.log(typeof a);
console.log(typeof b);

let studs = ["abc", "def", "ghi",false,20]
console.log(studs)
console.log(typeof studs)

console.table(studs)
console.log(studs[1]);
console.log(studs[-2]);

console.log(studs.push("ram"))
console.log(studs.unshift("shyam"))
console.log(studs.pop())
console.log(studs.shift())

const netflix = ["jdsfihwaifn"]
const prime = ["hjdgsdbv"]

prime.push(netflix)
console.log(prime);
console.table(prime)
const series = [...netflix, ...prime]
console.log(series)









