const accountId = 1122334455;
let accountName = "Aryaman";
var accountEmail = "aryaman@gmail.com"; //not recommended. does not follow block scope or functional scope
accountPassword="12345" //not recommended
let accountStatus;

// // accountId=2233445566; cannot do
// console.log(accountEmail);
// console.table([accountId,accountName,accountEmail,accountPassword,accountStatus])

// CONVERSION
// let numberConvert = Number("123") //123
// let numberConvert2 = Number("12abc")
// console.log(numberConvert2) //NaN (Not a Number)
// console.log(typeof(NaN)) //number (lol)
// let booleanConvert = Boolean("123")
// console.log(booleanConvert)
// let stringConvert = String(123)
// console.log(stringConvert)
// console.log(typeof stringConvert)

// //OPERATIONS (brief)
// console.log(2/3)
// console.log(2**3)
// console.log(5-true)
// console.log("2"+"3")
// console.log("2"+3)
// console.log(2+"3")
// console.log("2"+1+1)
// console.log(2+1+"1") //Oii
// console.log("2"==2)
// console.log("2"===2) //strict check (no datatype conversion)


//DATA TYPES
//Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
//Reference (Non Primitive)
// Array, Objects, Functions


// MEMORY
// Stack (Primitive data types) (copy)
// Heap (Non-Primitive Data types) (reference)
let name1="Aryaman"
let name2=name1 //passed a copy
name2="Aditya"
console.log(name1)
console.log(name2)

let user1={
    email: "abc@gmail.com",
    upi: "abc@ybl"
}
let user2=user1 //passed reference
user2.email="aryaman@gmail.com"
console.log(user1)
console.log(user2)