import topLevelAwaitController from './Promise-top-level-await.js';

topLevelAwaitController()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error:', error.message || error);
    });

// use node Promises.js to execute it, top-level await example.
