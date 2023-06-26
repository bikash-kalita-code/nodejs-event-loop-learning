const fun = () => console.log('setTimeout callback executed');
setTimeout(fun, 1000);

const startTime = new Date();
const fiveSeconds = 5000;   // 5000ms = 5s
const endTime = new Date(startTime.getTime() + fiveSeconds);

while(new Date() <  endTime) {
}