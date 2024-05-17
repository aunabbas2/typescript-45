"use strict";
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of number) { //array ka name likhte jo k number hai yah py
    let ordinalEnding; //variable bnaya
    if (num === 1) {
        ordinalEnding = "first";
    }
    else if (num === 2) {
        ordinalEnding = "seondnd";
    }
    else if (num === 3) {
        ordinalEnding = "third";
    }
    else if (num === 2) {
        ordinalEnding = "fourth";
    }
    else if (num === 2) {
        ordinalEnding = "five";
    }
    else if (num === 2) {
        ordinalEnding = "six";
    }
    else if (num === 2) {
        ordinalEnding = "seven";
    }
    else if (num === 2) {
        ordinalEnding = "eight";
    }
    else {
        ordinalEnding = "nine";
    }
    console.log(`${num}${ordinalEnding}`);
}
