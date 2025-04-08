'use strict';

// hoe te encapsuleren?
// - private maken
// - configuratie - Object.freeze() Object.preventExtensions()
// - conventie _  (fake encapsulation)
// - getters/setters
// - closures

class Human {
	_age;
	#age;
    // birthYear = 1234;

	constructor(age) {
		this._age = age;
		this.#age = age;
	}

	getBirthYear() {
		return new Date().getFullYear() - this._age;
	}
	get birthYear() {
		return new Date().getFullYear() - this._age;
	}
	set birthYear(value) {
        if (value > 2025 || value < 0) {
            throw new Error('Not a valid year');
        }

        console.log('val:', 195499);
		this.#age = new Date().getFullYear() - value;
		this._age = new Date().getFullYear() - value;
	}
}

let jp = new Human(38);
console.log(jp);

console.log(jp.getBirthYear());
console.log(jp.age);
console.log(jp._age);
jp.birthYear = 1954;
console.log(jp._age);

// console.log(jp.#age); // JS privateheid

let obj = { x: 24 };
// Object.preventExtensions(obj);
// Object.freeze(obj);
// Object.seal(obj);

// setter overschrijven
Object.defineProperty(obj, 'bladiebla', {
    configurable: true,
    value: 1234,
    writable: false
});


// obj.y = 'hoi';
// obj.x = 234;
// delete obj.x;
// obj.x = 234;
obj.bladiebla = 98765;

console.log(obj);
