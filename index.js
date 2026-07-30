console.log("Hello, World!");
//let and var keywords are used to declare variables in JavaScript. The main difference between them is their scope and hoisting behavior.
var a=23
console.log("value of a is "+a)
if(a>10){
    var a=45
    console.log("value of a listed in if block is "+a)
}
console.log("value of a after if block is "+a) // value of a after if block is 45 because var has function scope, so the value of a is updated in the entire function scope.