// global object pollution

function bla() {
    console.log('hallo vanaf bla');

    let x = 14;
    const z = 123;

    // liever niet deze hieronder
    var y = 28;
    window.hoi = 'iets';
    // this.hoi = 'iets 2';

    dinges = 'hoi';

}
bla();
// console.log(x);
console.log(dinges);
// console.log(bla.x);

// Web Components
// <jouw-coole-component>

// customElements.define('jouw-coole-element', )

!function() {
    console.log('iife werkt zo ook 2');
}();
(function() {
    console.log('iife werkt zo ook 2');
})();
(() => {
    console.log('iiafe werkt zo ook 2');
})();



function test() {} // function declaration
let test2 = function( ){ }; // function expression



// Immediately Invoked Function Expression
// Immediately Invoked Arrow Function Expression
// Immediately Invoked Async Arrow Function ExpressionFE