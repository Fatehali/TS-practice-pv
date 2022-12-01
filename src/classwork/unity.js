let myAge;
myAge = 16; // narrowing
console.log(myAge.toFixed());
myAge = "16"; // narrowing
console.log(myAge.toUpperCase());
let newAge = true ? "Khan" : 60;
// newAge.toLowerCase(); // error: transpiler cannot narrow even if type string is apparent
// Solution:
typeof newAge === "string" ?
    newAge.toLowerCase() : newAge.toFixed();
let zia;
let yourName = Math.random() > 0.6 ? "" : undefined;
if (yourName) {
    yourName.toUpperCase();
}
else {
    console.log("TS failed since it works only on Types!");
}
let newVar;
newVar = "Fahad";
;
let student;
student = {
    age: 54,
    name: "xyz"
};
let teacher1;
console.log(typeof student);
let ball = { diameter: 20 };
let sphere = { diameter: 30 };
// this works because of it
ball = sphere;
ball = { diameter: 30 };
let tube = { diameter: 12, length: 3 };
// tube = ball;  // error
ball = tube;
var x; // kisi bhi naaam se kitni bhi properties hon that are assignable
x = { id: 25, name: "Zia", lastName: 123 };
export {};
///////////////////////////////////////////////////////
