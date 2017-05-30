'use strict';

class Calculator {
    add() {
        let x = 0;
        for (let i = 0; i < arguments.length; i++) {
            x = x + arguments[i];
        };
        return x;
    }

    multiply() {
        let x = 1;
        for (let i = 0; i < arguments.length; i++) {
            x = x * arguments[i];
        };
        return x;
    }
}

module.exports = Calculator;