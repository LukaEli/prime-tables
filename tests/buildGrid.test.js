const buildGrid = require('../src/buildGrid');

test('builds the correct multiplication grid', () => {
    expect(buildGrid([2, 3, 5])).toEqual([
        [4, 6, 10],
        [6, 9, 15],
        [10, 15, 25]
    ]);
});

test('builds a single-cell grid when there is only one prime', () => {
    expect(buildGrid([2])).toEqual([[4]]);
});

test('builds a correctly sized grid for a larger set of primes', () => {
    const result = buildGrid([2, 3, 5, 7]);
    expect(result.length).toBe(4);
    expect(result[0].length).toBe(4);
});