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


setTimeout(() => {
     console.log("one")
    setTimeout(() => {
         console.log("two")
         setTimeout(() => {
             console.log("three")
             setTimeout(() => {
                 console.log("four")
                setTimeout(() => {
                     console.log("five")
                 }, 1000);
             }, 1000);
         }, 1000);
     }, 1000);
 }, 1000);