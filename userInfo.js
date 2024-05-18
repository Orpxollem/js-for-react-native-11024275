import { initialArray } from "./arrayManipulation.js"

function createUserProfiles(namesArray, initialArray){
    let lastArray = [];
    for (let x = 0; x < namesArray.length; x++){
        lastArray.push({
            originalName: namesArray[x],
            modifiedName: initialArray[x],
            id: x + 1
        })
    }
    return lastArray;
}


const stringsArray = ["Tim", "John", "Paul", "David", "Jake"];

const finalArray = createUserProfiles(stringsArray, initialArray);
console.log(finalArray);
