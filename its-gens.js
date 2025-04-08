// iterators
let obj = {
	x: 24,
	y: 'hoi',
	favorieteChips: ['Nibb-it rings', 'Wokkels paprika'],
	favorieteDranken: ['Fristi', 'Chocomel'],
	[Symbol.iterator]() {
		// iterator pattern

		let alles = [...this.favorieteChips, ...this.favorieteDranken];
		let index = 0;

		return {
			next() {
				return {
					value: alles[index],
					done: ++index > alles.length,
				};
			},
		};
	},
};
for (let prop in obj) {
	// sowieso geen iterator. reflection. liever niet gebruiken.
	console.log(prop, obj[prop]);
}
for (let prop of Object.keys(obj)) {
	// gebruikt iterator.
	console.log(prop, obj[prop]);
}

let lijstje = [2, 6, 98];
for (let item of lijstje) {
	// array != array. object met numerieke properties. die stiekem wel strings zijn.
	console.log(item);
}

for (let item of obj) {
	console.log(item);
}

// generators - IEnumerable<>  yield
function* myGen() {
	console.log('eerste');
	yield 4;
	console.log('tweede');
	yield 8;
	console.log('derde');
	yield 15;
	console.log('vierde');
	yield 16;
	console.log('vijfde');
	yield 23;
	console.log('zesde');
	yield 42;
}

let source = myGen();
console.log(source.next());
console.log(source.next());
console.log(source.next());


function* traverse(node) {
    yield* node.left;  // 4 8 15 16
    yield node.value;
    yield* node.right;
}


// for (let item of myGen()) {
// 	console.log(item);
// }


// Node
// - JavaScript runtime
// - Ryan Dahl
// - 2009

// Deno
// - JavaScript runtime
// - 2020
// - Ryan Dahl
// - niet compatible met npm
// - TS out-of-the-box
// - security

// node bla.js
// deno --allow-read C:\temp bla.ts


// server.on('connection', (req, res) => {
//     res.send(...);
// });


// for await (let conn of server.connections) {

// }