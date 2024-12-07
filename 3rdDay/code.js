
const { match } = require("assert");
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
    const rows = data.toString();
    console.log(rows, "Rows")

    // Step 3: Split each row by space and map to an array of numbers

    const regexToMatch  = /mul\(\d{1,3},\d{1,3}\)/g;

    const matches = rows.match(regexToMatch);
    let sum = 0;

    for(let val in matches){
      let numArray =  matches[val].replace('mul', '').replace('(', '').replace(')', '').split(',');
        sum = sum +( +numArray[0] * +numArray[1])
    }

    console.log(sum, "sum")
    
})
