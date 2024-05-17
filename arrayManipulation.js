function processArray(newArray){
    finalArray = [];
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