/**
 * Function to build a grid of products of prime numbers.
 * @param {number[]} primes - An array of prime numbers.
 * @returns {number[][]} - A 2D array representing the grid of products.
 */
function buildGrid(primes) {
    const grid = [];

    for (let i = 0; i < primes.length; i++) {
        const row = [];
        for (let j = 0; j < primes.length; j++) {
            row.push(primes[i] * primes[j]);
        }
        grid.push(row);
    }

    return grid;
}

module.exports = buildGrid;