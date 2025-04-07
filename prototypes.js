// JavaScript's manier van OVERERVING

// extends

function Mammal() {
    this.name = 'Frank';
	this.speak = function () {
		console.log('Hmmmmmmmmmmmaaaaahh', this.name);
	};
}

function Human(name) {
	this.name = name;

	// this.speak = function () {
	// 	console.log('Hallo ik ben', name);
	// };
}
Human.prototype = new Mammal();

// Human.prototype = new Spider();

let oscar = new Human('Oscar');
console.log(oscar);
oscar.speak();

// class Hopla {
//     name = 'JP';
// }

function Hopla() {
    this.name = 'Oscar';
}

class Ding extends Hopla {

}
console.log(new Ding());

class Whatever extends func() {

}



// class HomeComponent extends destroyMixin() {
//     subscription;

//     getProducts() {
//         this.subscription = this.http.get<Product[]>('api/products').pipe(takeUntil(this.destroy$));
//     }
// }

// function destroyMixin() {
//     return class implements OnDestroy {
//         destroy$ = new Subject<void>();

//         ngOnDestroy() {
//             this.destroy$.next();
//         }
//     }
// }


// extension methods
