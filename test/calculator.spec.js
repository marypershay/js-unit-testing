'use strict';

let Calculator = require('../src/Calculator');

describe('CalculatorClass', () => {
    let calculator;

    beforeAll(() => {
        calculator = new Calculator();
    });

    it('should display properly work of add() method', () => {
        expect(calculator.add(1)).toBe(1);
        expect(calculator.add(-1, 8)).toBe(7);
        expect(calculator.add(0)).toBe(0);
        expect(calculator.add(-1, -9)).toBe(-10);
        expect(calculator.add(1, 9)).toBe(10);
        expect(calculator.add(1, 9, 12)).toBe(22);
        expect(calculator.add(1, 9, 12.2)).toBe(22.2);
    });

    it('should display properly work of multiply() method', () => {
        expect(calculator.multiply(1)).toBe(1);
        expect(calculator.multiply(-1, 8)).toBe(-8);
        expect(calculator.multiply(0)).toBe(0);
        expect(calculator.multiply(-1, -9)).toBe(9);
        expect(calculator.multiply(1, 9)).toBe(9);
        expect(calculator.multiply(0, 9)).toBe(0);
        expect(calculator.multiply(1, 9, 2.2)).toBe(19.8);
    });
});