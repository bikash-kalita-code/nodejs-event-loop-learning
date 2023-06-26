const first = () => console.log('setTimeout 1');
const second = () => console.log('setTimeout 2');
const third = () => console.log('setTimeout 3');

setTimeout(first, 2000);
setTimeout(second, 1000);
setTimeout(third, 0);

let count = 0;
const fun = () => {
    count++;
    console.log(`setInterval ${count}`);
    if(count == 5) {
        clearInterval(myInterval);
        console.log('setInterval terminated');
    }
}

const myInterval = setInterval(fun, 500);
