// let user = {
//   age: 54,
//   name: 'Kylie',
//   magic: true,
//   scream: function() {
//     console.log('ahhhhhh!');
//   }
// };

// user.age;
// user.spell = 'abra kadabra';
// user.scream()

// // Map --> Gives you some order
// // Set --> No duplicate keys

// let a = new Map()
// a.set("userOne", {name: "noName", phone: "0000011"})


// class HashTable {
//     constructor(size) {
//         this.data = new Array(size)
//     }

//     _hash(key) {
//         let hash = 0;

//         for(let i = 0; i< key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }

//         return hash
//     }

//     set(key, value) {
//         let address = this._hash(key)

//         if(!this.data[address]) {
//             // let obj = {}

//             // obj[key] = value

//             // this.data[address] = obj

//             this.data[address] = []
//         } 

//         this.data[address].push([key, value])
//     }

//     get(key) {
//         let address = this._hash(key)
//         let currentBucket = this.data[address]

//         if(currentBucket) {
//             for(let i = 0; i< currentBucket.length; i++) {
//                 if(currentBucket[i][0] === key) return currentBucket[i][1]
//             }
//         }

//         return undefined
//         // return this.data[address][key]
//     }

//     keys(){
//         const keysArray = [];
//         console.log(this.data.length);
//         for (let i = 0; i < this.data.length; i++){
//           if(this.data[i]){
//             keysArray.push(this.data[i][0][0])
//           }
//         }

//         return keysArray;
//       }
// }

// const myHashTable = new HashTable(50)
// myHashTable.set("grapes", 1000)
// myHashTable.set("apples", 72)
// console.log(myHashTable.get("grapes"))

let arr1 = [2,5,5,2,3,5,1,2,4]
let arr2 = [2,1,1,2,3,5,1,2,4]
let arr3 = [2,3,4,5]

// function firstReccuringCharacter(arr) {
//     // Add guars
//     if(!arr || !arr.length) throw new Error("Invalid input")

//     let map = {}
//     let variable

//     for (let i = 0; i < arr.length; i++) {
//         if(map[arr[i]]) {
//             variable = arr[i]
//             break
//         } 

//         map[arr[i]] = true
//     }

//     return variable
// }

function firstReccuringCharacter(arr) {
    if(!arr || !arr.length) throw new Error("Invalid input")

    let mySet = new Set()

    for(let i = 0; i < arr.length; i++) {
        if(mySet.has(arr[i])) {
            return arr[i]
        } 

        mySet.add(arr[i])
    }

    return undefined
}

console.log(firstReccuringCharacter(arr1))
// console.log(firstReccuringCharacter(arr2))
// console.log(firstReccuringCharacter(null))