const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");
// Step 1: Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Step 2: Split the data by new lines to get the rows
    const rows = data.split("\n").filter((row) => row.trim() !== "");

    // Step 3: Split each row by space and map to an array of numbers
    const finalFormattedDataArray = rows.map((row) => row.split(" ").map(Number));

    //CODE-


    //create a function that takes an array and returns if it is safe or not.
    let tempSum = 0;
    const CheckArrayIsSafeOrNot = (currentArray) => {
        const isFlowDec = currentArray[0] > currentArray[1] ? true : false;
        for (let i = 0; i < currentArray.length - 1; i++) {
            const tempFlowDec =
                currentArray[i] > currentArray[i + 1] ? true : false;
            if (tempFlowDec !== isFlowDec) {
                return [false, i];
            }


            //checking the diff bw number.
            const diffBwAdjacentNumbers =
                currentArray[i] > currentArray[i + 1]
                    ? currentArray[i] - currentArray[i + 1]
                    : currentArray[i + 1] - currentArray[i];
            if (diffBwAdjacentNumbers < 1 || diffBwAdjacentNumbers > 3) {
                return [false, i];
            }
        }
        return [true, null];
    }

    // function to iterate over the parent array;



    for (let i = 0; i < finalFormattedDataArray.length; i++) {

        const currentArr = finalFormattedDataArray[i];
        const [isTheArraySafe, index] = CheckArrayIsSafeOrNot(currentArr);
        if (isTheArraySafe) {
            tempSum = tempSum + 1;
            continue;
        } else{
            for(let k = 0; k<currentArr.length; k++){
                //getting new arrar
                const newArray  = currentArr.filter((el, idx) => idx !==k);
                const [isArraySafe22, index333] = CheckArrayIsSafeOrNot(newArray);
                if(isArraySafe22){
                    tempSum = tempSum + 1
                    break;
                }
            }
            continue;
        }



    }

    console.log(tempSum, "tmpsum")



});