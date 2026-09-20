/**
 * Function to format the primes and grid into a readable pipe-table string.
 * @param {number[]} primes - An array of prime numbers (used as row/column headers).
 * @param {number[][]} grid - A 2D array representing the grid of products.
 * @returns {string} - The formatted table as a single string, ready to print.
 */
function formatTable(primes, grid) {
    // Build the header row: blank cell, then each prime
    let header = "| ";
    for (let i = 0; i < primes.length; i++) {
        header += primes[i] + "| ";
    }

    const rows = [header];

    // Build each data row: starts with that row's prime, then its values
    for (let i = 0; i < grid.length; i++) {
        let row = "| " + primes[i] + "| ";
        for (let j = 0; j < grid[i].length; j++) {
            row += grid[i][j] + "| ";
        }
        rows.push(row);
    }

    return rows.join("\n");
}

module.exports = formatTable;