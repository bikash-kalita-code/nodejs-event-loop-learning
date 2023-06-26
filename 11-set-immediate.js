const first = () => console.log('first');
const second = () => console.log('second (setImmediate)');
const third = () => console.log('third');

first();
setImmediate(second);
third();

/*

NOTE:
setImmediate is very similar to setTimeout with a 0ms delay.

*/