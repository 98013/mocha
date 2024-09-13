/**
 * Conclusion
 * Proxies are highly versatile and powerful tools in JavaScript, offering a way to create custom
 * behaviors for objects and functions. They are particularly useful in situations where you need to
 * monitor, validate, or extend the behavior of objects and functions, making them valuable in various
 * contexts, from simple validations to complex framework-level abstractions.
 */

/**
 * JavaScript’s Proxy object can be used to create reactive data structures by intercepting operations on objects.
 * You can create a simple publish-subscribe (PubSub) system to handle reactivity.
 */

/**
 * Use Case: Ensure that property value meets certain criteria being set.
 * eg:Validating that a user's age is a number and within a specific range.
 */
const user = {
    name: 'jhon',
    age: 30,
};

const handler = {
    set: function (target, property, value) {
        if (property == 'age') {
            if (typeof value != 'number' || value < 0 || value > 120) {
                throw new RangeError(
                    'Age must be a valid number between 0 and 120',
                );
            }
        }
        target[property] = value;
        return true;
    },
    get: function (target, property) {
        return target[property];
    },
};

/**
 * older method can also be used to create reactive properties.
 */

const personDefine = {};
Object.defineProperty(personDefine, 'name', {
    set(value) {
        console.log(`Name changes to ${value}`);
        nameValue = value;
    },
    get() {
        return nameValue;
    },
});

personDefine.name = 'Naseer Mohammed';
console.log(personDefine.name);

const proxy = new Proxy(user, handler);
console.log(proxy);
proxy.age = 25;
console.log(proxy.age);
try {
    proxy.age = 'twenty-five'; // Throw Error.
} catch (error) {
    console.log(error.message);
}

/**
 * Use Case: Restirict or monitor access to certain properties
 * eg:prevent certain properties from being accessed or log access to specific properties.
 */

const employee = {
    name: 'Alice',
    position: 'Developer',
    salary: 10000,
};

const handler1 = {
    get: function (target, property) {
        if (property === 'salary') {
            console.log('Access to salary is restricted.');
            return 'Access Denied';
        }
        return target[property];
    },
};

const proxy1 = new Proxy(employee, handler1);
console.log(proxy1.name);
console.log(proxy1.salary);

/**
 * Use Case: Provide default values for properties that are not explicitly set.
 * eg: Return a default value for properties that are undefined or do not exist.
 */

const config = {
    apiEndPoint: '/api',
    timeout: 5000,
};

const handler2 = {
    get: function (target, property) {
        return property in target ? target[property] : 'Default value';
    },
};

const proxy3 = new Proxy(config, handler2);
console.log(proxy3.apiEndPoint);
console.log(proxy3.retryCount);

/**
 * Dynamic Properties
 * Use Case : create properties  on the fly that are computed or generated dynamcially.
 * eg: Automatically generates full names from the first and last names.
 */

const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
};

const handlerDynamicProperties = {
    get: function (target, property) {
        if (property === 'fullName') {
            return `${target.firstName} ${target.lastName}`;
        }
        return target[property];
    },
};

const proxyDynamicProperties = new Proxy(person, handlerDynamicProperties);
console.log(proxyDynamicProperties.fullName);

/**
 * Function Argument Validation.
 * Use Case : Validate  function arguments to ensure they meeet expected criteria.
 * eg: Ensure that function always recevies a number as an argument.
 * */

function multiply(a, b) {
    return a * b;
}

const handlerArgumentValidation = {
    apply: function (target, thisArgs, argumentList) {
        if (argumentList.some((arg) => typeof arg !== 'number')) {
            throw new TypeError('All arguments must be numbers');
        }
        console.log(...argumentList);
        console.log(thisArgs);
        console.log(target(...argumentList));
        return target(...argumentList);
    },
};

const proxyArugmentValidation = new Proxy(multiply, handlerArgumentValidation);
console.log(proxyArugmentValidation(2, 3));
try {
    proxyArugmentValidation(2, 'three');
} catch (error) {
    console.log(error.message);
}

/**
 *  Observables and Data Binding
 * Use Case: Automatically detect and react to changes in data(commonly) used in frameworks like vue.js
 * eg: Automatically log when any property of an object modified.
 */

const data = {
    name: 'Jane',
    age: 25,
};

const handlerObservableDataBinding = {
    set: function (target, property, value) {
        console.log(`${property} changed to ${value}`);
        target[property] = value;
    },
    get: function (handler, property) {
        return handler[property];
    },
};

const proxyObservableDataBinding = new Proxy(
    data,
    handlerObservableDataBinding,
);
proxyObservableDataBinding.name = 'Janet';
proxyObservableDataBinding.age = 26;
console.log(proxyObservableDataBinding.name);
console.log(proxyObservableDataBinding.age);

/**
 * Revocable Proxies
 * Use case: creating proxies that can be revoked, disabling further operations on the target Object.
 * eg: Temporaraily allow access to an object and then revoke it.
 */

const targetRevocable = { names: 'Bob' };
const handlerRevocable = {};
const { proxyrevocable, revoke } = Proxy.revocable(
    targetRevocable,
    handlerRevocable,
);
//console.log(proxyrevocable.names);
revoke(); // Revokes the proxy
try {
    console.log(proxyrevocable.names);
} catch (error) {
    console.log(error.message);
}

/**
 * Reflection
 * Use Case: Extend or replace the default behaviour of javascript opreations
 * eg: intercept and extend the the behaviour of property descriptors.
 */

const targetReflection = { a: 1 };
const handlerReflection = {
    getOwnPropertyDescriptor(target, property) {
        const descriptor = Reflect.getOwnPropertyDescriptor(target, property);
        if (descriptor) {
            descriptor.configurable = false;
        }
        return descriptor;
    },
};

/**
 * Will not override configurable due to the proxy
 */
const proxyReflection = new Proxy(targetReflection, handlerReflection);
console.log(
    Object.defineProperty(proxyReflection, 'a', { configurable: true }),
);
console.log(
    Object.defineProperty(proxyReflection, 'a', { configurable: false }),
);

/**
 * After understanding what is reactivity, which is used to create reactive data structures by intercepting operation on objects.
 * we can create simple publish-subscriber (PubSub) system to handle reativity.
 */

const reactiveHandler = {
    set: function (target, property, value) {
        if (property === 'name' && typeof property === 'string')
            target[property] = value;
        return true;
    },
    get: function (target, property) {
        return target[property];
    },
};

const proxyReactive = new Proxy({}, reactiveHandler);
proxyReactive.name = 'Naseer';
console.log(proxyReactive.name);

const PubSub = {
    events: {},
    subscribe(event, callback) {
        //if (!this.events[event]) this.events[event] = [];
        if (this.events[event] == null || undefined) this.events[event] = [];
        console.log(this.events);
        console.log(this.events[event]);
        console.log(event);
        console.log(callback);
        this.events[event].push(callback);
        console.log(this.events);
        console.log(this.events[event]);
    },
    publisher(event, data) {
        if (this.events[event]) {
            console.log(this.events);
            console.log(data);
            this.events[event].forEach((...callback) => {
                console.log(callback(data));
            });
        }
    },
};

PubSub.subscribe('update', function () {
    console.log(data);
});
PubSub.publisher('update', 'Data updated!');
