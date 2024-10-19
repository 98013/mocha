const { symbolName } = require('typescript');

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

const asynIteratorOne = {
    i: 0,
    [Symbol.asyncIterator]: function* () {
        while (this.i < 5) {
            yield this.i++;
        }
    },
};

for await (let value of asynIteratorOne) {
    console.log(value);
}

asynIteratorOne.i = 0;

const asynIteratorOneOutputOne = asynIteratorOne[Symbol.asyncIterator]();
console.log(asynIteratorOneOutputOne.next());
console.log(asynIteratorOneOutputOne.next());
console.log(asynIteratorOneOutputOne.next());
console.log(asynIteratorOneOutputOne.next());
console.log(asynIteratorOneOutputOne.next());
console.log(asynIteratorOneOutputOne.next());

const asyncIteratorTwo = {
    i: 0,
    [Symbol.asyncIterator]() {
        return {
            i: this.i,
            async next() {
                while (this.i <= 5) {
                    return Promise.resolve({ value: this.i++, done: false });
                }
                return Promise.resolve({ value: undefined, done: true });
            },
        };
    },
};

(async () => {
    for await (let values of asyncIteratorTwo) {
        console.log(values);
    }
})();

const asyncIteratorTwoOutput = asyncIteratorTwo[Symbol.asyncIterator]();
let result = await asyncIteratorTwoOutput.next();
console.log(result);

while (!result.done) {
    result = await asyncIteratorTwoOutput.next();
    console.log(result);
}

const asyncIteratorThird = {
    i: 100,
    [Symbol.asyncIterator]() {
        return this;
    },
    async next() {
        while (this.i <= 105) {
            return Promise.resolve({ value: this.i++, done: false });
        }
        return Promise.resolve({ value: undefined, done: true });
    },
};

(async () => {
    for await (const values of asyncIteratorThird) {
        console.log(values);
    }
})();

(async () => {
    const asyncIteratorThirdOutput = asyncIteratorThird[Symbol.asyncIterator]();
    let result;

    do {
        result = await asyncIteratorThirdOutput.next();
        console.log(result);
    } while (!result.done);
})();

// API call using generators

const apiGenerator = {
    i: 0,
    [Symbol.asyncIterator]() {
        return this;
    },
    async next() {
        let data;
        do {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${++this.i}`,
                );
                data = await response.json();
                if (data) {
                    return { value: data, done: false };
                }
            } catch (error) {
                return { value: undefined, done: true };
            }
        } while (!data);
        return { value: undefined, done: true };
    },
};

const apiGeneratorOutput = apiGenerator[Symbol.asyncIterator]();
const resultApiGenerator = await apiGeneratorOutput.next();
console.log(resultApiGenerator);

(async () => {
    const apiGeneratorOutput = apiGenerator[Symbol.asyncIterator]();
    const apiGeneratorOutputResult = [];
    let resultApiGenerator;

    do {
        resultApiGenerator = await apiGeneratorOutput.next();
        apiGeneratorOutputResult.push(resultApiGenerator);
    } while (!resultApiGenerator.done);

    console.log(apiGeneratorOutputResult);
})();
