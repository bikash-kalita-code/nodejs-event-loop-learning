// const fs = require('fs');

// fs.readFile('package.json', 'utf-8', (err, data) => {
//     if(err) {
//         return console.log(err);
//     }

//     for(let i = 1; i<=1000; i++) {
//         setTimeout(()=>console.log(`Settimeout : ${i}`), 0);
//     }

//     for(let i=1; i<=1000; i++) {
//         setImmediate(()=>console.log(`SetImmediate : ${i}`));
//     }
// })


for(let i = 1; i<=100000; i++) {
    setTimeout(()=>console.log(`Settimeout : ${i}`), 0);
}

for(let i=1; i<=100000; i++) {
    setImmediate(()=>console.log(`SetImmediate : ${i}`));
}