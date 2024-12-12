// objects
// anything in curly braces is object 
const stud = {
    gender: "male",
    "full name": "ramesh sharma",//if the key is more than 1 then use double quotes 
    email: "ramesh@gamil.com",
    age: 18,
    loactaion: "ghaziabad",
    logindays: ["sat", "sun", "mon"],
    islogin: true,
     t1:{}
};

console.log(stud)
stud.name = "ramesh sharma"
console.log(stud);
console.table(stud);
console.log(stud.age);
console.log(stud["full name"]);
console.log(stud["email"]);
if (stud.islogin) {
   console.log(stud.logindays);  
}
if (stud.t1)
{
    console.log("t1 is there");
    
}
console.log(stud.email);
function name() {
    console.log(stud["full name"]);  
}
name();
    
function sum(a, b) {
    console.log(a + b);
    console.log(`sum of ${a} and ${b} is ${a+b}`); 
}
sum(5, 6);

function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

x = add(5, 18);
console.log(x);









