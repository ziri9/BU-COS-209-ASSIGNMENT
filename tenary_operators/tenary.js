const score = 75;
const grade = score >= 70 ? 'A' : score >= 50 ? 'C' : 'F';
console.log('grade', grade);


const isLoggedIn = true;
console.log('welcome message', isLoggedIn ? 'Welcome back!' : 'Please sign in');

//A shorthand way to write simple conditionals.

//Syntax: condition ? valueIfTrue : valueIfFalse.