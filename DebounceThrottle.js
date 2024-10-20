/**
 * 
Absolutely. Throttle ensures your function is called during activity but with a controlled frequency (e.g., every 10 seconds during continuous resizing). Debounce waits until the activity has stopped for a specified time before executing your function (e.g., after the user stops resizing for 10 seconds).

Throttle: Control during activity. Debounce: Action after inactivity.
 */

function throttle(cb, delay) {
    let clearTimer;
    let flag = true;

    return function () {
        if (flag) {
            let result = cb.apply(this);
            flag = false;
            clearTimer = setTimeout(() => {
                flag = true;
            }, delay);
            return result;
        }
    };
}

function getData() {
    console.log(new Date()); // Returns current date and time
}

const myfunc = throttle(getData, 2000);
window.addEventListener('resize', myfunc);

// index.js
let counter = 0;
const getDataDebounce = () => {
    console.log('data fetched....', counter++);
};

const debounce = (cb, delay) => {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(context, args);
        }, delay);
    };
};
const betterFunction = debounce(getDataDebounce, 2000); // 300ms
