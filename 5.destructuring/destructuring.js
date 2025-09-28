const user = { id: 1, name: 'Tunde', profile: { email: 'tunde@example.com' } };


const { id, name, profile: { email } } = user;
console.log('id, name, email', id, name, email);


const colours = ['red', 'green', 'blue'];
const [first, second, third = 'default-blue'] = colours;
console.log('first, second, third', first, second, third);


function greet({ name, profile: { email } }) {
console.log(`Hello ${name}, we emailed you at ${email}`);
}


greet(user);

//Extract values from arrays or objects into variables in a clean way.

//Can also set default values and work with nested objects/arrays.