const Controller = new AbortController();
const { signal } = Controller;

const getOnlineDetails = (i) => {
    // Manually create a new promise with resolve and reject
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${i}`, { signal })
            .then((response) => {
                return response.json(); // response.json() is a promise, so return it
            })
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error); // Handle errors or aborted fetches
            });
    });
};

let i = 1; // Start from 1 because the users start from ID 1

// Repeatedly fetch data every second until 5 iterations
const intervalId = setInterval(() => {
    if (i <= 100) {
        getOnlineDetails(i++)
            .then((result) => {
                console.log(JSON.stringify(result));
            })
            .catch((error) => {
                console.log('Error or Aborted', error);
            });
    } else {
        clearInterval(intervalId); // Clear the interval when done
    }
}, 100);

// Abort fetch requests after 10 seconds
setTimeout(() => {
    Controller.abort(); // Abort any ongoing fetch requests
    console.log('Controller Aborted');
}, 10000);
