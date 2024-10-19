// API call using generators
const apiGenerator = {
    i: 0,
    [Symbol.asyncIterator]() {
        return this;
    },
    async next() {
        while (true) {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${++this.i}`,
                );
                const data = await response.json();
                if (!!Object.keys(data).length) {
                    return {
                        value: data,
                        done: !!Object.keys(data).length ? false : true,
                    };
                }
            } catch (error) {
                return { value: error, done: true };
            }
        }
    },
};

(async () => {
    let apiGeneratorOutputResult = [];
    let resultApiGenerator;
    const apiGeneratorOutput = apiGenerator[Symbol.asyncIterator]();
    do {
        resultApiGenerator = await apiGeneratorOutput.next();
        console.log(resultApiGenerator);
        apiGeneratorOutputResult.push(resultApiGenerator);
    } while (!resultApiGenerator.done);
    console.log(apiGeneratorOutputResult);
})();
