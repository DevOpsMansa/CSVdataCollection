console.log(`
***************************************************
***R-ALAB 308.4.1: Working with Data Collections***
***************************************************
Objectives:
Use arrays to store ordered lists of data.
Use objects to store keyed lists of data.
Use conditional logic to process data.
Use loops to handle repetitive tasks.
Transform data according to specifications.
`);

console.log(`
**********************************
***Part 1: Refactoring Old Code***
**********************************
`);
/*When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.
For reference, ALAB 308.3.1 is embedded below. The section on CSV parsing is
“Part 3.”*/

// This is the base data from previous lab
// CSV Data we are working with
let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// Variables created to hold cell data and placeholders
let placeholder = '';
// let cell1 = '';
// let cell2 = '';
// let cell3 = '';
// let cell4 = '';

let row = []; /*-- Got rid of cells and used row--*/
// Loop for each character
for (char of str) {
/*--Switch case to determine what to do with each char--*/
  switch (char) {
    case ',':
    //   if (!cell1) {
    //     cell1 = placeholder;
    //     placeholder = '';
    //     break;
    //   } else if (!cell2) {
    //     cell2 = placeholder;
    //     placeholder = '';
    //     break;
    //   } else {
    //     cell3 = placeholder;
    //     placeholder = '';
    //     break;
    //   }
    row.push(placeholder)
    placeholder = '';
    break;
    case '\n':
    // cell4 = placeholder
    row.push(placeholder)
      placeholder = ''; /* -- clean up placeholder -- */
      console.log(row);
    row = [];  /* -- clean up row -- */
    //   cell1 = '';
    //   cell2 = '';
    //   cell3 = '';
    //   cell4 = '';
      break;
    default:
      placeholder += char;
  }
}

console.log(`
***********************************
***Part 2: Expanding Functionality***
*************************************
`);
/*
Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
After you have implemented the above:
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
Using the original CSV example data, here is what the result of this step should look like:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
becomes
[["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]]
 */

// variable decleared for data input
 const data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry-Cook,19\n63,Blaine,'Quiz-Master',58\n98,Bill,Doctor,26`;

//  Let the data split to a new column 
 let array = data.split("\n");
 
 console.log(array);
 let rows = [];
 for (let i = 0; i < array.length; i++){
     rows.push(array[i].split(","));
 }
 console.log(rows);

// OR

// MISSING LAST ROW ON THE CODE -- FIX THAT

// // variable decleared for data input
// let dataStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// row = [];

// //final outcome table
// let table =[];
// cellData = "";
// for (const char of dataStr) {
//     switch (char) {
//         case ',':
//             //adding cells into our row
//             row.push(cellData);
//             //cleaning cell Data for the next cell to fill in
//             cellData = "";
//             break;
//         case '\n':
//            // last cell data is being addaed
//             row.push(cellData); 
//             //adding rows to our table
//             table.push(row); 
//             //clean out row
//             row = []; 
//             cellData = "";
//             break;
//         default:
//           //concat characters to get a cell data
//             cellData += char; 
//             break;
//     }
// }
// console.log(table);

console.log(`
*******************************
***Part 3: Transforming Data***
*******************************
`);
/*
While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.
Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column. (Create objects for each eg 
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
For instance, the results of the example data above being passed through this step are as follows:
[["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]]
becomes
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
Important: While this functionality can be built into the original CSV parser you built in Part 2, we are intentionally creating two different algorithms to test different skillsets. Please leave these sections separate even if it would be more efficient to combine them.
*/

/*
Code incomplete as the 0 row is not being console logged out -*** Fix**
 */

//declaring resulting object
let worker = {};
let workers = []; 
//goes for all rows in table except the first one
for (let i = 1; i < rows.length; i++){
    worker = {};
    for(let j = 0; j < rows[0].length; j++){
//create an object that has "key" as j element in 0 row and "value" as j-element in i row
    worker[rows[0][j].toLowerCase()] = rows[i][j];
    }
//add worker at the end of our resulting array
    workers.push(worker);
}
console.log(workers);
// make sure part 2 (second option solution) is NOT commented when running the code so that "table will not have to be decleared again"

console.log(`
*******************************************
***Part 4: Sorting and Manipulating Data***
*******************************************
`);
/*
It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
Remove the last element from the sorted array.
Insert the following object at index 1: (use slice)
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
So far, the results should look like this:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
*/

// READ CLASS NOTE FOR CODE


console.log(`
*************************
***Part 5: Full Circle***
*************************
`);
/*
As a final task, transform the final set of data back into CSV format.
There are a number of ways to do this; be creative!
Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.
*/

// READ CLASS NOTE FOR CODE