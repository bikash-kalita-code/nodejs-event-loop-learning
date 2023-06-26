const fs = require('fs');

const fun = () => console.log('setTimeout callback executed');

setTimeout(fun, 1000);

fs.readFile('package.json', 'utf-8', (err, data) => {
    if(err) {
        return console.log(err);
    }

    // Simulating a delay of 5 seconds for file operations
    const lateByTime = 5000;   // 5s = 5000ms
    const timeLate = new Date(new Date().getTime() + lateByTime);

    while(new Date() < timeLate);
});