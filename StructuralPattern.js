/**
 * Adapter Method Design Patterns
 * Bridge Method Design Patterns
 * Composite Method Design Patterns
 * Decorator Method Design Patterns
 * Facade Method Design Patterns
 * Flyweight Method Design Patterns
 * Proxy Method Design Patterns -
 */

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
