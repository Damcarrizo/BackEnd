let arrayTest =[1,2,3,4,5]

const functionMap = ( arreglo, callback) =>{
    let newArray = [];
    for ( let index = 0; index < arreglo.length; index++){
        let newValue = callback (array[index])
        newArray.push(newValue);
    }
    return newArray;
}

let newOwnArray = functionMap(arrayTest,x=>x*2);
console.log(newOwnArray)