const indefiniteFunction = () => {while(true){}}

setTimeout(()=>console.log('setTimeout'), 0);
setImmediate(()=>console.log('setImmediate'));
process.nextTick(indefiniteFunction);