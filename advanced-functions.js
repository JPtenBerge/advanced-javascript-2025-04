// 'use strict';

undefined = 'bla'; // ECMAScript 3 - IE6


// javascript kent geen overloading.
test(undefined);
// test(14, 28, 42, 'hoi', []);

// HOISTING: dat deze functies hieronder naar boven worden verplaatst

function test() {
    console.log('hallo vanaf test');
}

function test(p1, p2 = p1, ...rest) {
    console.log('hallo vanaf test met params 3:', p1, p2, rest);
}

// window.test = function ()  {};

// globale object: window (browser) / global (Node.js/Deno/Bun)
// nieuw globaal object: globalThis

// window.bla = 14;
// console.log(bla);

let returnVal = test(1212);
console.log(returnVal);