// beloven iets terug te geven op een later moment

// wrappers om async proces

// setTimeout(() => {})
// let xhr = new XMLHttpRequest();
// xhr.addEventListener('readystatechange', () => {

// });
// xhr.send();

// // Node.js
// const fs = require('fs');
// fs.readFile('ditbestand.txt', 'utf8', (err, content) => {

// });

// Promise: 1 resultaat - data / error
// Promise zijn eager

let prom = new Promise((resolve, reject) => {
	console.log('timeout starten');

	// async werk
	setTimeout(() => {
		console.log('timeout klaar');

		resolve(4);
		resolve(8);
		resolve(15);
		resolve(16);
		resolve(23);
		resolve(42);
		reject('fuck off');
	}, 2000);
});

// (async () => {
let result = await prom;
console.log('awaited result:', result);

// })();

setTimeout(() => {
	console.log('nu luisteren naar promise');

	prom.then(x => x * 5)
		.then(result => console.log('result:', result))
		.catch(err => console.log('ohoh:', err));
	prom.then(x => x * 5)
		.then(result => console.log('result2:', result))
		.catch(err => console.log('ohoh:', err));
}, 5000);

// fetch('api/proudcts').then(x => x.json()).then(products => {

// })

let prom1 = new Promise(res => setTimeout(() => res('eerste'), 1500));
let prom2 = new Promise((res, rej) => setTimeout(() => res('tweede'), 2500));
let prom3 = new Promise(res => setTimeout(() => res('derde'), 800));

let snelste = await Promise.race([prom1, prom2, prom3]);
console.log(snelste);

// Observables

// try {
// 	let results = await Promise.allSettled([prom1, prom2, prom3]);
// 	console.log(results);
// } catch (err) {
// 	console.log('oei:', err);
// }






// Promises 1 result eager
// Observables meerdere results "stream"  lazy
// - HttpClient  HTTP req => res
// - Reactive extensions for JavaScript
// - wordt voor een groot deel vervangen door Signals (Runes)
//   - signals is nog steeds reactief, maar procedureel uitgeschreven
//   - versimpelde reactiviteit


// product$.pipe(catchError()).subscribe();

// product$
//     .pipe(debounceTime(300), distinctUntilChanged(), switchMap())

