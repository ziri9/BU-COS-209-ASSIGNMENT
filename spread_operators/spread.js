const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];
console.log('arr2', arr2);


const objA = { a: 1, b: 2 };
const objB = { ...objA, c: 3, b: 20 };
console.log('objB', objB);


function sumAll(...nums) {
return nums.reduce((s, n) => s + n, 0);
}
console.log('sumAll', sumAll(1, 2, 3, 4));


const arrCopy = [...arr1];
const objCopy = { ...objA };


console.log('arrCopy === arr1', arrCopy === arr1);
console.log('objCopy === objA', objCopy === objA);

//Expands arrays/objects into individual elements or properties.
