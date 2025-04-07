let nu = new Date();
Date.prototype.toPrettyString = function () {
	return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
};

// polyfills

let day = nu.getDate();
let month = nu.getMonth();
let year = nu.getFullYear();

console.log(`${day}-${month + 1}-${year}`);
console.log(nu.toLocaleDateString());

console.log(new Date('2012/03/13'));
console.log(new Date('2012-03-13'));

console.log(nu.toPrettyString());

// weergeven - formatten
// parsen
// veranderen  +1 uur -1 dag
// communiceren met server - timezones

// if(!window.Temporal) {
//     window.Temporal = ...day;
// }
