var age = 9;
var abc = 10;
function show() {
    console.log(age);
    let sal = 99;
    if (1) {
        let gender = 'Female';
        gender = 'Male';
        let vote = 'Casted';
        vote = 'Not Casted'
    }
    return innerFuction = () => ++sal;
}

const func = show();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());

// Closures. which preserves the value. Encapsulation.
function manager() {
    let count = 0;
    function increment() {
        let message = `score is ${++count}`;
        return function print() {
            console.log(message);
        }
    }
    return increment;
}

// stale Closure in eruped when you create a new instance on every call, rather than assignin it to a constant and calling it.
const incrementNew = manager();
incrementNew();
incrementNew();
incrementNew();
incrementNew();
const PrintFn = incrementNew();
PrintFn();

