const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log('doubled', doubled);


const sum = (a, b) => {
const result = a + b;
return result;
};
console.log('sum', sum(3, 4));


function Timer() {
this.seconds = 0;
setInterval(() => {
this.seconds += 1;
}, 1000);
}

//A shorter syntax for writing functions (() => {} vs function() {}).

//Great for callbacks, array methods (map, filter), and concise logic.