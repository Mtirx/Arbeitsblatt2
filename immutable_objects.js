//Aufgabe 1b
 const number = 42;

//Aufgabe 1c
 const person = {
    firstName: 'Loris',
    lastName: 'Meier',
    age: 18
  };
  
//Aufgabe 1d
 const person1 = {
    firstName: 'Loris',
    lastName: 'Meier',
    age: 18
  };
  const updatedPerson = {
    ...person1,
    job: 'Software Developer'
  };
  
//Aufgabe 1e
  const person2 = {
    firstName: 'Loris',
    lastName: 'Meier',
    age: 18
  };
  
  const updatedPerson1 = {
    ...person2,
    age: 30
  };

//Aufgabe 1f
const person3 = {
    firstName: 'Loris',
    lastName: 'Meier',
    age: 18
  };
  
  const { age, ...personWithoutAge } = person3;
  
  console.log(personWithoutAge);
