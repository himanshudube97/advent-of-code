import { array1,array2 } from "./data.js";



const createsObjectToMapTheCount =(array2)=>{
    const tempObj={};
    for(let i = 0; i<array2.length; i++){
        if(tempObj[array2[i]] !== undefined){
            tempObj[array2[i]] = tempObj[array2[i]] + 1
        }else{
            tempObj[array2[i]] = 1;
        }
    }
    return tempObj;
}




const mapObjectToArray1 = (array1)=>{
    let sum = 0;
    const objectWithArray2DataAndCount = createsObjectToMapTheCount(array2);

    for(let i = 0;i <array1.length; i++){
        if(objectWithArray2DataAndCount[array1[i]]==undefined){
            sum = sum + 0
        }else if(objectWithArray2DataAndCount[array1[i]]){
            sum = sum + (array1[i] * objectWithArray2DataAndCount[array1[i]]);
        }
    }
    return sum;
}

const finalResult = mapObjectToArray1(array1);
console.log(finalResult)