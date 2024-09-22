const Controller = new AbortController();
const { signal } = Controller;
//console.log(signal);

const getOnlineDetails = async (i) => {
    const { promise, resolve, reject } = Promise.withResolvers();
    //console.log(promise, resolve, reject);
    fetch(`https://jsonplaceholder.typicode.com/users/${i}`, { signal })
        .then((response) => {
            const jsonResult = response.json();
            const result = jsonResult;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    return promise;
};

i = 0;

setInterval(() => {
    while (i < 5) {
        getOnlineDetails(i++).then((result) =>
            console.log(JSON.stringify(result)),
        );
    }
}, 1000);

setTimeout(() => {
    Controller.abort();
    console.log('Controller Aborted');
}, 10000);

//export default await getOnlineDetails; is this code correct to abort the promise
