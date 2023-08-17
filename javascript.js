console.log(
    '%c********************************************************javascript**********************************************************************************',
    'color: yellow; font-weight: bold;',
);
// # Object.Create() is used to create a new object using exsiting object as Prototype.
// # Object.create used to create a new Object.
var createObject = {
    name: 'Naseer Mohammed',
    age: 21,
    gender: 'Male',
    printName: function () {
        console.log(`My name is ${this.name}`);
    },
};

const duplicatecreateObject = Object.create(createObject);

let duplicatecreateObject1 = Object.create(createObject, {
    email: { value: 'mdnaseer70@gmail.com' },
    getName: {
        value: function () {
            return this.email;
        },
    },
});

console.log(createObject);
console.log(duplicatecreateObject);
console.log(duplicatecreateObject1);
console.log(Object.getPrototypeOf(duplicatecreateObject) === createObject);
console.log(Object.getPrototypeOf(duplicatecreateObject1) === createObject);
console.log(duplicatecreateObject === duplicatecreateObject1);

const person = {
    name: 'Naseer',
    gender: 'male',
    age: 32,
    gettingInfo: function () {
        return console.log(
            `Name ${this.name} - age ${this.age} - gender ${this.gender}`,
        );
    },
};

const personBluePrint = Object.create(person);
console.log('Object.Create', personBluePrint.gettingInfo());

personBluePrint.name = 'Naseer Mohammed';
personBluePrint.gener = 'Male';
personBluePrint.age = 30;
console.log(personBluePrint.gettingInfo());

// #Object.assign copies all the properties for the specified source to target.
var assingObject = {
    name: 'x',
    age: 21,
    gender: 'Male',
    printName: function () {
        console.log('My name is ${this.name}');
    },
};

var assingObjectDuplicate = {
    nickName: 'Another',
    gender: 'Male',
    age: 1,
    printAge: function () {},
};
var p = {
    x: 1,
};
var x = Object.assign(assingObject, assingObjectDuplicate);
var y = Object.assign(p, assingObject, assingObjectDuplicate);
console.log(x);
console.log(y);

// 4 ways to convert array to object
let arr = ['Apple', 'Orange', 'Banana'];
let obj = Object.assign({}, arr);
console.log('Type-1', obj);
console.log('Type-2', { ...obj });
let temp = {};
arr.map((item, index) => (temp[index] = item));
console.log('Type-3', temp);
//fromEntries is used to create a object form the array of array or Map Object.
let temp1 = Object.fromEntries([
    ['0', 'Apple'],
    ['1', 'Orange'],
    ['2', 'Banana'],
]);
console.log('Type-4', temp1);

//convert object to array
let tempArray = {};
const tempObj = { 0: 'Apple', 1: 'Orange', 2: 'Banana' };
console.log('Object keys', Object.keys(tempObj));
console.log('Object values', Object.values(tempObj));
console.log('keys and values-1', Object.entries(tempObj));
console.log('keys and values-2', { ...Object.entries(tempObj) });
for (let [key, value] of Object.entries(tempObj)) {
    console.log(`${key}:${value}`, (tempArray[key] = value));
}
console.log('converting Object to Array', tempArray);

//we can use Array.from() to convert object to Array.
console.log(
    'converting Array to Object using Array.from method ',
    Array.from({ 0: 'Apple' }),
);

// uses of spread operator
//creating a copy of an orignial array
const initiaArray = ['Apple', 'Orange', 'Banana'];
const tempInitialArray = [...initiaArray];
console.log(
    'creating new array from existing array',
    initiaArray,
    tempInitialArray,
    initiaArray === tempInitialArray,
);
// we can use slice to create a new array from exising Array using slice
const slicedArray = initiaArray.slice();
console.log(
    'slice method',
    initiaArray,
    slicedArray,
    initiaArray === slicedArray,
);
// #Array.from() used to create a shallow copy of an Array. which might be a string or having length property.
const shallowCopyArray = Array.from(initiaArray);
console.log(
    'array from method',
    initiaArray,
    shallowCopyArray,
    initiaArray === shallowCopyArray,
);
//concatenate two array
console.log('concatenating two arrays', [...initiaArray, ...tempInitialArray]);
//concatenate two array and remove duplicates
console.log('concatenating two arrays and removing duplicates ', [
    ...new Set([...initiaArray, ...tempInitialArray]),
]);
function cleanCode(a, b, c) {
    console.log('spreading it to pass as arguments', `${a}, ${b}, ${c}`);
}
cleanCode(...initiaArray);
//flattening an array
const flatteningArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const concatenatedArray = [].concat(...flatteningArray);
console.log('Concatenated Array', concatenatedArray);
console.log('Creating Object - 1', { ...flatteningArray });
console.log('Creating Object - 1', Object.assign({}, flatteningArray));
console.log('Creating Object - 2', Object.assign([], flatteningArray));
console.log('Creating Object - 2', Object.assign(flatteningArray));
console.log('Creating Object - 3', { ...concatenatedArray });
console.log('Creating Object - 3', Object.assign({}, concatenatedArray));
console.log('Creating Object - 4', Object.assign([], concatenatedArray));
console.log('Creating Object - 4', Object.assign(concatenatedArray));
console.log(
    'Creating Object - 5',
    Object.fromEntries([
        [1, 2],
        [3, 4],
        [5, 6],
    ]),
);

//converting string to numbers
const numbers = '123456789';
let conversion = Array.from(numbers, Number);
console.log(conversion);
let trueStatement = Array.from(['', 'Apple', undefined, null, 0], Boolean);
console.log(trueStatement);

//conditional way of adding properties
const objConditional = { name: 'Aple', age: 30 };
console.log({
    ...objConditional,
    ...(Boolean(1) ? { type: 'working' } : { type: 'Not working' }),
});

// map function
mapper = [
    { name: 'Apple 1' },
    { name: 'Orange 2' },
    { name: 'PineApple 3' },
    { name: 'Banana 4' },
];
diffmapper = [
    { name: 'Apple 1' },
    { name: 'Orange 2' },
    { name: 'PineApple 3' },
    { name: 'Banana 4' },
    { name: 'Mango 5' },
    { name: 'carrot 6' },
];
newMapper = mapper.map((item) => item.name.split(' ')[0]);
console.log(newMapper);
// difference between two arrays
differenceMapperUsingIncludes = Array.from(
    diffmapper,
    (x, index) => x.name !== mapper[index]?.name,
);
console.log('differenceMapperUsingIncludes', differenceMapperUsingIncludes);
console.log(
    'differenceMapperUsingIncludes',
    differenceMapperUsingIncludes.filter((x) => Boolean(x)),
);
differenceMapper = diffmapper.filter(
    (item, index, _arr) => item.name !== mapper[index]?.name,
);
console.log(differenceMapper);

//filter to arrays
filterArray = ['Apple 1', 'Orange 2', 'PineApple 3', 'Banana 4'];
diffFilterArray = [
    'Apple 1',
    'Orange 2',
    'PineApple 3',
    'Banana 4',
    'Mango 5',
    'Carrot 6',
];
console.log(
    'the difference of two arrays using filter ',
    diffFilterArray.filter((x, _index) => !filterArray.includes(x)),
);
console.log(
    'the difference of two arrays using map ',
    diffFilterArray.map((x, _index) => !filterArray.includes(x)),
);
console.log(
    'the difference of two arrays using foreach ',
    diffFilterArray.forEach((x, _index) => !filterArray.includes(x)),
);

//remove duplicates using reduce function.
const cleanArray = [];
const cleanArray1 = [];
const reduceRemoveDuplicates = [1, 1, 2, 6, 7, 8, 9, 9, 70, 70, 1, 1, 1, 9];
console.time();
reduceRemoveDuplicates.reduce((_preValue, currentValues) => {
    !cleanArray.includes(currentValues) && cleanArray.push(currentValues);
}, []);
console.timeEnd();
console.time();
reduceRemoveDuplicates.reduce((preValue, currentValues) => {
    preValue < currentValues ||
        (!cleanArray1.includes(currentValues) &&
            cleanArray1.push(currentValues));
}, []);
console.timeEnd();
console.log(cleanArray);
console.log(cleanArray1);

//  Map returns an Array
//   where as forEach returns undefined

// return number
const filteredArrays = [1, null, undefined, 100, 200, 300, 400, 0];
console.log(filteredArrays.filter(Boolean));

// remove duplicates from an object in an array
const cleanObject = {};
const cleanarray = [];
const duplicateObject = [
    { name: 'jhon' },
    { name: 'Orange' },
    { name: 'Brinjal' },
    { name: 'jhon' },
    { name: 'jhon' },
];
duplicateObject.reduce(
    (_previous, current) =>
        cleanObject[current?.name] ||
        (cleanObject[current?.name] = true && cleanarray.push(current)),
    [],
);
console.log('removed duplicates from the object', cleanarray);

let myString = 'Elephant';
console.log(myString[0]); //E
console.log(myString.split('')); //['E','l','e','p','h','a','n','t']
console.log([...myString]); //['E','l','e','p','h','a','n','t']
console.log(Array.from(myString));
console.log(Object.assign({}, myString)); //{"0": "E","1": "l","2": "e","3": "p","4": "h","5": "a","6": "n","7": "t"}
console.log(myString.slice()); // create a shallow copy both  refers to same memory locations.
console.log([...myString]); // creates a deep copy where both refers to different memory locations

const numbersToBeSliced = [0, 1, 2, 3, 4, 5];
const numberToBeSpliced = [100, 200, 300, 400, 500];

const silcedArray = numbersToBeSliced.slice(0, 4);
console.log(
    `Actual Array [0,1,2,3,4,5] Post slice of Original Array [${numbersToBeSliced}] Slice of (0,4) [${silcedArray}]`,
);

const splicedArray = numberToBeSpliced.splice(1, 3, 'A', 'B', 'C'); // insert element's.
console.log(
    `Actual Array [100,200,300,400,500] Post splice of Original Array [${numberToBeSpliced}] Splice of (1,3) [${splicedArray}]`,
);

//Array.from converts an iteriable string or iteriable object to Array.
//Array.fromEntries converts array of key value variables [[key, value]] or Map into object.
//

const val = Array.from({ length: 10 }, (_, value) => value * 2);
console.log(val); //[0,2,4,6,8,10,12,14,16,18]

const NumberInSeries = Array.from({ length: 10 }, (_, value) => value * 1 + 1);
console.log(NumberInSeries); //[1,2,3,4,5,6,7,8,9,10]

console.log(
    Array.apply(null, Array(5)).map(function (_x, i) {
        return i * 1 + 1;
    }),
);
console.log(
    Array.from(Array(5)).map((_x, i) => {
        return i * 1 + 1;
    }),
);
console.log(Array.from('abcd')); //['a','b','c','d']
console.log('x'.repeat(5)); // 'xxxxx'
console.log(
    Array.from('x'.repeat(5)).map(function (_x, i) {
        return i * 1 + 1;
    }),
);

// Function Borrowing, replacing this keyword with null also give use the same output 60.
function functionBorrowing(x, y, z) {
    return x + y + z;
}

console.log(functionBorrowing.call(this, 10, 20, 30)); // functionBorrowing.call(null,10,20,30)
console.log(functionBorrowing.apply(this, [10, 20, 30])); // functionBorrowing.apply(null,[10,20,30])
var bindingFunction = functionBorrowing.bind(this, 10, 20, 30); // functionBorrowing.bind(null,10,20,30)
console.log(bindingFunction());

const elementMissing = [1, 2, 4, 5];
function elementMissingPlaced(_arr, itemTobeAdded, index) {
    return [
        ...elementMissing.slice(0, index),
        itemTobeAdded,
        ...elementMissing.slice(index),
    ];
}

console.log(
    `Array with new Element ${elementMissingPlaced(elementMissing, 3, 0)}`,
);

// in javascript string a immutable.
var a = 100,
    b = 300,
    c = 100;
console.log(a, c);
c = 200;
console.log(a, c);

var a = 'naseer',
    b = 'mohammed',
    c = 'naseer';
console.log(a, c);
c = 'azhaan';
console.log(a, c);

/*
  event loop fetches asyn call from the callback queue and Microtask queue and places in the call stack.
*/

function callMicrotask() {
    console.log('Task 1');
    queueMicrotask(() => {
        console.log('Mimics Microtask Queue');
    });
    console.log('Task 2');
}

callMicrotask();

/* 
  promise's will be placed into Microtask queue which has highest priority in terms of execution
  and the javascript api's which will be placed into call back queue which has least priority compared to microtask queue
  Both Microtask queue and call back queue async function will be place into call stack by Event Loop.
*/

// setImmediate same as setTimeout.
setImmediate(() => {
    console.log('setImmediate call');
});

console.log('Execution Starts Here.'); // # will part of Main Thread.
setTimeout(() => {
    // #will be part of  Callback Queue Priority(2).
    console.log('Callback queue executed after Microtask Queue.');
}, 0);
new Promise((resolve) => {
    // # will be part of Micro Task Queue. Highest Priority(1).
    resolve('Promise: Microtask executed because of highest priority.');
    for (i = 0; i <= 1000000000; i++);
}).then((data) => {
    console.log(data);
});
console.log('Execution Ends Here.'); // # will be part of Main Thread.

//for await...of it maintains the order of the loop. promise.all will won't maintain the order.
async function main() {
    for await (const user of [
        { name: 'naseer' },
        { name: 'mohammed' },
        { name: 'Azhaan' },
        { name: 'Aydin' },
    ]) {
        console.log(user.name);
    }
}

main();

// making Object Property hide when we iteritate over the Object
const hideObjectProperties = { name: 'naseer', age: 32, secret: 'Secret' };
console.log(hideObjectProperties);
Object.defineProperty(hideObjectProperties, 'secret', {
    enumerable: false,
    value: 'Secret Service',
});
console.log(hideObjectProperties);
for (const props in hideObjectProperties) {
    console.log('loop over objects', props);
}
console.log(hideObjectProperties);

// #Generators in Javasript - USE CASE #used for Infinte Loop.
// #We can exit Generator Prematurely using gen.return(value) value in Argument is to return value and exit.
// #we can throw Error using gen.throw(new throw('local error'))
function* localGenerator() {
    yield* ['A', 'B', 'C', 'D', 'E'];
}

// IIFE(Immedietly Invoked Function - SELF INVOKING FUNCTION).
const genClosure = (function () {
    gen = localGenerator();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    return (innerFunction = () => {
        console.log(
            'Inner Function Exexution ' +
                new Date().getHours() +
                ':' +
                new Date().getMinutes() +
                ':' +
                new Date().getSeconds(),
        );
    });
})();

console.log(genClosure());

// #Example 2.
function* IteriatorFunction() {
    yield* 'x'
        .repeat(10)
        .split('')
        .map((_value, index) => index * 1 + 1000);
}

(async function () {
    const IteriatorFunctionLogger = IteriatorFunction();
    for await (const _logs of IteriatorFunctionLogger) {
        console.log('IteriatorFunctionLogger', IteriatorFunctionLogger.next());
    }
})();

const globalContext = () => {
    return {
        firstName: () => ({ case: 'First Name' }),
        secondName: () => ({ case: 'second Name' }),
    };
};

console.log(globalContext().firstName());
console.log(globalContext().secondName());

// #remove duplicates from an array.
const duplicates = [1, 2, 3, 1, 1, 1, 9, 0, 7, 6, 8, 3, 4, 5, 7, 6];
let fitertedItems0 = duplicates.filter(
    (value, index, array) => array.indexOf(value) === array.lastIndexOf(value),
);
let fitertedItems1 = duplicates.filter(
    (value, index, array) => index === array.lastIndexOf(value),
);
console.log(fitertedItems0.sort());
console.log(fitertedItems1.sort());

// #Missing Numbers in the Array
const missedArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
let numbergenerator = Array.from(
    'x'.repeat(numbers.length + 1).split(''),
    (x, i) => i + 1,
);
let numberMissing = numbergenerator.filter(
    (i, x, a) => missedArray.indexOf(i) === -1,
);
console.log(numberMissing);

i = 0;
var numbersArray = [];
// Generate Random numbers Math.floor(Math.random() * (maximum – minimum + 1)) + minimum
while (i < 10) {
    numbersArray.push(Math.floor(Math.random() * 101) + 1);
    i++;
}

console.log(numbersArray);
let randomMissingNumbers = numbergenerator.filter(
    (value, index, array) => numbersArray.indexOf(value) === -1,
);
console.log(randomMissingNumbers);

// 10 ways to creat a array
const mainArray = [1, 2, 3, 4, 5];
const a1 = mainArray;
console.log(1, Object.is(mainArray, a1), a1);
const a2 = [...mainArray];
console.log(2, Object.is(a2, mainArray), a2);
const a3 = Array.from(mainArray);
console.log(3, Object.is(a3, mainArray), a3);
const a4 = mainArray.map((array) => array);
console.log(4, Object.is(a4, mainArray), a4);
const a5 = mainArray.filter((array) => array);
console.log(5, Object.is(a5, mainArray), a5);
const a6 = mainArray.reduce((acc, value) => {
    acc.push(value);
    return acc;
}, []);
console.log(6, Object.is(a6, mainArray), a6);
const a7 = mainArray.slice();
console.log(7, Object.is(a7, mainArray), a7);
const a8 = mainArray.splice(0);
console.log(8, Object.is(a8, mainArray), a8);

let ct = ['ct0', 'ct1', 'ct2', 'ct3', 'ct4'];
const a9 = [].concat(ct);
console.log(9, Object.is(a9, ct), a9);
const a10 = JSON.parse(JSON.stringify(ct));
console.log(10, Object.is(a10, ct), a10);

const a11 = [];
ct.forEach((element) => {
    return a11.push(element);
});

console.log(11, Object.is(a11, ct), a11);
console.log(12, [...[], ...ct]);
