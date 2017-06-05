'use strict';

let Calculator = require('../src/Calculator');

describe('CalculatorClass', () => {
    let calculator;

    beforeAll(() => {
        calculator = new Calculator();
    });

    it('add() should correctly sum two negative values', () => {
        expect(calculator.add(-1, -9)).toBe(-10);
    });

    it('add() should correctly sum two positive values', () => {
        expect(calculator.add(1, 9)).toBe(10);
    });

    it('add() should correctly sum one positive and one negative values', () => {
        expect(calculator.add(-1, 9)).toBe(8);
    });

    it('add() should work independent of arguments position e.g. add(1,2) is equal add(2,1)', () => {
        expect(calculator.add(1, 2)).toBe(calculator.add(2, 1));
    });

    it('add() should correctly sum with decemal values', () => {
        expect(calculator.add(1, 9, 12.2)).toBe(22.2);
    });

    it('add() should correctly sum 3 values', () => {
        expect(calculator.add(1, 9, 12)).toBe(22);
    });

    it('add() should correctly work with single value', () => {
        expect(calculator.add(1)).toBe(1);
        expect(calculator.add(0)).toBe(0);
    });

    it('multiply() should correctly multiply two negative values', () => {
        expect(calculator.multiply(-1, -9)).toBe(9);
    });

    it('multiply() should correctly multiply two positive values', () => {
        expect(calculator.multiply(1, 9)).toBe(9);
    });

    it('multiply() should correctly multiply one positive  and one negative values', () => {
        expect(calculator.multiply(-1, 8)).toBe(-8);
    });

    it('multiply() should correctly multiply 3 values', () => {
        expect(calculator.multiply(1, 9, 2.2)).toBe(19.8);
    });

    it('multiply() should correctly multiply 3 values', () => {
        expect(calculator.multiply(1, 9, 2.2)).toBe(19.8);
    });

    it('multiply() should correctly multiply to 0 value', () => {
        expect(calculator.multiply(0, 9)).toBe(0);
    });

    it('multiply() should work independent of arguments position e.g. multiply(2,1) is equal multiply(1,2)', () => {
        expect(calculator.multiply(1, 2)).toBe(calculator.multiply(2, 1));
    });
});