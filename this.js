// 'use strict';

// this wijst naar
// - met new naar de instantie van je object (this is voorspelbaar)
//   - in functie op die instantie? gewoon naar de instantie.
// - zonder new - globale functie => globale object window/global/globalThis
//   - hij wijst naar de eigenaar van de functie
//   - met use strict wijst hij naar UNDEFINED
// global object pollution

function Customer(name, age) {
	// constructor function
	console.log('customer this:', this);

	this.name = name;
	this.age = age;

	this.buy = function () {
		console.log('buy this:', this);

		let self = this;

		// const nested = () => {
		// 	console.log('nested this:', this, self);
		// };
		// nested();
	};
}

let jp = new Customer('JP', 27);
console.log(jp);

jp.buy();

let hop = jp.buy;
hop.call({ name: 'Frank', age: 74 });
hop.apply({ name: 'Frank', age: 74 });

let aangepasteHop = jp.buy.bind({ name: 'Frank', age: 74 });
aangepasteHop();
aangepasteHop();
aangepasteHop();
aangepasteHop();


// jp.nested();
// let bladiebla = jp.buy;
// bladiebla();

// class HomeComponent {
//     products: Product[];

//     http = inject(HttpClient);

//     getProducts() {
//         this.http.get<Product[]>('api/products', products => {
//             self.products = products;
//         })
//     }
// }

/*
// AngularJS
angular.module('..').controller('BlaController', function() {
    this.bla = 'hoi';
});
*/
// web site <== heul veul  WordPress
// web application <== hier liever niet