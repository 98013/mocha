const Controller = new AbortController();
const { signal } = Controller;

export const topLevelAwaitController = () => {
    const { promise, resolve, reject } = Promise.withResolvers();
    fetch(`https://jsonplaceholder.typicode.com/comments/`, { signal })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    return promise;
};

try {
    const result = await topLevelAwaitController();
    console.log(JSON.stringify(result));
} catch (error) {
    console.log('Error or Aborted:', error.message);
}

export default topLevelAwaitController;
