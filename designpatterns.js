/**
 * Factory Design Pattern - Creational
 * Factory function which creates and return's an object.
 * where it encapsulates original object creation.
 */

/**
 * higher order function take function as argument and return a fuction is called as higher order function.
 * factory function where function return a Object is called factory function.
 */

console.log(new Array(10));
console.log(Array.from(new Array(10)));
console.log(new Array(10).fill(0));
console.log(Array.from(new Array(10).fill(1)));
console.log(new Array(10).fill(0).map((item, index) => index));
console.log(Array.from(new Array(10)).map((item, index) => index));

const factory = () => {
    const factoryObject = Array.from(new Array(10)).map(
        (item, index, self) => index,
    );
    return (i) => {
        return factoryObject.slice(0, i);
    };
};

const orderItems = factory();
console.log(orderItems(2));
console.log(orderItems(9));
console.log(orderItems(6));

/**
 * Singleton Design Pattern - Creational Design Pattern.
 * it is comes into existence when you want to limit the instances of the object to one.
 */

const singleton = (function () {
    let singletonObject;
    return function () {
        if (!singletonObject)
            return (singletonObject = { time: new Date().getTime().toFixed() });
        else {
            return singletonObject;
        }
    };
})();

const s1 = singleton();
const s2 = singleton();
console.log(s1);
console.log(s2);
console.log(Object.is(s1, s2));

/**
 * Note: when you call a constructor function without using new keyword it will be part of global Object.
 * Can be accessed using this keyword, it behaves like a normal object.
 */

singletonPattern = (function () {
    function Parent() {
        return { time: new Date().getTime().toString() };
    }

    let ObjectManangement;
    return (function () {
        if (!ObjectManangement) ObjectManangement = Parent();
        return ObjectManangement;
    })();
})();

console.log(singletonPattern);
const c1 = singletonPattern;
const c2 = singletonPattern;
const c3 = singletonPattern;
console.log(Object.is(c1, c2, c3));

/**
 * Stratergy pattern - Behavioral Design Pattern.
 * it is a behavioural design pattern that allows to switch between the stratergies at run time.
 */
const ShippingDetailsInfo = {
    name: 'naseer',
    ShippingDetails1: function () {
        return {
            name: this.name,
            country: 'India',
        };
    },
    ShippingDetails2: function () {
        return {
            name: this.name,
            country: 'USA',
        };
    },
    ShippingDetails3: function () {
        return {
            name: this.name,
            country: 'UK',
        };
    },
    default: function () {
        return {
            name: '',
            country: '',
        };
    },
};

const stratergyPattern = Object.create(ShippingDetailsInfo);
console.log(stratergyPattern.name);
console.log(stratergyPattern.__proto__);
console.log(stratergyPattern.ShippingDetails1('ups'));
console.log(stratergyPattern.ShippingDetails2('upsa'));
console.log(stratergyPattern.ShippingDetails3('fedex'));
console.log(stratergyPattern.default(''));

/**
 * Stratergy Pattern with Reflect.
 */
const strategies = {
    strategy1: function () {
        return 'Result of strategy1';
    },
    strategy2: function () {
        return 'Result of strategy2';
    },
};

function executeStrategy(strategyName) {
    return Reflect.apply(strategies[strategyName], null, []);
}

console.log(executeStrategy('strategy1')); // "Result of strategy1"
console.log(executeStrategy('strategy2')); // "Result of strategy2"

/**
 * Iterator Pattern - Behavioral Design Pattern.
 * it allows us to define our own set of rules, to traverse over some collection of Objects.
 */

const items = [1, 'devsage', false, 1.24];
function Iterator(items) {
    this.items = items;
    this.index = 0;
}

Iterator.prototype = {
    hasNext: function () {
        return this.index >= this.items.length
            ? 'Index cannot be greater than Array Length.'
            : `You can fetch the next item from the Array ${this.index}.`;
    },
    next: function () {
        return this.items[this.index++];
    },
};

const iterator = new Iterator(items);
console.log(iterator);
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.hasNext());

/** Observer Pattern - Behavioral Design Pattern.
 * where we define one to many dependency relationship, from one object know as subject to many other objects know as the Observers.
 * Observers are functions, which watch the Subject wait for signal or trigger from the subject before they run.
 */

function Subject() {
    this.observers = []; // Array of Observer functions.
}

Subject.prototype = {
    subscribe: function (subsciberFn) {
        [].concat(this.observers.push(subsciberFn));
    },
    unsubscribe: function (unsubscribeFn) {
        this.observers.splice(this.observers.indexOf(unsubscribeFn), 1);
    },
    firedrill: function () {
        return this.observers.map((fn, index) => fn());
    },
};

const Observer1 = function () {
    return 'function 1 gets called.';
};

const Observer2 = function () {
    return 'function 2 gets called.';
};

const Observer3 = function () {
    return 'function 3 gets called';
};

const subject = new Subject();
subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.subscribe(Observer3);

subject.unsubscribe(Observer1);

console.log(subject.firedrill());

/**
 * Proxy Pattern Structural Design Pattern.
 *  It provides a surrogate or placeholder for another object, allowing you to control access to it.
 *  This pattern is particularly useful in situations where you need to add an extra layer of control, lazy loading, or remote access to Objects
 */



