const { symbolName } = require('typescript');

console.log(typeof y);
var z = 1;
console.log(typeof y);
//y = z = typeof y;
//console.log(y);

function first() {
    console.log('One Executed');
}

function second() {
    console.log('Two Executed');
}

console.log(first() || second());

function one() {
    return 'one executed';
}

function two() {
    return 'two executed';
}

console.log(one() || two());

const getTextLength = (key) => {
    const textlimiter = {
        text: 60,
        email: 30,
        textarea: 500,
        options: 10,
    };

    return textlimiter[key];
};

console.log(getTextLength('text'));
console.log(getTextLength('email'));
console.log(getTextLength('textarea'));
console.log(getTextLength('options'));

const personalDetails = {
    name: 'Naseer Mohammed',
    age: 30,
    gender: 'Female',
};

const fn = (key, value) => {
    console.log(key);
    console.log(value);
    switch (key) {
        case 'name': {
            return 'Abraham Lincoln';
        }
        case 'age': {
            return 99;
        }
        case 'gender': {
            return 'others';
        }
        default: {
            return value;
        }
    }
};

personalDetails.occupation = 'Daily Wage Earner';
console.log(JSON.parse(JSON.stringify(personalDetails, fn)));
console.log(JSON.parse(JSON.stringify(personalDetails)));
console.log(
    Object.is(personalDetails, JSON.parse(JSON.stringify(personalDetails))),
);

/**
 * Difference between Iterables,Iterators, Generators.
 * Iterables: Objects that can be iterated over using for...of, an iterable is an object which has [symbol.iterator] method .
 * Iterators: Objects with next() method that returns the next item in the sequence, an object with next() method is iterator.
 * Generators: Functions that can be paused and resumed, producing a sequence of values using yeild.
 */

/**
 * Summary:
 * Iterable: Any object with a [Symbol.iterator]() method, which returns an iterator.
 * Iterator: An object that has a next() method, which returns { value, done }.
 * for...of:
 *Calls [Symbol.iterator]() to get an iterator.
 *Uses next() to retrieve each value until done is true.
 * So yes, you're correct! To make an object iterable, it needs [Symbol.iterator](). To make it an iterator, it needs the next() method to return values.
 *[Symbol.iterator]: Use this when you want a simple, readable way to yield multiple values using a generator function.
 *[Symbol.iterator]: function(): Use this when you need more control over the iteration process or when implementing more complex iteration logic.
 */

/**
  * Question:
  * mean to say an array has [symbol.iterator] so we call it as iterable and if an object has [symbol.iterator] and next() method we call it as an iterator is     that correct

  * Answer:
  * Yes, that’s correct! Here’s a concise summary:
  * Iterable: An object that has a [Symbol.iterator] method. This method returns an iterator. Arrays are examples of iterables because they have this method.
  * Iterator: An object that has a next method, which returns an object with done and value properties. The iterator is what you get when you call the 
  * [Symbol.iterator] method on an iterable.
  *So, an array is an iterable because it has a [Symbol.iterator] method. When you call this method, it returns an iterator, which has the next method.
  */

/**
   * Here is the exact execution.
   * The [Symbol.iterator] method itself does not call the next method. Instead, [Symbol.iterator] returns an iterator, and the next method is called on that iterator.
   *Here’s a step-by-step explanation:

   * Iterable: An object (like an array) that has a [Symbol.iterator] method.
   * Iterator: An object returned by the [Symbol.iterator] method. This iterator has a next method.
   * When you use a for...of loop or other iterable contexts, the [Symbol.iterator] method is called to get the iterator. Then, the next method of the 
    iterator is  called repeatedly to get the values.
   */

/**
When you define the [Symbol.iterator] method on an object, it enables the object to be iterated over using constructs like for...of loops. Here’s a detailed look at what happens internally:

Internal Process
1. Calling [Symbol.iterator]:
When an iteration starts (e.g., using a for...of loop), the [Symbol.iterator] method is called on the object.
This method should return an iterator object.
2. Iterator Object:
The iterator object must have a next() method.
The next() method is called repeatedly to get the next value in the sequence.
3. next() Method:
Each call to next() returns an object with two properties:
value: The next value in the iteration sequence.
done: A boolean indicating whether the iteration is complete.
 */

let i = 0;
const iteratorwhile1 = {
    counter: 0,
    next: function () {
        return {
            value: this.counter++,
            done: this.counter <= 5,
        };
    },
    [Symbol.iterator]() {
        return this;
    },
};

let next0 = {};
let next1 = {};
let next2 = {};
let next4 = {};

do {
    next0 = structuredClone(iteratorwhile1.next());
    console.log(next0);
} while (!next0.done);

do {
    next1 = structuredClone(iteratorwhile1.next());
    console.log(next1);
} while (!next1.done);

while (!next2.done) {
    next2 = structuredClone(iteratorwhile1.next());
    console.log(next2);
}

while (!next4.done) {
    next4 = structuredClone(iteratorwhile1.next());
    console.log(next4);
}

const obj = {
    next: function () {
        return { value: 1, done: false };
    },
    [Symbol.iterator]() {
        return this;
    },
};

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

const myIterable = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        let current = this.from;
        let last = this.to;
        return {
            next() {
                if (current <= last) {
                    return {
                        done: false,
                        value: {
                            done: true,
                            number: current,
                            object: { number: current++ },
                        },
                    };
                } else {
                    return {
                        done: true,
                        value: {
                            done: true,
                            number: current,
                            object: { number: current++ },
                        },
                    };
                }
            },
        };
    },
};

for (const item of myIterable) {
    console.log(item);
}
/**
 * How to attach the [Symbol.iterator] method to a object dynamically
 * Dynamically attach the [Symbol.iterator] method
 */

const myObject = {
    from: 1,
    to: 4,
};

myObject[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    return {
        next() {
            if (current <= last) {
                return { done: false, value: current++ };
            } else {
                return { done: true };
            }
        },
    };
};

// Now you can use the object in a for...of loop
for (const value of myObject) {
    console.log(value);
}
