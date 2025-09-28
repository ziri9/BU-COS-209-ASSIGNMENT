const people = [
{ name: 'Ayo', age: 21 },
{ name: 'Bola', age: 30 },
{ name: 'Chi', age: 17 }
];


const adults = people.filter(p => p.age >= 18);
console.log('adults', adults);


const names = people.map(p => p.name);
console.log('names', names);


const totalAge = people.reduce((sum, p) => sum + p.age, 0);
console.log('total age', totalAge);


const teenager = people.find(p => p.age < 20);
console.log('a teenager', teenager);


console.log('is anybody a minor?', people.some(p => p.age < 18));
console.log('are all adults?', people.every(p => p.age >= 18));


people.forEach(p => console.log(`${p.name} -> ${p.age}`));

//.reduce() → accumulate values (e.g., sum).

//.find(), .some(), .every(), .forEach() → searching, checking, or looping through arrays.