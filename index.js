// This is a boiler plate for JS functions to practice. 
// They are basic functions used frequently by developers.
// They will be code snippets good to study for technical interviews.


// 1: 
// Find in an array of objects 
// Using the find function
const students = [
  { name: 'Caitlin', age: 26, email: 'caitlin@gmail.com' },
  { name: 'Max', age: 28, email: 'max@gmail.com' },
  { name: 'Alicia', age: 24, email: 'alicia@gmail.com' },
  { name: 'Matt', age: 29, email: 'matt@gmail.com' },
  { name: 'Ana', age: 21, email: 'ana@gmail.com' }
];

// function search(student) {
//   return student.name === 'Caitlin'
// };

// convert to arrow function
const search = (student) => {
  return student.name === 'Caitlin'
}

console.log(students.find(search));
// returns { name: 'Caitlin', age: 34, email: 'caitlin@gmail.com' }
// ----------------------------------------------------------------


// 2:
// Sorting an array 
// Using the sort() function to sort alphabetically and numerically
const name = ['Caitlin', 'Max', 'Alicia', 'Matt', 'Ana'];
name.sort();
console.log(name);
// returns ["Alicia", "Ana", "Caitlin", "Matt", "Max"]

const arr = [1, 31, 5, 22, 10009, 1098,]
// sort numerically
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
// returns [1, 5, 22, 31, 1098, 10009]
// ----------------------------------------------------------------


// 3:
// String reverse
// 3 different ways: reverse using basic function, reverse using a loop, recursion function

// reverse using basic function, split sting, reverse it, then join
const reverse = (string) => {
  return string.split('').reverse().join('');
}
console.log(reverse('Caitlin'));
// returns 'niltiaC'

// reverse using loop
const reverse = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};
console.log(reverse('Alicia'))
// returns 'aicilA'

// reverse using recursion function
const reverse = (string) => {
  if (string === '')
    return '';
  else
    return reverse(string.substr(1)) + string.charAt(0);
}
console.log(reverse('Matt'));
// returns 'ttaM'
// ----------------------------------------------------------------


// 4:
// Finding largest num of an array, Math.max and looping

// math.max
const array1 = [1, 4, 5, 2, 3];
console.log(Math.max(...array1));
// returns 5

// looping through array
const array = [1, 4, 5, 2, 3];
var largest = 0;

    for (i=0; i<array.length; i++) {
    if (array[i]>largest) {
        largest = array[i];
    }
}
console.log(largest);
// returns 5


// 5: 
// Merge arrays
// using concat() function and spread operator(...)

// concat
let arrOne = [1, 3, 5]
let arrTwo = [2, 4, 6]
let combine = arrOne.concat(arrTwo)
console.log(combine);
// return [1, 3, 5, 2, 4, 6]

// spread operator
let arrOne = [1, 3, 5]
let arrTwo = [2, 4, 6]
combine = [...arrOne,...arrTwo]
console.log(combine);
// return [1, 3, 5, 2, 4, 6]
// --------------------------------------------------------------


// 6:
// Error handling
// try catch statements work for the exception handler. Code goes into the try block,
// if ok the try block will execute, otherwise the catch block will execute with error reporting.
try {
  try_statement
} catch (err) {
  catch_statement
};
// --------------------------------------------------------------


// 7:
// Most repeated number in an array 
// this function will help you find the most repeated element of an array
const mostRepeated = (array) => {
  return array.sort((a, b) =>
  array.filter(v => v===a).length
  - array.filter(v => v===b).length
  ).pop();
};

console.log(mostRepeated([ 'pizza', 'burger', 'pizza', 'salad', 'taco']));
// returns 'pizza'