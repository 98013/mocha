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
 * Iterables: Objects that can be iterated over using for...of.
 * Iterators: Objects with next() method that returns the next item in the sequence
 * Generators: Functions that can be paused and resumed, producing a sequence of values using yeild.
 */

const iterator = {
    next: () => {
        return {
            value: 0,
            done: false,
        };
    },
};
console.log(iterator.next());
