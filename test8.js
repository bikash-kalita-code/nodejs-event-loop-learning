let a;

function synchronousFunction(callback) {
    // callback();
    process.nextTick(callback);
}

const cb = () => console.log('a : ', a);

synchronousFunction(
    cb
);

a = 1;