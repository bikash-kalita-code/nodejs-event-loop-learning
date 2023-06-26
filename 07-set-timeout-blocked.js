const first = () => console.log('first');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (in a blocking loop)');

first();
setTimeout(second, 0);

const startTime = new Date();
const fiveMoreSeconds = 5000;
const endTime = new Date(startTime.getTime() + fiveMoreSeconds);

let count = 0;
let count2 = 0

while(new Date() < endTime) {
    third();
    count+=1;
    count2+=1
}

console.log(count);
console.log(count2);