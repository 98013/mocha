/**
 * Prototypal Inheritance
 * Object Literal where it has direct link with the Object.Prototype There’s no custom prototype chain setup — it’s just one object and its default prototype.
 * Constructor Function, Javascript automatically creates Person.prototype, that .prototype is linked to Object.prototype 
 * those method which sits on Object.prototype are available for all future instances
 * new keyword also points to Person.Prototype
 * 
 * 
 * Object Literal → Direct link to Object.prototype. - There’s no custom prototype chain setup — it’s just one object and its default prototype.
 * Constructor Function → Has a .prototype property for shared methods.
 * 
 * function person {
 * }
 * const personInstance = new Person("Alex");
 * 
 * 
 * new keyword → Creates an instance and links it to the constructor’s .prototype, which enables prototypal inheritance.
 */

/**
 * Object Literal
 * personObj directly inherits from Object.prototype (which contains built-in methods like .toString()).
 * There’s no custom prototype chain setup — it’s just one object and its default prototype.
 */
const person = { name: "Alex" };

function PersonObj() { }

// Define method on prototype
PersonObj.prototype.personCaller = function ()
{
    console.log('this is name');
};

PersonObj.prototype.sayHi = function ()
{
    this.personCaller(); // calls the method above for the current object
    console.log('Parent Function Call.');
};

PersonObj.prototype.sayHello = function ()
{
    console.log('Child Function Call.');
};

function Child() { }

// Set up prototype inheritance
Child.prototype = Object.create(PersonObj.prototype);
Child.prototype.constructor = Child; // fixed typo

const L1 = new Child();
L1.sayHi();     // Output: "this is name", then "Parent Function Call."
L1.sayHello();  // Output: "Child Function Call."





function Person(name)
{
    this.name = name
}

const pp = new Person('Naseer Mohammed');

Person.prototype.sayHi = function() {
    console.log('Prototype is working')
}

console.log('Prototype Object gets Created here as Person.prototype', Person.prototype);
console.log(Object.getPrototypeOf(pp));
console.log(pp.__proto__);
