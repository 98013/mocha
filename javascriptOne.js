const { symbolName } = require('typescript');

console.log(typeof y);
var z = 1;
console.log(typeof y);
//y = z = typeof y;
//console.log(y);

function first()
{
    console.log('One Executed');
}

function second()
{
    console.log('Two Executed');
}

console.log(first() || second());

function one()
{
    return 'one executed';
}

function two()
{
    return 'two executed';
}

console.log(one() || two());

const getTextLength = (key) =>
{
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

const fn = (key, value) =>
{
    console.log(key);
    console.log(value);
    switch (key)
    {
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

// remove duplicates
// filter() iterates over each actor.
// findIndex() returns the index of the first occurrence of an actor with the same name and age.
// The filter keeps only the first occurrence of each unique actor.
const actors = [
    { name: 'Prabhas', age: 41 },
    { name: 'Mahesh Babu', age: 45 },
    { name: 'NTR', age: 38 },
    { name: 'Prabhas', age: 41 },
    { name: 'Ram Charan', age: 36 },
    { name: 'Mahesh Babu', age: 45 }
];

const uniqueActors = actors.filter((actor, index, self) =>
    index === self.findIndex(a => a.name === actor.name && a.age == actor.age)
);

console.log(uniqueActors);
