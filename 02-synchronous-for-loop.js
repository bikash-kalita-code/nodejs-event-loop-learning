const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

first();

for(let i=0; i<5; i++) {
    second();
}

third();