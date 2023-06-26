const firstSetTimeout = () => console.log('setTimeout 1');
const secondSetTimeout = () => console.log('setTimeout 2');
const thirdSetTimeout = () => console.log('setTimeout 3');
const fourthSetTimeout = () => console.log('setTimeout 4');

const firstSetImmediate = () => console.log('setImmediate 1');
const secondSetImmediate = () => console.log('setImmediate 2');
const thirdSetImmediate = () => console.log('setImmediate 3');
const fourthSetImmediate = () => console.log('setImmediate 4');

const firstProcessNextTick = () => console.log('processNextTick 1');
const secondProcessNextTick = () => console.log('processNextTick 2');
const thirdProcessNextTick = () => console.log('processNextTick 3');
const fourthProcessNextTick = () => console.log('processNextTick 4');
const fifthProcessNextTick = () => console.log('processNextTick 5');

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');
const fourth = () => console.log('fourth');

first();
process.nextTick(firstProcessNextTick);
setTimeout(firstSetTimeout,0);
setImmediate(firstSetImmediate);
process.nextTick(secondProcessNextTick);
setImmediate(secondSetImmediate);
setTimeout(secondSetTimeout,0);
second();
process.nextTick(thirdProcessNextTick);
setImmediate(thirdSetImmediate);
setImmediate(fourthSetImmediate);
third();
setTimeout(thirdSetTimeout,0);
setTimeout(fourthSetTimeout,0);
process.nextTick(fourthProcessNextTick);
process.nextTick(fifthProcessNextTick);
fourth();