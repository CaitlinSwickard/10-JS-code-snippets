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
