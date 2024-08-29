//Aufgabe 2a
const FortniteUser = [
    { id: 1, name: 'Tim', age: 16 },
    { id: 2, name: 'Bob', age: 14 },
    { id: 3, name: 'Ella', age: 17 },
    { id: 4, name: 'Lena', age: 13 },
    { id: 5, name: 'Loris', age: 18}
  ];
  
//Aufgabe 2b
const FortniteUser1 = [
    { id: 1, name: 'Tim', age: 16 },
    { id: 2, name: 'Bob', age: 14 },
    { id: 3, name: 'Ella', age: 17 },
    { id: 4, name: 'Lena', age: 13 },
    { id: 5, name: 'Loris', age: 18 }
  ];
  
  const newFortniteUser = [
    ...FortniteUser1,
    { id: 6, name: 'Mia', age: 15 }
  ];
  
//Aufgabe 2c
const FortniteUser2 = [
    { id: 1, name: 'Tim', age: 16 },
    { id: 2, name: 'Bob', age: 14 },
    { id: 3, name: 'Ella', age: 17 },
    { id: 4, name: 'Lena', age: 13 },
    { id: 5, name: 'Loris', age: 18 }
  ];
  
  // Aktualisiere das Alter von Ella
  const updatedFortniteUser2 = FortniteUser1.map(user => 
    user.id === 3 ? { ...user, age: 18 } : user
  );

//Aufgabe 2d
const FortniteUser3 = [
    { id: 1, name: 'Tim', age: 16 },
    { id: 2, name: 'Bob', age: 14 },
    { id: 3, name: 'Ella', age: 17 },
    { id: 4, name: 'Lena', age: 13 },
    { id: 5, name: 'Loris', age: 18 }
  ];
  
  // Kleinsten eindeutigen Identifikator finden
  const minId = Math.min(...FortniteUser3.map(user => user.id));
  
  // Ohne das Element mit dem kleinsten Identifikator
  const filteredFortniteUser3 = FortniteUser3.filter(user => user.id !== minId);

//Aufgabe 2e
  const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
  const total = reviews.reduce((sum, review) => sum + review, 0); //Alle werte berechnen 
  const average = total / reviews.length; //Durchschnitt

//Aufgabe 2f
const reviews1 = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

function categorizeAndCountReviews(reviewss) {
  return reviews.reduce((newZahl, review1) => {
    if (review1 >= 4) {
      newZahl.good += 1;
    } else if (review1 >= 2.5) {
      newZahl.ok += 1;
    } else {
      newZahl.bad += 1;
    }
    return newZahl;
  }, { good: 0, ok: 0, bad: 0 });
}

const reviewCounts = categorizeAndCountReviews(reviews1);

console.log(reviewCounts); //Zeigt an wie viele Zahlen good, ok und bad sind.