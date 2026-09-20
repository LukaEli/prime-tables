# Prime Tables

A simple Node.js program that takes a number N and prints a multiplication
table using the first N prime numbers.

## How to Run It

1. Clone this repository.
2. Open a terminal in the project folder.
3. Run `npm install` to install the packages needed for testing.
4. Run the program with a number, like this:
node generatePrimeTable.js 5
   This will print a multiplication table using the first 5 prime numbers.
5. To run the tests, use:
npm test

Note: the program itself (`generatePrimeTable.js`) does not use any
external packages — the prime number logic is written by hand. `npm install`
is only needed to install Jest, which is used for running the tests.

## What went well

- I split the code into small, separate functions (`isPrime`,
  `getFirstNPrimes`, `buildGrid`, `formatTable`), each in its own file.
  This makes the code easier to read and easier to test.
- While writing tests, I found a real bug: my `isPrime` function did not
  correctly handle invalid input (`NaN`). 
- I have tests covering all three core functions (`isPrime`,
  `getFirstNPrimes`, `buildGrid`), not just one.
- I added input validation, so the program shows a clear message instead
  of failing silently if the user enters something invalid.

## What I Would Do With More Time

If I had more time, I would turn this into a simple React app. The user
would type N into a text box, and the table would show up on the page
instead of in the terminal. I would also think about using TypeScript,
but the task asked for plain JavaScript with Node.js, so I stuck to that
instead.

I would also look at using an existing npm package to find prime numbers,
since that would make the code shorter and cleaner. But the task
specifically asked for a hand-written algorithm rather than a library
method.