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
    ShippingDetails: function (state) {
        switch (state) {
            case 'ups': {
                return {
                    name: this.name,
                    country: 'india',
                };
            }
            case 'upsa': {
                return {
                    name: this.name,
                    country: 'USA',
                };
            }
            case 'fedex': {
                return {
                    name: this.name,
                    country: 'USA',
                };
            }
            default: {
                return {
                    name: '',
                    country: '',
                };
            }
        }
    },
};

const stratergyPattern = Object.create(ShippingDetailsInfo);
console.log(stratergyPattern);
console.log(stratergyPattern.ShippingDetails('ups'));
console.log(stratergyPattern.ShippingDetails('upsa'));
console.log(stratergyPattern.ShippingDetails('fedex'));
console.log(stratergyPattern.ShippingDetails(''));

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
