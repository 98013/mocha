/**
 * Factory Method Design Patterns -
 * Abstract Factory Method Design Patterns -
 * Singleton Method Design Pattern -
 * Prototype Method Design Patterns
 * Builder Method Design Patterns
 */

/**
 * Factory Design Pattern - Creational Design Pattern.
 * Factory function which creates and return's an object.
 * where it encapsulates original object creation.
 * Factory Method is a design pattern that defines an interface for creating an object
 */

/**
 * higher order function take function as argument and return a fuction is called as higher order function.
 * factory function where function return a Object is called factory function.
 * Factory Method is a design pattern that defines an interface for creating an object
 * Creates one type of object.
 */

console.log(new Array(10));
console.log(Array.from(new Array(10)));
console.log(new Array(10).fill(0));
console.log(Array.from(new Array(10).fill(1)));
console.log(new Array(10).fill(0).map((item, index) => index + 1));
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
 * Abstract Factory Design Pattern - Creational Design Pattern.
 * In Javascript Interface will act like abstract Factory.
 * Abstract Factory is a design pattern that provides an interface for creating a family of related or
 * dependent objects, without specifying their concrete classes.
 * Creates a family of related objects.
 */

/**
 *You defined an abstract class Icomment, which is the abstract factory interface that declares the common
 * interface for creating comments
 */
class Icomment {
    constructor(comment) {
        this.comment = comment;
    }
    // this method is common for all child classes.
    text() {
        return this.comment + ' ' + new Date().getUTCMilliseconds().toString();
    }
}

class FaceBook extends Icomment {
    constructor(comment) {
        super(comment);
    }
    format() {
        return this.comment + ' ' + new Date().getUTCMilliseconds().toString();
    }
}

class InstaGram extends Icomment {
    constructor(comment) {
        super(comment);
    }
    // this method differs from other class.
    format() {
        return this.comment + ' ' + new Date().getUTCMilliseconds().toString();
    }
}

/**
 * FaceBookFactory and InstaGramFactory: These are concrete factory classes that implement the create method  * for creating comments.
 */

//ConcreteFactory produces FaceBook Comment.
/**
 * Yes, this block is playing a vital role in the abstract factory pattern. This block defines the concrete factory classes that create comments for different social media platforms. They implement the create method that returns instances of FaceBook and InstaGram, which are the concrete products. The client code uses these concrete factories to create comments without specifying their concrete classes, but only using the abstract factory interface, Icomment. This way, the client code is decoupled from the implementation details and can work with different types of comments that share some common features, but vary in other aspects.
 */
class FaceBookFactory {
    create(comment) {
        return new FaceBook(comment);
    }
}

/**
 * Yes, this block is playing a vital role in the abstract factory pattern. This block defines the concrete factory classes that create comments for different social media platforms. They implement the create method that returns instances of FaceBook and InstaGram, which are the concrete products. The client code uses these concrete factories to create comments without specifying their concrete classes, but only using the abstract factory interface, Icomment. This way, the client code is decoupled from the implementation details and can work with different types of comments that share some common features, but vary in other aspects.
 */

//ConcreteFactory Produces Instagram Comment.
class InstaGramFactory {
    create(comment) {
        return new InstaGram(comment);
    }
}

let comments = [];
let facebook = new FaceBookFactory();
let instagram = new InstaGramFactory();

comments.push(facebook.create('FaceBook Account 1 Created'));
comments.push(facebook.create('FaceBook Account 2 Created'));
comments.push(instagram.create('Instagram Account 1 Created'));
comments.push(instagram.create('Instagram Account 2 Created'));

comments.forEach((comment) => {
    // calling abstactfactory common method
    console.log(comment.text());
    // individual child class method.
    console.log(comment.format());
});

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
 * Prototype Design Pattern - Creational Design Pattern.
 * git clone is the best example of prototype design pattern, where you are cloning the existing Object rather than
 * creating a new Object from the scratch.
 */


