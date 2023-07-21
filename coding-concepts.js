// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer:

// 10

// b) Verify and explain:

// 10, .length only counts and returns the number of characters to the element which it is applied.



// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:

// o

// b) Verify and explain:
//o, strings are zero indexed, as arrays are. therefore the selected index [4] of the string is the 5th caracter; the letter 'o'
// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: 
//"Ruby"
// b) Verify and explain:
// Ruby
//index is equal to the number 1, so because "index" is in square brackets the second index of array languages is selected and logged on the console.
// --------------------4) What will this log? console.log(weekendDays[0].toUpperCase, weekendDays[1].toUpperCase)

const weekendDays = ["saturday", "sunday"]

// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain:

// "TypeError: weekendDays.toUpperCase is not a function
//     at Object.<anonymous> (/Users/learnacademy/Desktop/week-1-assessment-j-felder/coding-concepts.js:53:25)"
//i think .toUpperCase is used wrong. might be only for string
//buy removing .toUperCase output is ['satuday, 'sunday']

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: undefined, i think there should be a set of parenthesis after 'typeOf' instead of "typeof"
// b) Verify and explain:
//number typeof is returning the data type of .length's return, which is the number of elements in the array dataTypes.

// why does there not need to ba a set of parenthis directly after typeof. and why is it not camelCased?
 