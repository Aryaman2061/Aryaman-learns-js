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
// // Stack (Primitive data types) (copy)
// // Heap (Non-Primitive Data types) (reference)
// let name1="Aryaman"
// let name2=name1 //passed a copy
// name2="Aditya"
// console.log(name1)
// console.log(name2)

// let user1={
//     email: "abc@gmail.com",
//     upi: "abc@ybl"
// }
// let user2=user1 //passed reference
// user2.email="aryaman@gmail.com"
// console.log(user1)
// console.log(user2)


// //STRINGS
// const str1=`HI`
// const str2=new String(`hello`)
// console.log(`${str1}\n`)
// console.log(str2,'\n','\t',"hehe")
// console.log(typeof str1) //string
// console.log(typeof str2) //object
// console.log(str2[1])
// console.log(str1.charAt(1))
// const str = "The quick brown fox jumps over the lazy dog.";
// const str3 = str.substring(4,15)
// const strCopy = str3.split(` `);
// console.log(strCopy);


// const n1=1000000
// console.log(n1.toString());
// console.log(n1.toLocaleString());
// console.log(n1.toLocaleString('en-US'))
// MATH
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.round(Math.random()*10))

// //Date
// const myDate = new Date()
// console.log(myDate.toDateString());
// let myCreatedDate = new Date(2008, 7, 31)
//     console.log(myCreatedDate.toLocaleDateString());
// myCreatedDate = new Date(2008,7,31, 7,5,30)
//     console.log(myCreatedDate.toLocaleString());
// myCreatedDate.setDate(29)
// myCreatedDate.setMonth(2)
// myCreatedDate.setFullYear(2008)
//     console.log(myCreatedDate.toLocaleString());
// const myNewDate = Date.now()
//     console.log(myNewDate);
//     console.log(myCreatedDate.getTime())
//     console.log(myNewDate > myCreatedDate.getTime());
// console.log(myCreatedDate.toLocaleString("en-US",{
//     month: 'long',
//     year: '2-digit',
//     day: '2-digit'
// }));