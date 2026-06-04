// const freddy = 'mercury'
// function add(a,b,c=10){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     const number = 2;
//     // console.log(this)
//     // console.log(this.number) //undefined
//     return a+b+c
// }
// const result = add(6,8)
// console.log(result);

// function calculateTotalSum(val1,val2,...num1){
//     return num1
// }
// console.log(calculateTotalSum(200,300,400,500))


// console.log(one(3)) //can call before
// function one(num){
//     return num+1
// }
// console.log(one(3))

// // two(3) //cannot call before
// const two = function(num){
//     return num+2
// }
// console.log(two(3))

// //arrow function
// const three = (num1,num2) => {
//     return num1+num2
// }
// console.log(three(2,3))
// const four = (num1,num2) => (num1+num2)
// console.log(four(2,3))
// const five = num1 => num1%2
// console.log(five(5))


// Immediately Invoked Function Expressions (IIFE)
//named IIFE
( function chai(){
    console.log('aryaman')
})();

//anonymous IIFE
( function (){
    console.log('aur code')
})();

( () => {
    console.log(`Hello`)
})()