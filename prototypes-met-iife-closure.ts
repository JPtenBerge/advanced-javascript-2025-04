

let getallen = [ 4, 19, 4, 5, -4, 99, 64];
let tekstjes  = ['hoi', 'bla', 'doei', 'fietsjes', 'monitor'];
// let objecten = 

Array.prototype.orderBy = (function() {
    type OrderFn<T> = (list: T[]) => T[];

    const orderFns: {
        [key: string]: OrderFn<any>;
    } = {
        number: (list: number[]) => list.toSorted((a, b) => a - b),
        string: (list: string[]) => list.toSorted((a, b) => a.length - b.length),
        object: (list: object[]) => {
            // Implement your object sorting logic here if needed
            return list; // Placeholder
        },
    };

    return function<T>(): T[] {
        const type = typeof this[0];
        const orderFn = orderFns[type];
        if (orderFn) {
            return orderFn(this);
        }
        return this; // Return the original array if no sorting function is found
    };

})();



console.log(getallen.orderBy());
console.log(tekstjes.orderBy());
// getallen.toSorted((a, b) => console.log(a,b))

