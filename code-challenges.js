// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// fucntion
    // input: number
    //output: string 
    // below, at, or above boiling point
// if statement comparing the given number to 212
// number > 212 - "above boiling point"
// number < 212 - "below boiling point"
// number === 212 - "at boiling point"
// string interpolation because thats the 


const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"


// const boilingPoint = 212

// const tempCheck = (num) => {
//     if (num < boilingPoint){
//         return `${num} is below boiling point`
//     } else if ( num === boilingPoint){
//         return `${num} is at boiling point`
//     } else if (num > boilingPoint){
//         return `${num} is above boiling point`
//     }
// }

// console.log(tempCheck(temperature1))
// console.log(tempCheck(temperature2))
// console.log(tempCheck(temperature3))


// output: 
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//function
// concat two arrays firstArray.comcat(secondArray) combines both arrays returning one array with all of the values from both arrays.
    //input: two arrays
    //output/return: concatenatedArray.length   
// 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9


const twoBaseballArrays = (array, array2) => {
    return array.concat(array2).length
}

console.log(twoBaseballArrays(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))

//output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: looked up how to reverse a string https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
//.split()
//.reverse
//.join()
 // you cant .reverse a string so you have to make it into an array first, then join the array elemtents back into a string after reversing the order of the arrayed string.
const currentCohort = "Echo 2023"
// Expected output: "3202 ohcE"


const reverseString = (str) => {
    return str.split("").reverse().join("");
}

//  console.log(reverseString(currentCohort))
//output: 3202 ohcE

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//lastIndexOf(num)


const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// console.log(numberOfConnections.lastIndexOf(givenValue1))

// console.log(numberOfConnections.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// well i didnt really know what method that could reorganize the values in a array; i looked up some option, found .sort()
//then reading what sort did for me i knew that id need to reverse the order after that to achieve prompt goals.


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const sortedArray = (array) => {
    return array.sort().reverse()
}

// console.log(sortedArray(sanDiegoSummerTemperatures))
// console.log(sortedArray(sanDiegoWinterTemperatures))