//console.log("Hello, World!");
//let and var keywords are used to declare variables in JavaScript. The main difference between them is their scope and hoisting behavior.
//var a=23
//console.log("value of a is "+a)
//if(a>10){
  //  var a=45
    //console.log("value of a listed in if block is "+a)
//}
//console.log("value of a after if block is "+a) // value of a after if block is 45 because var has function scope, so the value of a is updated in the entire function scope.
// function sum(a,b){
//     return a+b;
// }
// function sumofsum(){
//     console.log(sum(20,40)+sum(20,40));
// }       
// sumofsum();
//myinfo();
//function generateNumber(){
//    return Math.floor(Math.random() * 1000);
//}
//const randomNumber = generateNumber();

// function findEvenOdd(num){
    // const number1=generateNumber();
    // if(randomNumber%2==0){
        // console.log("The number is even");
    // }
//}
    //console.log(randomNumber)
    //(() => {console.log("Hello, World!")})();
    
    
    //callback function


//function sumofsqrt(a, b){
    //  let sum = Math.sqrt(a)+Math.sqrt(b);
  //   console.log("Sum of square root of "+a+" and "+b+" is "+sum);
//}
//sumofsqrt(25, 36);



//promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell. A promise can be in one of three states: pending, fulfilled, or rejected.

const myPromise = new Promise((resolve, reject) => {
    let username = "Aakash";
    let password = "12345";

    if (username === "Aakash" && password === "12345") {
        resolve("Login successful!");
    } else {
        reject("Invalid username or password.");
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((msg) => {
       console.log(msg);
    })
    .finally(() => {
        console.log("All resources have been closed.");
    });