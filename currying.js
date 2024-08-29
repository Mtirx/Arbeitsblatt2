//Aufgabe 3a
const gradeToLetter = (grade) => {
  if (grade >= 90) return 'a';
  if (grade >= 80) return 'b';
  if (grade >= 70) return 'c';
  if (grade >= 60) return 'd';
  return 'f';
};

const createFeedback = (name) => (letter) => {
  const feedbacks = {
    'a': 'Excellent Job',
    'b': 'Nice Job',
    'c': 'Well done',
    'd': 'What happened',
    'f': 'Not good'
  };
  return `${feedbacks[letter]} ${name}, you got an ${letter}`;
};

const transformStudentGrades = (grades) => {
  return grades.map(({ name, grade }) => {
    const letter = gradeToLetter(grade);
    return createFeedback(name)(letter);
  });
};

const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const studentFeedback = transformStudentGrades(studentGrades);


//Aufgabe 3b
const R = require('ramda');

const strings = ['Alice', 'Bob', 'Charlie'];

const addPrefix = R.curry((prefix, str) => `${prefix}${str}`);

const addHelloPrefix = addPrefix('Hello, ');

const result = R.map(addHelloPrefix, strings);

//Aufgabe 3c
let arrayLength;

function getArrayLengthImpure(array) {
    arrayLength = array.length;
    return array.length;
}

// Test der impuren Funktion
const myArrayImpure = [1, 2, 3, 4, 5];
console.log("Impure Function - Array Length:", getArrayLengthImpure(myArrayImpure)); // Gibt 5 aus

// Pure Funktion
function getArrayLengthPure(array) {
    return array.length;
}

// Test der puren Funktion
const myArrayPure = [1, 2, 3, 4, 5];
console.log("Pure Function - Array Length:", getArrayLengthPure(myArrayPure)); // Gibt 5 aus
