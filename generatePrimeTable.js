const getFirstNPrimes = require('./src/getFirstNPrimes')
const buildGrid = require('./src/buildGrid')
const formatTable = require('./src/formatTable')

// Get user input from command line arguments
const UserInput = process.argv[2];
// Convert the input to a number
const n = Number(UserInput);

// Check if the input is a valid whole number greater than or equal to 1
// process.exit(1) will terminate the program if the input is invalid
// process.exit(0) would indicate a successful termination, but we use 1 to indicate an error
if (isNaN(n) || n < 1) {
    console.log("Please enter a whole number that is at least 1.");
    process.exit(1);
}

const primes = getFirstNPrimes(n);
const grid = buildGrid(primes);
const table = formatTable(primes, grid);
console.log(table);