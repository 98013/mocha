const Controller = new AbortController();
const { signal } = Controller;

const getOnlineDetails = (i) => {
    const { promise, resolve, reject } = Promise.withResolvers();
    fetch(`https://jsonplaceholder.typicode.com/comments/${i}`, { signal })
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

let i = 1;
const intervalId = setInterval(() => {
    if (i <= 10) {
        getOnlineDetails(i++)
            .then((result) => console.log(JSON.stringify(result)))
            .catch((error) => {
                console.log('Error or Aborted', error.message);
            });
    } else {
        clearInterval(intervalId);
        Controller.abort();
        console.log('Controller Aborted');
    }
}, 100);
