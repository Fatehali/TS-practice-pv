let myAge: string | number;

myAge = 16;         // narrowing
console.log(myAge.toFixed());

myAge = "16";         // narrowing
console.log(myAge.toUpperCase());

let newAge = true ? "Khan" : 60;
// newAge.toLowerCase(); // error: transpiler cannot narrow even if type string is apparent
// Solution:
typeof newAge === "string" ? 
    newAge.toLowerCase() : newAge.toFixed();
    
let zia:"zia";

let yourName = Math.random() > 0.6 ? "" : undefined;

if (yourName) {
    yourName.toUpperCase();
} else {
    console.log("TS failed since it works only on Types!");
}

type fatehType = null | "fateh" | "Fahad" | "Sabeeh";

let newVar : fatehType;
newVar = "Fahad";

// learning objects

type studentType = { name: string; age: number; };
interface teacherType { name: string, age: number; subject?: "MTH" | "PHS" | "CHM" | "URD" | "ENG" | "ARA" | "PHI" | "CS" }; 

let student: studentType;

student = {  
    age: 54,
    name: "xyz"
}

let teacher1: teacherType;
console.log(typeof student);

///////////////////////////////////////////////////////////////////

type Ball = { diameter: number }
type Sphere = { diameter: number }

let ball: Ball = { diameter: 20 };
let sphere: Sphere = { diameter: 30 };

// this works because of it
ball = sphere;
ball = { diameter: 30 };

type Tube = {
    diameter: number,
    length: number
}

let tube: Tube = { diameter: 12, length: 3 };

// tube = ball;  // error
ball = tube;

var x : { id: number, [x: string]: any };  // kisi bhi naaam se kitni bhi properties hon that are assignable

x = { id : 25 , name : "Zia", lastName: 123 }; 

///////////////////////////////////////////////////////

