// ARRAYS
const myArr = [14,15,10,11,12,13,14]
const myArr2 = new Array(1,2,3,4,5)
const myArr3 = [10,true,"Shaktiman",11,12,13,14, {name:'Aryaman',college:['dtu','ipu','iit']} , [7,8,9]]
// console.log(myArr[1]);
// myArr[10]=20
// console.log(myArr);
// const myArr4 = [myArr, myArr2]
// console.log(myArr4);
// console.log(myArr2[1]);
// console.log(myArr3);
// console.log(myArr3.join()); //returns string after joining all elements (with optional string)

myArr.push(16)
myArr.push(17)
myArr.pop()
// console.log(myArr);
// myArr.sort()
// console.log(myArr);
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(10));


// //slice and splice
//     console.log('A ', myArr)

// const myn1 = myArr.slice(1,3) //excludes second and does not modify original array
//     console.log(myn1);
//     console.log('B ', myArr)

// const myn2 = myArr.splice(1,3) //includes both and modifies original array
//     console.log(myn2); 
//     console.log('C ', myArr)


// myArr2.push(myArr) //poore array ko ek element ki tareh daal dega
//     console.log(myArr2)
// const myArr4 = myArr2.concat(myArr)
//     console.log(myArr4)
// const wowArr = [...myArr , ...myArr2] //Best method (spread operator)
//     console.log(wowArr)


let wowArr2 = myArr //reference to original array
let wowArr3 = [myArr] //created an array inside array
let wowArr4 = [...myArr] //created copy of myArr
// wowArr4[1]=50
// console.log(wowArr4);
// console.log(myArr);

// wowArr3[1]=50
// console.log(wowArr3);
// console.log(myArr);

// wowArr2[1]=50
// console.log(wowArr3);
// console.log(myArr);


// const myNewArray = [1,2,3,[4,5],6,[7,[8,9]],,9]
// console.log(myNewArray);
// const myNewArray2 = [...myNewArray,10]
// console.log(myNewArray2);
// const myNewArray3 = myNewArray.flat(2) //can also do Infinity
// console.log(myNewArray3);


const a1=2
const a2=4
let a3=6
const arr=[a1,a2,a3]
console.log(arr);
a3=8
console.log(arr); //change nhi hua


console.log(Array.isArray('aryaman'))
console.log(Array.isArray(myArr))
console.log(Array.from({name: 'aryaman'}))
console.log(Array.from('aryaman'))
console.log(Array.of('aryaman',23,a1))