// Object - static functies

// console.log('Object.is(4, 4)', Object.is(4, 4));
// console.log('Object.is({}, {})', Object.is({}, {}));
// console.log('{} === {}', {} === {});

// console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN));
// console.log('Object.is(0, -0)', Object.is(0, -0));
// console.log('0 === -0)', 0 === -0);

// console.log('NaN === NaN', NaN === NaN);
// console.log('NaN == NaN', NaN == NaN);
// console.log('checken NaN:', isNaN(NaN));
// console.log('checken NaN met andere:', isNaN('qwert243yui'));
// console.log('checken NaN met andere:', isNaN(2434));
// console.log('checken Number.isNaN met andere:', Number.isNaN(6 / 'bla'));
// console.log(typeof NaN);

// console.log('7 / bla', 7 / 'bla');

// if (7 / 'bla' === 3 / 'hoi') {
// 	console.log('yay');
// } else {
// 	console.log('NOPE');
// }

let objA = { x: 24, y: 'hoi' };
let objB = { y: 'doei', z: 'wow' };
let target = { y: 12345, p: 'huh' };
Object.assign(target, objA, objB);

let combined = { y: 12345, p: 'huh', ...objA, ...objB };

console.log(target);
console.log(combined);

// Object.keys()

// Proxy
// Reflect
// encapsulation


let proxy = new Proxy(target, {
    get(target, prop) {
        console.log('getter op', prop);
        return target[prop];
    },
    set(target, prop, value) {
        console.log('setter op', prop, value);
        target[prop] = value;
    },
});
console.log(proxy.x);
proxy.x = 'woehoe';
console.log(proxy.x);

// wie gebruikt dit?
// - mocking libraries: Sinon jasmine Jest @testing-library
// - Vue reactivity

// Reflect.

// JS engines (parset en voert je code uit)
// - V8 Chromium Node.js Deno
// - JavaScriptCore Safari Bun
// - SpiderMonkey Firefox
