function varExample() {
console.log('before var x ->', x);
var x = 1;
console.log('after var x ->', x);
}


function letExample() {
try {
console.log('before let y ->', y);
} catch (err) {
console.log('let not accessible before declaration');
}
let y = 2;
console.log('after let y ->', y);
}


function constExample() {
const PI = 3.14159;
console.log('PI', PI);
}


constExample();
varExample();
letExample();

//var (old): function-scoped, hoisted.

//let: block-scoped, not hoisted the same way, can be reassigned.

//1const: block-scoped, cannot be reassigned (but objects/arrays declared with const can still be mutated).