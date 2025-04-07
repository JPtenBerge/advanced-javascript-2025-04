
// set is lijst van unieke waarden

let setje = new Set();
setje.add(5);
setje.add(5);
setje.add(5);
setje.add(5);
setje.add(5);
setje.add(5);
setje.add('5');
setje.add([5]);
setje.add(5);

console.log(setje);
console.log(setje.size);


// map is een hashmap - key-value

let mapje = new Map();
mapje.set('bla', 'hoi');
mapje.set('ding', 'dinges');
mapje.set({}, 'qwer');
console.log(mapje);
console.log(mapje.size);
console.log([...mapje.keys()]);
console.log([...mapje.values()]);

let obj = {
    bla: 'hoi',
    ding: 'dinges'
};
// Object.keys(obj).length

let zwakke = new WeakSet();
let zwakke2 = new WeakMap();

// DOM-elementen
