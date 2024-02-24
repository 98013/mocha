/**
 * Adapter Method Design Patterns -
 * Bridge Method Design Patterns
 * Composite Method Design Patterns
 * Decorator Method Design Patterns
 * Facade Method Design Patterns
 * Flyweight Method Design Patterns
 * Proxy Method Design Patterns -
 */

/**
 * Adapter Method Deisgn Pattern - Structrual Design Pattern.
 * Used when two Object are incompatibalbe and wanted to talk to each other, wanted to build bridge between them what we call as adapter.
 * Target Interface: The common interface that the client code expects. This is the interface you want
 * your existing (old) and new components to conform to.
 * Adaptee: The existing component with an incompatible interface.
 * Adapter: The class that adapts the Adaptee’s interface to match the Target Interface.
 * Analogy - You have to connect 2 interfaces which are not compatatible with each other, in order to do * so we write a Adapter/Wrapper so that both those interfaces can understand each other, also this
 * pattern * is as know as client focused pattern.
 * Rweference - https://www.youtube.com/watch?v=eR22JuwTa54
 */

import { IAdapter } from './designInterface.ts';

class Adapte {
    specialRequest(): void {
        console.log('Special Request');
    }
}

class Adapter implements IAdapter {
    private adapte: Adapte;
    constructor(adapte: Adapte) {
        this.adapte = adapte;
    }
    request() {
        this.adapte.specialRequest();
    }
}

class Client {
    constructor(target: IAdapter) {
        target.request();
    }
}

let adapte = new Adapte();
let adapter = new Adapter(adapte);
console.log(new Client(adapter));

/**
 * Proxy Pattern Structural Design Pattern.
 *  It provides a surrogate or placeholder for another object, allowing you to control access to it.
 *  This pattern is particularly useful in situations where you need to add an extra layer of control,
 *  lazy loading, or remote access to Objects
 */

function CryptoCurrencyAPI() {
    this.givenValue = function (coin) {
        console.log('External API.');
        switch (coin) {
            case 'Bitcoin': {
                return 'BitCoin 1';
            }
            case 'Litecoin': {
                return 'LiteCoin 2';
            }
            case 'Etherium': {
                return 'Etherium 3';
            }
        }
    };
}

function ProxyObjectDailer() {
    this.ObjectDailer = Object.create(new CryptoCurrencyAPI());
    this.cache = {};
    this.pushKeys = function (coin) {
        console.log(coin);
        console.log(this.cache);
        if (this.cache[coin] == null) {
            this.cache[coin] = this.ObjectDailer.givenValue(coin);
        }
        return this.cache;
    };
}

const objectDailer = new ProxyObjectDailer();
console.log(objectDailer.pushKeys('Bitcoin'));
console.log(objectDailer.pushKeys('Etherium'));
console.log(objectDailer.pushKeys('Litecoin'));
console.log(objectDailer.pushKeys('Bitcoin'));
console.log(objectDailer.pushKeys('Bitcoin'));
console.log(objectDailer.pushKeys('Bitcoin'));
console.log(objectDailer.pushKeys('Bitcoin'));
console.log(objectDailer.pushKeys('Bitcoin'));
console.log(objectDailer.pushKeys('Bitcoin'));
console.log(objectDailer.pushKeys('Litecoin'));
