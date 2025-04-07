

// primitief datatype - string boolean number
// "iets uniek te adresseren" - Guid

let sym = Symbol.for('qwerty'); // getOrCreate Guid.NewGuid()
let sym2 = Symbol.for('qwerty'); // getOrCreate Guid.NewGuid()
console.log(sym);
console.log('sym === sym2', sym === sym2);
console.log('sym == sym2', sym == sym2);

let suffix = 'name';

let obj = {
    x: 24,
    y: 'hoi',
    [`first${suffix}`]: 'Frank',
    [`last${suffix}`]: 'de Boer',
    [sym]: 'hier mijn symbolische waarde',
    [Symbol.toPrimitive]() {
        return 'primi';
    },
    toString() {
        console.log('hallo tostrin');
        return 'bla';
    }
};
console.log(obj);
console.log(obj[sym]);


console.log(`${obj}`);

