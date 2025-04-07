// een functie maakt die een functie teruggeeft met als idee om
// een stukje interne state bij te houden

function counter() {
	let tellertje = 0;

	return {
		increment() {
			console.log('incrementing!', ++tellertje);
		},
	};
}

let myFirstCounter = counter();
myFirstCounter.increment();
myFirstCounter.increment();
myFirstCounter.increment();
myFirstCounter.increment();

function andereCounter() {
	let tellertje = 0;

	return function () {
		console.log('incrementing =>', ++tellertje);
	};
}

let mySecondCounter = andereCounter();
mySecondCounter();
mySecondCounter();
mySecondCounter();
mySecondCounter();

let myThirdCounter = andereCounter();
myThirdCounter();
myThirdCounter();
myThirdCounter();
myThirdCounter();

var self = this;
var vm = this;
var _this = this;
let local = this;

