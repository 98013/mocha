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
  * mean to say an array has [symbol.iterator] so we call it as iterable and if an object has [symbol.iterator] and next() method we call it as an iterator is that correct

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

/**
 * if an object has [Symbol.iterator] is called iterable is that correct.
 * Yes, that's correct! In JavaScript, an object is considered iterable if it has a method keyed by the special symbol Symbol.iterator. This method should return an iterator, which is  * an object that conforms to the iterator protocol.
 *
 * Here's a brief breakdown:
 * Iterable: An object that has a Symbol.iterator method. This method doesn't take any arguments and returns an iterator.
 * Iterator: An object that has a next() method. The next() method returns an object with two properties:
 * done: A boolean indicating whether the iteration is complete.
 * value: The current value in the sequence.
 */

/**
 * it means iterator has both [Symbol.iterator] and next() then only it is called as iterator
 * Not exactly. An object does not need to have both Symbol.iterator and next() to be an iterator.

* Clarification:
* An iterator only needs to have the next() method, not necessarily the Symbol.iterator method.
* However, to be both iterable and an iterator, the object would have both methods:

* Iterator: Only requires the next() method.
* Iterable: Requires the Symbol.iterator method.
* If an object is both iterable and an iterator:
* The object implements both the Symbol.iterator method and the next() method. In this case, the Symbol.iterator method simply returns the object itself.

* Key Points:
* Iterator: Must have next(). It can be used directly for manual iteration, like this:

javascript
Copy code
let iterator = myObject;
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
Iterable: Must have Symbol.iterator. It can be used in loops like for...of.

* If an object is both iterable and an iterator, the Symbol.iterator method should return the object itself.
* So, an iterator doesn't need to have Symbol.iterator—but if it does, it can be both iterable and an iterator, making it usable in contexts that expect either.
 */

const iterableObject = {
    // an Object which has a method keyed using [Symbol.iterator] method is called iterable. this method does not take any argument and returns an iterator.
    [Symbol.iterator]() {
        return this; // returning the object itself (which is also an iterator)
    },
    next() {
        return { value: 0, done: false };
    },
};

console.log(iterableObject[Symbol.iterator]);
let iterator = iterableObject[Symbol.iterator](); // Returns an iterator
console.log(iterator.next());

/**
 * Yes, even if an object does not have a Symbol.iterator method, it can still be called an iterator if it implements the next() method.
 * The presence of Symbol.iterator is only necessary for an object to be considered iterable, not for it to be considered an iterator.
 * In short:
 * Iterator: An object with a next() method.
 * Iterable: An object with a Symbol.iterator() method, which returns an iterator.
 *
 * Key Concepts:
 * Iterable: An object with a Symbol.iterator() method that returns an iterator (an object with a next() method).
 * Iterator: An object with a next() method.
 */

let iteratorObject = {
    current: 1,
    last: 3,

    next() {
        if (this.current <= this.last) {
            return { value: this.current++, done: false };
        } else {
            return { value: undefined, done: true };
        }
    },
};

// Manually calling the iterator's next() method
console.log(iteratorObject.next()); // { value: 1, done: false }
console.log(iteratorObject.next()); // { value: 2, done: false }
console.log(iteratorObject.next()); // { value: 3, done: false }
console.log(iteratorObject.next()); // { value: undefined, done: true }

let myObjectIterator = {}; // Existing object

// Dynamically add a `next` method
myObjectIterator.next = (function () {
    let current = 1;
    let last = 5;

    return function () {
        if (current <= last) {
            return { value: current++, done: false };
        } else {
            return { value: undefined, done: true };
        }
    };
})();

// Now you can use the `next()` method on myObject
console.log(myObjectIterator.next()); // { value: 1, done: false }
console.log(myObjectIterator.next()); // { value: 2, done: false }
console.log(myObjectIterator.next()); // { value: 3, done: false }
console.log(myObjectIterator.next()); // { value: 4, done: false }
console.log(myObjectIterator.next()); // { value: 5, done: false }
console.log(myObjectIterator.next()); // { value: undefined, done: true }

/**
 * if a object has next() method then it is said to be iterator
 * if an object has [Symbol.iterator] and iterator that is next() method then it is called as iterable
 * if we have no next() method it of no purpose
 */

const finalIterator = {
    current: 1,
    last: 5,

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.current <= this.last) {
            return { value: this.current++, done: false };
        } else {
            return { value: 'none', done: true };
        }
    },
};

console.log(finalIterator.next());
console.log(finalIterator.next());
console.log(finalIterator.next());
console.log(finalIterator.next());
console.log(finalIterator.next());
console.log(finalIterator.next());

finalIterator.current = 1;

for (let value of finalIterator) {
    console.log(value); // This will run indefinitely! (Explained below)
}

finalIterator.current = 1;

// Create a generator function to yield { value, done }
function* generatorFromIterator(iterator) {
    let result;
    while ((result = iterator.next()).done === false) {
        yield result; // Yield the entire object returned from next()
    }
}

// Use the generator function in a for...of loop
for (let item of generatorFromIterator(finalIterator)) {
    console.log(item);
}

/**
 * Iterable Objects:

 * An object is considered iterable if it has a [Symbol.iterator] method. This method returns an iterator.
* This iterable can be used in constructs like for...of loops, the spread operator (...), and other iterable-consuming functions (e.g., Array.from()).
* Using for...of Loop:

* When you use a for...of loop on an iterable, JavaScript internally calls the iterable's [Symbol.iterator] method to obtain an iterator.
* The loop then repeatedly calls the iterator's next() method to retrieve the next value until done: true is returned, indicating the end of the iteration.

* Next Method:
* The next() method is part of the iterator interface. It returns an object with two properties: value (the current value of the iteration) and done (a boolean indicating whether there * are more values to iterate).
* You can call next() manually to retrieve values from the iterator. This allows for more granular control over the iteration process, including the ability to pause and resume as needed.

* Example for Clarity
* Here’s a concise example that brings all these points together:
 */

const iterableObject10 = {
    current: 0,
    last: 3,

    [Symbol.iterator]() {
        return this; // Return itself as the iterator
    },

    next() {
        if (this.current < this.last) {
            return { value: this.current++, done: false }; // More values available
        } else {
            return { value: undefined, done: true }; // Iteration complete
        }
    },
};

// Using the iterable in a for...of loop
for (let value of iterableObject10) {
    console.log(value);
}

for (let value of iterableObject10[Symbol.iterator]()) {
    console.log(value.next());
}

// Manually using the next() method
const iterator100 = iterableObject10[Symbol.iterator](); // Get the iterator

iterableObject10.current = 1;

console.log(iterator100.next()); // { value: 0, done: false }
console.log(iterator100.next()); // { value: 1, done: false }
console.log(iterator100.next()); // { value: 2, done: false }
console.log(iterator100.next()); // { value: undefined, done: true }

/**
 * Summary
The object is iterable because it has a [Symbol.iterator] method.
The for...of loop uses this method to get an iterator and calls next() behind the scenes.
The next() method allows you to manually retrieve values, enabling you to pause and resume the iteration process as needed.
 */

/**
How Generators Work
Generators as Iterables:
When you call a generator function (defined with function*), it returns a generator object. This object is iterable because it has a [Symbol.iterator]() method.
You can use this generator object directly in a for...of loop. In this context, the generator acts as an iterable.
Using for...of Loop:

When you use the generator in a for...of loop, JavaScript internally calls the generator's [Symbol.iterator]() method.
The loop then automatically calls the next() method on the generator to retrieve the values one at a time until it reaches the end of the iteration.
Example of Using a Generator as an Iterable
javascript Copy code
 */

function* myGenerator() {
    yield 1; // Yields 1
    yield 2; // Yields 2
    yield 3; // Yields 3
}

// Using the generator as an iterable
for (let value of myGenerator()) {
    console.log(value); // Outputs: 1, 2, 3
}

/**
Generators as Iterators
Assigning the Generator to a Variable:
If you assign the result of calling the generator function to a variable, you can treat that variable as an iterator.
In this case, you can manually call the next() method on it to control the iteration process more granularly.
Example of Using a Generator as an Iterator
javascript
Copy code
const iterator = myGenerator(); // Assigning the generator to a variable
 */
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true } // Iteration is complete
/**
Summary
In a for...of Loop:

The generator acts as an iterable. The loop handles the iteration automatically by calling next() on the generator.
When Assigned to a Variable:

The generator acts as an iterator. You can manually call next() to control the iteration process, retrieving values one by one.
Your understanding of how generators function as both iterables and iterators, depending on how they are used, is absolutely correct!
 */

const objectIterators = {
    current: 1,
    last: 5,
    [Symbol.iterator]: function* () {
        while (this.current <= this.last) {
            yield { value: this.current++, done: false };
        }
        yield { value: 'done', done: true };
    },
};

for (let value of objectIterators) {
    console.log(value);
}

for (let value in objectIterators) {
    console.log(value);
}

const myObectIterator = {
    current: 1,
    last: 5,
    [Symbol.iterator]() {
        let current = this.current;
        let last = this.last;
        return {
            next: () => {
                while (current <= last) {
                    return { value: current++, done: false };
                }
                return { value: 'undefined', done: true };
            },
        };
    },
};

for (let values of myObectIterator) {
    console.log(values);
}

for (let values in myObectIterator) {
    console.log(values);
}

const iterator99 = myObectIterator[Symbol.iterator]();
console.log(iterator99.next());
console.log(iterator99.next());
console.log(iterator99.next());
console.log(iterator99.next());
console.log(iterator99.next());
console.log(iterator99.next());

const myObectIterator1 = {
    current: 1,
    last: 5,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        while (this.current <= this.last) {
            return { value: this.current++, done: false };
        }
        return { value: undefined, done: true };
    },
};

for (let values of myObectIterator1) {
    console.log(values);
}

myObectIterator1.current = 1;
const iterator990 = myObectIterator1[Symbol.iterator]();
do {
    console.log(iterator990.next());
} while (!iterator990.next().done);

const generalObject = [
    {
        name: 'Naseer',
        age: 35,
    },
    {
        name: 'Azhaan',
        age: 3,
    },
    {
        name: 'Zameer',
        age: 37,
    },
    {
        name: 'Sameer',
        age: 33,
    },
    {
        name: 'Armaan',
        age: 1,
    },
];

for (let values of generalObject) {
    console.log(values);
}

const loopObject = generalObject[Symbol.iterator]();
console.log(loopObject.next());
console.log(loopObject.next());
console.log(loopObject.next());
console.log(loopObject.next());
console.log(loopObject.next());
console.log(loopObject.next());

for (let key in generalObject) {
    console.log(key);
}

for (let key of generalObject) {
    console.log(key);
}
