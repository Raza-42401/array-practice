// Task 1
let arr1 = [10, 20, 30, 40, 50];
let multipliedArray = arr1.map(num => num * 5);
console.log(multipliedArray);

// Task 2
let arr2 = [15, 26, 33, 40, 18, 29];
let evenNumbers = arr2.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Task 3
let arr3 = [5, 10, 15, 20];
let sum = arr3.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Task 4
let arr4 = [7, 14, 21, 28, 35];
let firstNumberGreaterThan20 = arr4.find(num => num > 20);
console.log(firstNumberGreaterThan20);

// Task 5
let arr5 = [3, 5, 7, 9, 11];
let indexOfSeven = arr5.findIndex(num => num === 7);
console.log(indexOfSeven);

// Task 6
let arr6 = [12, 24, 36, 48, 60];
let includesThirtySix = arr6.includes(36);
console.log(includesThirtySix);

// Task 7
let arr7 = [1, 2, 3, 4, 2, 5];
let indexOfTwo = arr7.indexOf(2);
console.log(indexOfTwo);

// Task 8
let arr8 = [1, 2, 3, 4, 2, 5];
let lastIndexOfTwo = arr8.lastIndexOf(2);
console.log(lastIndexOfTwo);
