const firstSetImmediate = () => console.log('setImmediate 1');
const secondSetImmediate = () => console.log('setImmediate 2');
const thirdSetImmediate = () => console.log('setImmediate 3');
const fourthSetImmediate = () => console.log('setImmediate 4');

const firstSetTimeout = () => console.log('setTimeout 1');
const secondSetTimeout = () => console.log('setTimeout 2');
const thirdSetTimeout = () => console.log('setTimeout 3');
const fourthSetTimeout = () => console.log('setTimeout 4');

setImmediate(firstSetImmediate);
setTimeout(firstSetTimeout, 0);
setImmediate(secondSetImmediate);
setTimeout(secondSetTimeout, 0);
setTimeout(thirdSetTimeout, 0);
setImmediate(thirdSetImmediate);
setImmediate(fourthSetImmediate);
setTimeout(fourthSetTimeout, 0);

/*

NOTE:
-----
The above lines of code will generate undeterministic results.


*/
