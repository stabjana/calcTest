'use strict';

const { sum } = require('../calcLibrary.js');

describe('Testing sum with integers', () => {
    test('sum(1,1) returns 2', () => {
        expect(sum(1, 1)).toBe(2);
    });
    test('sum(2,3) returns 5', () => {
        expect(sum(2, 3)).toBe(5);
    });

    const testValues = [ // check if everything will fail without implementation (implementation is done here with putting return statement to calcLibrary.js)
        //   a  b  res
        [1, 1, 2],
        [2, 3, 5],
        [-2, -4, -6],
        [2, -4, -2],
        [-2, 4, 2],
        [0, 0, 0],
        [0, 3, 3],
        [3, 0, 3],
        [-3, 0, -3],
        [0, -3, -3],
        [123, 200, 323],
        [-500, -500, -1000],
        [500, 500, 1000],
        [500, -500, 0],
        [-500, 500, 0]
    ];

    test.each(testValues)('sum(%s, %s) = %s', (a, b, result) => { // %s = placeholders
        expect(sum(a, b)).toBe(result);
    })
});  //end of testing integers

describe('Testing sum with float', () => {
    const testValues = [
        [10, 11.5, 21.5],
        [2.5, 3, 5.5],
        [-2.5, 3, 0.5],
        [2.4, -2.5, -0.1],
        [499.9, 500.0, 999.9],
        [-499.9, 500.0, 0.1]
    ];

    test.each(testValues)('sum(%s, %s) = %s', (a, b, result) => {
        expect(sum(a, b)).toBeCloseTo(result);
    });
}); // %s = placeholders ... ('sum(%s, %s) = %s', (a, b, result) =>
//end of testing floats

describe('testing missing parameter', () => {
    test('sum() throws an exception', () => {
        expect(() => sum()).toThrow('parameter missing');
    });

    test('sum(1) throws an exception', () => {
        expect(() => sum(1)).toThrow('parameter missing');
    });

    test('sum("a") throws an exception', () => {
        expect(() => sum('a')).toThrow('parameter missing');
    });
});//end of testing missing parameter

describe('testing parameters are not numbers', () => {

    const testValues = [
        //label          a    b
        ["sum('1', '2')", '1', '2'],
        ["sum('1', 2)", '1', 2],
        ["sum(1, '2')", 1, '2'],
        ["sum('a', 'b')", 'a', 'b'],
        ["sum('', '')", '', ''],
        ["sum(true, true)", true, true],
        ["sum(false, false)", false, false]
    ];

    test.each(testValues)('%s throws "only numbers allowed"', (label, a, b) => {
        expect(() => sum(a, b)).toThrow('only numbers allowed');
    });

});

describe('testing parameters not between -500 and 500', () => {
    const testValues = [
        // a   b
        [1000, 500],
        [500, 1000],
        [500, 501],
        [-500.1, 200],
        [300, 500.1]
    ];

    test.each(testValues)('sum(%s, %s) throws "numbers not between -500 and 500"', (a, b) => {
        expect(() => sum(a, b)).toThrow('numbers not between -500 and 500');
    });
}); //end of numbers not between -500 and 500









