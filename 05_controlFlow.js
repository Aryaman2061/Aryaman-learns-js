const numb = new Array()
numb.push(2)
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
// // FOR LOOP
for (let i = 0; i < 3; i++) {
//     console.log('hi');
}

// // WHILE LOOP
let i=0
while (i<4) {
//     console.log('hi');
    i++
}

// // DO-WHILE LOOP
i=0
do {
    // console.log('hi');
    i++
} while (i<4);

const arr=[1,2,3,4,5]
const str="abcde"
const obj={
    name:"aryaman",
    age:18,
    brother:'di'
}

// // FOROF LOOP
for (const element of arr) {
//     console.log(element)
}
for (const ch of str) {
//     console.log(ch)
}

// // FORIN LOOP
for (const key in obj) {
    // if (!Object.hasOwn(obj, key)) continue; //skip if dont understand
//     console.log(key,':',obj[key]);
}
for (const i in arr) {
//     console.log('index: ',i,'\telement: ',arr[i]);
}
for (const i in str) {
//     console.log('index: ',i,'\telement: ',str[i]);
}

// // FOREACH
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


const map = new Map()
map.set('IN','India')
map.set('US','United States')
map.set('FR','France')
// // map.delete('FR')
// console.log(map);
// for (const key of map) {
//     console.log(key);
// }
// //better
// for (const [key,value] of map) {
    //     console.log(key,': ',value);
// }


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nums);
const doubled = nums.map(num => num * 2);
// console.log(doubled);
const newNums = nums.map(num => num>4)
// console.log(newNums);
const newNums2 = nums.filter(num => num>4)
// console.log(newNums2);
const newNums3 = nums.map(num => num*2).map(num => num+1) //kitni bhi chaining kr sakte ho kis bhi function ki
// console.log(newNums3);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBooks = books.map( (bk)=>{
    if(bk.genre==='History') return bk;
} )
// console.log(userBooks);
let userBooks2 = books.filter( (bk)=>(bk.genre==='History' && bk.publish>=1995) )
// console.log(userBooks2);
let userBooks3 = []
books.forEach( (bk)=>{
    if(bk.genre==='History') userBooks3.push(bk)
})
// console.log(userBooks3);


// nums.reduce((accumulator, currentValue) => {
//   // return updated accumulator
// }, initialValue);
const sum = nums.reduce((acc, currval) => acc + currval, 0);
// console.log(sum);

const max = nums.reduce( (acc,currval)=>(Math.max(acc,currval)),0 )
// console.log(max);
// OR
const max2 = nums.reduce( (acc,currval)=>(currval>acc?currval:acc),0 )
// console.log(max2);

const occurances = nums.reduce( (acc,currval)=>{
    acc[currval]=(acc[currval]??0) + 1;
    return acc;
},{})
// console.log(occurances);

const arr2 = [[1, 2], [3, 4], [5]];
const flat = arr2.reduce((acc, curr) => acc.concat(curr), []);
// console.log(flat);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const sum2 = shoppingCart.reduce((acc,currval)=>(acc + currval.price),0)
console.log(sum2);