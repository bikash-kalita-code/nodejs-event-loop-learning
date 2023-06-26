const first = () => console.log('first setTimeout');
const second = () => console.log('second (setImmediate)');
const third = () => console.log('third');

setImmediate(second);
setTimeout(first, 0);
third();