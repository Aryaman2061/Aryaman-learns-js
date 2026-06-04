const num = new Array()
num.push(2)
// if(false){
//     console.log('found')
// } else{
//     console.log('forgotten')
// }

// Nullish Coalescing operator (??)
const val=null
const val2=undefined
const result = val??100;
// console.log(result);
const result2 = val??val2??100??"default";
// console.log(result2);

//terniary operator
//condition ? true : false
const icePopPrice = 800
// icePopPrice>900 ? console.log('greater') : console.log('lesser')



// //LOOPS
// for (let i = 0; i < 3; i++) {
//     console.log('hi');
// }

// let i=0
// while (i<4) {
//     console.log('hi');
//     i++
// }

// i=0
// do {
//     console.log('hi');
//     i++
// } while (i<4);

const arr=[1,2,3,4,5]
const str="abcde"
const obj={
    name:"aryaman",
    age:18,
    brother:'di'
}

// for (const element of arr) {
//     console.log(element)
// }
// for (const ch of str) {
//     console.log(ch)
// }

// for (const key in obj) {
//     // if (!Object.hasOwn(obj, key)) continue; //skip if dont understand
//     console.log(key,':',obj[key]);
// }
// for (const i in arr) {
//     console.log('index: ',i,'\telement: ',arr[i]);
// }
// for (const i in str) {
//     console.log('index: ',i,'\telement: ',str[i]);
// }

// arr.forEach((num)=>(console.log(num)));
const printMe = (num)=>(console.log(num))
const printMe2 = function (num){
    console.log(num+10);
}
// arr.forEach(printMe);
// arr.forEach(printMe2);
// arr.forEach((item,index,arr)=>{
//     console.log(item, index, arr);
// })


// const map = new Map()
// map.set('IN','India')
// map.set('US','United States')
// map.set('FR','France')
// // map.delete('FR')
// console.log(map);
// for (const key of map) {
//     console.log(key);
// }
// //better
// for (const [key,value] of map) {
//     console.log(key,': ',value);
// }