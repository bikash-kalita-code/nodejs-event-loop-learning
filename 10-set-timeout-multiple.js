const first = () => console.log('first (setTimeout)');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (setTimeout)');

setTimeout(first, 5000);
setTimeout(second, 5000);
setTimeout(third, 5000);