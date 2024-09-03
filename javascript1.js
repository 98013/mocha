console.log(typeof y);
var z = 1;
console.log(typeof y);
y = z = typeof y;
console.log(y);

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
