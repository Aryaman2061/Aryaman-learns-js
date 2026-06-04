// //thoda sa symbol
// const mySym = Symbol('hi')
// const mySym2 = Symbol('hi')
// const mySym3 = Symbol.for('hi')
// const mySym4 = Symbol.for('hi')
// console.log(mySym==mySym2); //false
// console.log(mySym2==mySym3); //false
// console.log(mySym3==mySym4); //true
    
// const wifiSym = Symbol('wifi')

// const myObj = {
//     name: 'aryaman',
//     'Full name': 'aryaman goel',
//     roll: 37,
//     mySym: 'jai hind', //normal string key
//     [mySym]: 'hola', //symbol key
//     email: 'aryaman2061@gmail.com',
//     isLoggedIn: false,
//     lastLoggedInDays: ['monday','saturday'],
// }
// console.log(myObj.email);
// console.log(myObj['email']);
// // console.log(myObj.'Full name'); //will not work
// console.log(myObj['Full name']);
// console.log(myObj[mySym]);
// // myObj.wifi='excitel' //string as key add hoga
// myObj[wifiSym] = 'excitel' //symbol as key add hoga
// Object.freeze(beuxbaton)
// myObj['wife'] = 'dibruder'
// myObj.hubby = [`bubby`,"dubby"]

// myObj[Symbol.for('new')] = 'this is new'
// myObj[Symbol.for('new')] = 'this is newer'

// myObj.firstfunc = function(){
//     console.log(`func unc ${this.name}`)
// }
// console.log(myObj);
// console.log(myObj.firstfunc());



//PART TWO
const hogwarts = new Object()
hogwarts.grounds={hagrid: "massive",sprout: "scream"}
hogwarts.forbiddenForest={spiders: "giant", centaur: "horse man"}
hogwarts.castle={
    headmaster: 'Dumbleedoor', 
    towers: {gryffindor: "top-right", slytherin: "bottom"}, 
    classes: {dungeons: "dark", 
        corridors: 'light',
    },
    message: function(){
        console.log(`${this.headmaster} good morning`)
    }
}
hogwarts[Symbol('harry')]='hii'
    // console.log(hogwarts.grounds.hagrid);
const dumstrang = {1: 'krum', 2:'karkaroff'}
const beuxbaton = {3: 'fleur', 4:'madame'}
const allSchools = {...hogwarts,dumstrang,...beuxbaton}
    // console.log(allSchools)
    // console.log(Object.keys(hogwarts))
    // console.log(Object.values(hogwarts))
    // console.log(Object.entries(hogwarts))
    // console.log(Object.keys(hogwarts))

// // De-structuring
// const {headmaster} = hogwarts.castle
// console.log(headmaster);
// const {gryffindor: head,slytherin: tail} = hogwarts.castle.towers
// console.log(tail)
hogwarts.castle.message()