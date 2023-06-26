const fun1 = () => {
    console.log('Inside fun1');
}

const fun2 = () => {
    console.log('Inside fun2 : Start');
    process.nextTick(()=>console.log('process.nextTick 1'));
    setTimeout(fun1, 0);
    process.nextTick(()=>console.log('process.nextTick 2'));
    console.log('Inside fun2 : End');
}

setTimeout(fun2, 0);
// setTimeout(()=>console.log('setTimeout 2'), 0);

// const fun1 = () => {
//     console.log('Inside fun1');
// }

// const fun2 = () => {
//     console.log('Inside fun2 : Start');
//     process.nextTick(()=>console.log('process.nextTick 1'));
//     setTimeout(fun1, 0);
//     process.nextTick(()=>console.log('process.nextTick 2'));
//     console.log('Inside fun2 : End');
// }

// setTimeout(fun2, fun1);