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



    //PART1.
    const checkFinal = () => {
        let tempSum = 0;
        outerLoop: for (let j = 0; j < finalFormattedDataArray.length; j++) {
            const currentArray = finalFormattedDataArray[j];
            const isFlowDec = currentArray[0] > currentArray[1] ? true : false;
            for (let i = 0; i < currentArray.length - 1; i++) {
                //checking the flow
                const tempFlowDec =
                    currentArray[i] > currentArray[i + 1] ? true : false;
                if (tempFlowDec !== isFlowDec) {
                    continue outerLoop;
                }


                //checking the diff bw number.
                const diffBwAdjacentNumbers =
                    currentArray[i] > currentArray[i + 1]
                        ? currentArray[i] - currentArray[i + 1]
                        : currentArray[i + 1] - currentArray[i];
                if (diffBwAdjacentNumbers < 1 || diffBwAdjacentNumbers > 3) {
                    continue outerLoop;
                }
                if (i == currentArray.length - 2) {
                    tempSum += 1;
                    continue outerLoop;
                }
            }
        }
        return tempSum;
    };
    const finalSafeValues = checkFinal();
    return finalSafeValues
    

});

