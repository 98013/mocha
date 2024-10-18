const iterators = {
    i: 0,
    *[Symbol.iterator]() {
        while (this.i <= 5) {
            yield this.i++;
        }
    },
};

for (let values of iterators) {
    console.log(values);
}

iterators.i = 0;

const iteratorsGenOutput = iterators[Symbol.iterator]();
console.log(iteratorsGenOutput.next());
console.log(iteratorsGenOutput.next());
console.log(iteratorsGenOutput.next());
console.log(iteratorsGenOutput.next());
console.log(iteratorsGenOutput.next());
console.log(iteratorsGenOutput.next());
console.log(iteratorsGenOutput.next());

const iteratorsSecond = {
    i: 0,
    [Symbol.iterator]: function* () {
        while (this.i <= 5) {
            yield this.i++;
        }
    },
};

for (let values of iteratorsSecond) {
    console.log(values);
}

iteratorsSecond.i = 0;

const iteratorsGenOutputOne = iteratorsSecond[Symbol.iterator]();
console.log(iteratorsGenOutputOne.next());
console.log(iteratorsGenOutputOne.next());
console.log(iteratorsGenOutputOne.next());
console.log(iteratorsGenOutputOne.next());
console.log(iteratorsGenOutputOne.next());
console.log(iteratorsGenOutputOne.next());
console.log(iteratorsGenOutputOne.next());

const iteratorThird = {
    i: 0,
    [Symbol.iterator]() {
        return {
            i: this.i,
            next() {
                if (this.i <= 5) {
                    return { value: this.i++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
    },
};

for (let values of iteratorThird) {
    console.log(values);
}

const iteratorThirdOutput = iteratorThird[Symbol.iterator]();
console.log(iteratorThirdOutput.next());
console.log(iteratorThirdOutput.next());
console.log(iteratorThirdOutput.next());
console.log(iteratorThirdOutput.next());
console.log(iteratorThirdOutput.next());
console.log(iteratorThirdOutput.next());
console.log(iteratorThirdOutput.next());

const iteratorFourth = {
    i: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        while (this.i <= 5) {
            return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
    },
};

for (let values of iteratorFourth) {
    console.log(values);
}

iteratorFourth.i = 0;

const iteratorFourthOutput = iteratorFourth[Symbol.iterator]();
console.log(iteratorFourthOutput.next());
console.log(iteratorFourthOutput.next());
console.log(iteratorFourthOutput.next());
console.log(iteratorFourthOutput.next());
console.log(iteratorFourthOutput.next());
console.log(iteratorFourthOutput.next());
console.log(iteratorFourthOutput.next());

const asynIterator = {
    i: 0,
    *[Symbol.asyncIterator]() {
        while (this.i <= 5) {
            yield this.i++;
        }
    },
};

for await (let values of asynIterator) {
    console.log(values);
}

asynIterator.i = 0;

const asyncIteratorOutput = asynIterator[Symbol.asyncIterator]();
console.log(asyncIteratorOutput.next());
console.log(asyncIteratorOutput.next());
console.log(asyncIteratorOutput.next());
console.log(asyncIteratorOutput.next());
console.log(asyncIteratorOutput.next());
console.log(asyncIteratorOutput.next());
console.log(asyncIteratorOutput.next());
