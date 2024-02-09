/**
 * Chain Of Responsibility Method Design Pattern
 * Command Method Design Pattern
 * Interpreter Method Design Patterns
 * Iterator Method Design Pattern -
 * Mediator Method Design Pattern -
 * Memento Method Design Patterns
 * Observer Method Design Pattern -
 * State Method Design Pattern
 * Strategy Method Design Pattern -
 * Template Method Design Pattern
 * Visitor Method Design Pattern -
 */

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
 *  Mediator Pattern - Behavioural Design Pattern
 *  It’s particularly useful when you have a complex system with multiple objects that need to interact
 *  and you want to avoid the tight coupling that can arise from direct object-to-object communication.
 */

function AirTraffiController(planeName) {
    this.planename = planeName;
    this.ChatRoomInterface = null;
}

AirTraffiController.prototype = {
    takeOffSignal: function () {
        this.ChatRoomInterface = ChatRoomInterface;
        this.ChatRoomInterface.takeOffSignals(this);
    },
    landingSignal: function () {
        this.ChatRoomInterface = ChatRoomInterface;
        this.ChatRoomInterface.landingSignals(this);
    },
};

const ChatRoomInterface = {
    takeOffSignals: function (to) {
        console.log(`TakeOff Signal to, ${to.planename}.`);
    },
    landingSignals: function (to) {
        console.log(`Landing Signal to, ${to.planename}.`);
    },
};

function Plane(name) {
    this.name = name;
}

const plane1 = new Plane('Plane 1');
const plane2 = new Plane('Plane 2');
const plane3 = new Plane('Plane 3');
const airTraffiController1 = new AirTraffiController(plane2.name);
airTraffiController1.landingSignal();

const airTraffiController2 = new AirTraffiController(plane3.name);
airTraffiController2.takeOffSignal();

const airTraffiController3 = new AirTraffiController(plane1.name);
airTraffiController3.landingSignal();

/**
 * Visitor Pattern - Behavioural design pattern.
 * Visitor Pattern allows you to add or provide new operation and without actually changing the Receiver
 * Object itself, the functionality and logic is kept in separate object known as the visitor Object and * *Receiver Object does all the manipulation must have a method called accept method.
 */

function ReceiverObject(name, salary) {
    this.name = name;
    this.salary = salary;
}

ReceiverObject.prototype = {
    getSalary: function () {
        this.salary;
    },
    setSalary: function (sal) {
        return (this.salary = sal);
    },
    accept: function (visitorFunction) {
        visitorFunction(this);
    },
};

const receiver = new ReceiverObject('name', 10000);
function visitorObject(emp) {
    emp.setSalary(emp.getSalary() * 10);
}
receiver.accept(visitorObject);
console.log(receiver);
