/*
1. In Global Context - Window.
2. Inside a function - Window.
3. Inside a Constructor function - Empty Object or Constructor Object.
4. Inside Object with normal functions - Object.
5. Inside Object Arrow functions - Lexical Scope.
6. Inside a Inner functions - Lexical Scope.
7. Inside a function 'use strict is on' - In window - undefined.
*/

// Global Context - Window.
console.log('Global Context -', this);

//Function call - Window.
function callThisFunction() {
    console.log('Function call -', this);
}
callThisFunction();

//Function call with inner function - Window.
function callThisFunction1() {
    function innerFunction() {
        console.log('Function call with Normal Inner function -', this);
    }
    innerFunction();
}
callThisFunction1();

//Function call with inner Arrow function - Window.
function callThisFunction2() {
    innerFunction = () => {
        console.log('Function call with Arrow function -', this);
    }
    innerFunction();
}
callThisFunction2();


// Constructor Function always starts with Capital Letter, Constructor function - Empty Object, i.e. Object within it.
function Constructorcall() {
    console.log('Constructor Function -', this);
    this.name = 'Naseer';
    console.log('Constructor Function -', this);
}
let n = new Constructorcall();

// Object with normal Function refers Object.
let ObjectFunction = {
    name: 'Object Function',
    getName: function () {
        console.log('Object Function call with Normal Function - Object itself', this);
    }
}
ObjectFunction.getName();

// Object Function with Arrow Function refers Lexical Scope.
let ObjectFunction1 = {
    name: 'Object Function',
    getName: () => {
        console.log('Object Function call with Arrow Function - Lexical Scope', this);
    }
}
ObjectFunction1.getName();

"use strict"
function StrictFunction() {
    console.log('Function call with Strict -', this);
}
StrictFunction();

const person = {
    name: 'Naseer',
    gender: 'Male'
}

function callFunction() {
    console.log(arguments)
    console.log('call ', this)
}
callFunction.call(person, 'win', 'war');

function applyFunction() {
    console.log(arguments);
    console.log('Apply', this)
}
applyFunction.apply(person, ['win', 'war']);

function bindFunction() {
    console.log(arguments);
    console.log(this);
}
const binderFunction = bindFunction.bind(person, ['win', 'war']);
binderFunction();
