import a from "./first.js";
import { b, c as d } from "./second.js";
const message = "Zia Khan wants to eat niyari"; // strongly typed
console.log(message);
console.log("from first.ts:", a);
console.log("adding b and c:", b + d);
// console.log( demo1, demo2 ); // using demo1, demo2 generates error in TypeScript as demo1,demo2 are of type any
const func1 = () => console.log("I'm alive!");
