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
});

describe('Testing with floats', () => {
    const testValues = [
        [10, 11.5, 21.5],
        [2.5, 3, 5.5],
        [-2.5, 3, 0.5],
        [2.4, -2.5, -0.1],
        [499.9, 500.0, 999.9],
        [-499.9, 500.0, 0.1]
    ];
    test.each(testValues)('sum(%s, %s) = %s', (a, b, result) => { // %s = placeholders
        expect(sum(a, b)).toBeCloseTo(result);
    });
})

