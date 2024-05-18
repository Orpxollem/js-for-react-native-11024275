function processArray(newArray){
    let finalArray = [];
    for (let x = 0; x < newArray.length; x++){
        if (newArray[x] % 2 === 0){
            finalArray.push(newArray[x] * newArray[x]);
        }
        else{
            finalArray.push(newArray[x] * 3);
        }
    }
    return finalArray;
}

function formatArrayStrings(stringArray, numberArray){
    stringArray = stringArray;
    numberArray = processArray(numberArray);

    for (let x = 0; x < stringArray.length; x++){
        if (numberArray[x] % 2 === 0){
            stringArray[x] = stringArray[x].toUpperCase();
        }
        else{
            stringArray[x] = stringArray[x].toLowerCase();
        }
    }
    return stringArray;
}


const inputArray = [1, 2, 3, 4, 5];

const stringsArray = ["Tim", "John", "Paul", "David", "Jake"];
const initialArray = formatArrayStrings(stringsArray, inputArray);

export { initialArray };